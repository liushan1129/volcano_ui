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
          label-width="60px"
      >
        <el-form-item label="名称" prop="name">
          <el-input
              class="ls-input"
              v-model="formData.name"
              placeholder="请输入名称"
              clearable
          />
        </el-form-item>

        <el-form-item label="教练" prop="userName">
          <el-input
              class="ls-input"
              v-model="formData.username"

          />
          <el-select
              v-model="formData.userId"
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="getUserListByCondition"
              :loading="loading">
            <el-option
                v-for="item in selectList.userList"
                :key="item.id"
                :label="item.username"
                :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学员" prop="memberId">
          <el-select
              v-model="formData.memberIds"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="getMemberListByCondition"
              :loading="loading">
            <el-option
                v-for="item in selectList.memberList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </popup>
  </div>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import {groupAdd, groupDetail, groupEdit} from "@/api/group/group";
import Popup from '@/components/popup/index.vue'
import feedback from '@/utils/feedback'
import {adminListByCondition} from "@/api/perms/admin";
import {reactive} from "vue";
import {memberListByCondition} from "@/api/member/memeber";
const emit = defineEmits(['success', 'close'])
const formRef = shallowRef<FormInstance>()
const popupRef = shallowRef<InstanceType<typeof Popup>>()
const mode = ref('add')
const popupTitle = computed(() => {
  return mode.value == 'edit' ? '编辑小组' : '新增小组'
})
const formData = reactive({
  id: '',
  name: '',
  userId: 0,
  username: '',
  memberIds: ''
})

const rules = {
  name: [
    {
      required: true,
      message: '请输入名称',
      trigger: ['blur']
    }
  ]
}

const handleSubmit = async () => {
  await formRef.value?.validate()
  const params = { ...formData}
  mode.value == 'edit' ? await groupEdit(params) : await groupAdd(params)
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
  const data = await groupDetail({
    id: row.id
  })
  for (const key in formData) {
    if (data[key] != null && data[key] != undefined) {
      console.log(key + ": " +data[key])
      //@ts-ignore
      formData[key] = data[key]
    }
  }
}
const selectList = reactive({
  userList: [],
  memberList: []
})
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
