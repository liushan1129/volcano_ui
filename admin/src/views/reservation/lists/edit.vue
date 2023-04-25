<template>
  <div class="edit-popup">
    <popup
        ref="popupRef"
        :title="popupTitle"
        :async="true"
        width="550px"
        @confirm="handleSubmit"
        @close="handleClose"
    >
      <el-form
          class="ls-form"
          ref="formRef"
          :rules="rules"
          :model="formData"
          label-width="84px"
      >
        <el-form-item label="预约形式" prop="reservationType">
          <el-radio v-model="formData.reservationType" :label="1"
                    :disabled="popupTitle == '修改预约' ? true : false"
          >小组</el-radio>
          <el-radio v-model="formData.reservationType" :label="2"
                    :disabled="popupTitle == '修改预约' ? true : false"
          >个人</el-radio>
        </el-form-item>
        <el-form-item label="预约小组" prop="groupName" v-if="formData.reservationType == 1"
                      :rules="formData.reservationType == 1 ? [{ required: true, message: '请选择小组' }] : [{ required: false }]">
          <el-select
              v-model="formData.groupName"
              :disabled="popupTitle == '修改预约' ? true : false"
              filterable
              remote
              reserve-keyword
              placeholder="请选择小组"
              :remote-method="getGroupListByCondition"
              :loading="loading"
              class="w-[214px]"
              @change="buildOtherInfo"
          >
            <el-option
                v-for="item in selectList.groupList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预约学员" prop="memberNames">
          <el-select
              v-model="formData.memberNames"
              :disabled="formData.reservationType == 2 ? false : true"
              filterable
              remote
              reserve-keyword
              placeholder="请输入学员"
              :remote-method="getMemberListByCondition"
              :loading="loading"
              class="w-[214px]"
              @change="buildMemberId"
          >
            <el-option
                v-for="item in selectList.memberList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预约教练" prop="username">
          <el-select
              class="w-[214px]"
              v-model="formData.username"
              :disabled="formData.reservationType == 2 ? false : true"
              filterable
              remote
              reserve-keyword
              placeholder="请输入教练"
              :remote-method="getUserListByCondition"
              :loading="loading"
              @change="buildUserId"
          >
            <el-option
                v-for="item in selectList.userList"
                :key="item.id"
                :label="item.username"
                :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预约日期" required>
          <el-col :span="9">
            <el-form-item prop="reservationDate">

            <el-date-picker
              v-model="formData.reservationDate"
              value-format="YYYY-MM-DD"
              type="date"
              placeholder="选择日期"
              :picker-options="expireTimeOption"
              class="w-[240px]"

            />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="0.5">-</el-col>
          <el-col :span="9">
            <el-form-item prop="reservationTime">
              <el-select
                class="w-[90px]"
                v-model="formData.reservationTime"
                placeholder="时间"
                @click="getEnableTimes"
            >
              <el-option
                  v-for="(item, index) in selectList.enableTimeOptions"
                  :key="index"
                  :label="item"
                  :value="item"
              />
            </el-select>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
    </popup>
  </div>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import {reservationAdd, reservationDetail, reservationEdit, reservedTimeList} from "@/api/reservation/reservation";
import Popup from '@/components/popup/index.vue'
import feedback from '@/utils/feedback'
import {adminListByCondition} from "@/api/perms/admin";
import {reactive} from "vue";
import {memberListByCondition} from "@/api/member/memeber";
import {groupListByCondition} from "@/api/group/group";
const emit = defineEmits(['success', 'close'])
const formRef = shallowRef<FormInstance>()
const popupRef = shallowRef<InstanceType<typeof Popup>>()
const mode = ref('add')
const popupTitle = computed(() => {
  return mode.value == 'edit' ? '修改预约' : '新增预约'
})
const formData = reactive({
  id: '',
  name: '',
  userId: '',
  username: '',
  memberId: '',
  memberNames: '',
  groupId: '',
  groupName: '',
  reservationType: '',
  reservationDate:'',
  reservationTime:''

})
//没有生效
const expireTimeOption =  async (time : any) => {
  console.log(time)
  return time.getTime() < Date.now() - 8.64e7;  //如果没有后面的-8.64e7就是不可以选择今天的
}
const rules = {
  reservationType: [
    {
      required: true,
      message: '请选择预约形式',
      trigger: ['blur']
    }
  ],
  username: [
    {
      required: true,
      message: '请选择教练',
      trigger: ['blur']
    }
  ],
  memberNames: [
    { required: true,
      message: '请选择学员',
      trigger: ['blur']
    }
  ],
  reservationDate: [
    {
      required: true,
      message: '请选择日期',
      trigger: ['change']
    }
  ],
  reservationTime: [
    {
      required: false,
      message: '请选择时间',
      trigger: ['blur']
    }
  ]
}


const handleSubmit = async () => {
  await formRef.value?.validate()
  const params = { ...formData}
  mode.value == 'edit' ? await reservationEdit(params) : await reservationAdd(params)
  popupRef.value?.close()
  feedback.msgSuccess('操作成功')
  emit('success')
}

const handleClose = () => {
  emit('close')
}

const open = (type = 'add') => {
  mode.value = type
  popupRef.value?.open()
}

const setFormData = async (row: Record<any, any>) => {
  const data = await reservationDetail({
    id: row.id
  })
  for (const key in formData) {
    if (data[key] != null && data[key] != undefined) {
      //@ts-ignore
      formData[key] = data[key]
    }
  }
}
const selectList:any = reactive({
  userList: [],
  memberList: [],
  groupList: [],
  enableTimeOptions: [],
})

const getEnableTimes = async () => {
  const params = {"userId": formData.userId, "date": formData.reservationDate};
  reservedTimeList(params)
      .then(res => {
          selectList.enableTimeOptions = res
        return Promise.resolve(res);
      }).catch((err) => {
    return Promise.reject(err)
  })
}
const groupMap = new Map();
const memberMap = new Map();
const buildOtherInfo = async (gid:any) => {
  const groupJson = JSON.parse(groupMap.get(gid));
  formData.username = groupJson.username;
  formData.memberNames = groupJson.memberNames;
  formData.memberId = groupJson.memberIds;
  formData.groupId = groupJson.id;
  formData.userId = groupJson.userId;

}

const buildUserId = async (uid:any) => {
  formData.userId = uid;
}
const buildMemberId = async (mid:any) => {
  formData.memberId = mid;
}


const getGroupListByCondition = async (queryCondition: string) => {
  const params = {"name": queryCondition};
  groupListByCondition(params)
      .then((res: any) => {
        selectList.groupList = res;
        res.forEach( (group : any) => {
          groupMap.set(group.id, JSON.stringify(group));
        })
        return Promise.resolve(res);
      }).catch((err) => {
    return Promise.reject(err)
  })
}

const getUserListByCondition = async (queryCondition: string) => {
  const params = {"username": queryCondition};
  adminListByCondition(params)
      .then((res: any) => {
        selectList.userList = res;
        return Promise.resolve(res);
      }).catch((err) => {
    return Promise.reject(err)
  })
}

const getMemberListByCondition = async (queryCondition: string) => {
  const params = {"name": queryCondition};
  memberListByCondition(params)
      .then((res: any) => {
        selectList.memberList = res;
        res.forEach( (member : any) => {
          memberMap.set(member.id, JSON.stringify(member));
        })
        return Promise.resolve(res);
      }).catch((err) => {
    return Promise.reject(err)
  })

}

defineExpose({
  open,
  setFormData
})
</script>
