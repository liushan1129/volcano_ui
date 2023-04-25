<template>
    <div class="reservation">
        <el-card class="!border-none" shadow="never">
            <el-form class="mb-[-16px]" :model="queryParams" inline>
              <el-form-item label="小组" prop="groupList">
                <el-select
                    v-model="queryParams.groupId"
                    filterable
                    remote
                    reserve-keyword
                    class="w-[240px]"
                    placeholder="请输入关键词"
                    :remote-method="getGroupListByCondition"
                    :loading="loading">
                  <el-option
                      v-for="item in selectList.groupList"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="教练">
                <el-input
                    v-model="queryParams.userName"
                    class="w-[240px]"
                    clearable
                    @keyup.enter="resetPage"
                />
              </el-form-item>
              <el-form-item label="学员">
                <el-input
                    v-model="queryParams.memberName"
                    class="w-[240px]"
                    clearable
                    @keyup.enter="resetPage"
                />
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-form-item prop="date">
                    <el-date-picker
                        type="date"
                        value-format='YYYY-MM-DD'
                        placeholder="选择日期"
                        v-model="queryParams.date"
                        class="w-[240px]"
                    />
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="1">-</el-col>
                <el-col :span="9">
                  <el-form-item prop="time">
                    <el-time-select
                        placeholder="选择时间"
                        v-model="queryParams.time"
                        class="w-[150px]"
                        start="10:00"
                        step="01:00"
                        end="20:30"
                    />
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="resetPage">查询</el-button>
                <el-button @click="resetParams">重置</el-button>
              </el-form-item>
            </el-form>
          </el-card>
          <el-card v-loading="pager.loading" class="mt-4 !border-none" shadow="never">
            <el-button v-perms="['reservation:record:add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <div class="mt-4">
                <el-table :data="pager.lists" size="large">
                    <el-table-column label="ID" prop="id" min-width="60" v-if="false" />
                    <el-table-column label="小组名称" prop="groupName" min-width="100" />
                    <el-table-column label="教练" prop="userName" min-width="100" />
                    <el-table-column label="学员" prop="memberNames" min-width="100" />
                    <el-table-column label="预约时间" prop="reservationDateTime" min-width="180" />
                    <el-table-column label="状态" prop="statusDesc" min-width="100" />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                            <el-button
                                v-perms="['reservation:record:edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['reservation:record:cancel']"
                                type="danger"
                                link
                                @click="handleCancel(row.id)"
                            >
                                取消
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="flex mt-4 justify-end">
                <pagination v-model="pager" @change="getLists" />
            </div>
          </el-card>
          <edit-popup v-if="showEdit" ref="editRef" @success="getLists" @close="showEdit = false" />
      </div>
</template>

<script lang="ts" setup name="reservation">
import { usePaging } from '@/hooks/usePaging'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'
import {groupListByCondition} from "@/api/group/group";
import {reservationList, reservationCancel} from "@/api/reservation/reservation";
import {reactive} from "vue";
const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 表单数据
const queryParams = reactive({
    userName: '',
    memberName:'',
    groupId: '',
    time:'',
    date:''
})
const selectList = reactive({
  groupList: []
})
const getGroupListByCondition = async (queryCondition: string) => {
  const params = {"name": queryCondition};
  groupListByCondition(params)
      .then((res: any) => {
        selectList.groupList = res;
        return Promise.resolve(res);
      }).catch((err) => {
    return Promise.reject(err)
  })
}

const showEdit = ref(false)
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: reservationList,
    params: queryParams
})
const handleAdd = async () => {
    showEdit.value = true
    await nextTick()
    editRef.value?.open('add')
}

const handleEdit = async (data: any) => {
    showEdit.value = true
    await nextTick()
    editRef.value?.open('edit')
    editRef.value?.setFormData(data)
}

const handleCancel = async (id: number) => {
    await feedback.confirm('确定要取消预约？')
    await reservationCancel({ id })
    feedback.msgSuccess('取消成功')
    getLists()
}


onMounted(() => {
    getLists()
})
</script>
