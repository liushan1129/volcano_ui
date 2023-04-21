<template>
    <div class="member">
        <el-card class="!border-none" shadow="never">
            <el-form class="mb-[-16px]" :model="queryParams" inline>
                <el-form-item label="姓 名">
                    <el-input
                        v-model="queryParams.name"
                        class="w-[280px]"
                        clearable
                        @keyup.enter="resetPage"
                    />
                </el-form-item>
                <el-form-item label="性 别">
                  <gender-selector v-model="queryParams.gender">
                  </gender-selector>
                </el-form-item>

                <el-form-item label="年 龄">
                    <el-input
                        v-model="queryParams.age"
                        class="w-[280px]"
                        clearable
                        @keyup.enter="resetPage"
                    />
                </el-form-item>
                <el-form-item label="电 话">
                  <el-input
                      v-model="queryParams.telephone"
                      class="w-[280px]"
                      clearable
                      @keyup.enter="resetPage"
                  />
                </el-form-item>
                <el-form-item label="结 课">
                  <boolean-selector v-model="queryParams.isEnd">
                  </boolean-selector>
                </el-form-item>
                <el-form-item label="课 程">
                  <el-select class="w-[280px]" v-model="queryParams.courseTypeId">
                    <el-option
                        v-for="(item, index) in optionsData.courseType"
                        :key="index"
                        :label="`${item.categoryName} / ${item.name}`"
                        :value="item.id"
                    />
                  </el-select>
                </el-form-item>
<!--                <el-form-item label="报名时间">-->
<!--                  <daterange-picker-->
<!--                      v-model:startTime="queryParams.joinStartTime"-->
<!--                      v-model:endTime="queryParams.joinEndTime"-->
<!--                  />-->
<!--                </el-form-item>-->
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card v-loading="pager.loading" class="mt-4 !border-none" shadow="never">
            <el-button v-perms="['member:basic:add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <div class="mt-4">
                <el-table :data="pager.lists" size="large">
                    <el-table-column label="ID" prop="id" min-width="60" v-if="false"/>
                    <el-table-column label="姓名" prop="name" min-width="100" />
                    <el-table-column label="性别" prop="genderStr" min-width="100" />
                    <el-table-column label="年龄(岁)" prop="age" min-width="100" />
                    <el-table-column label="课程类别" prop="courseType.categoryName" min-width="100" />
                    <el-table-column label="课程类型Id" prop="courseType.id" min-width="100" v-if="false" />
                    <el-table-column label="课程类型" prop="courseType.name" min-width="100" />
                    <el-table-column label="课时" prop="courseType.times" min-width="100" />
                    <el-table-column
                          label="电话"
                          prop="telephone"
                          show-tooltip-when-overflow
                          min-width="100"
                      />
                    <el-table-column
                        label="报名时间"
                        prop="createTime"
                        show-tooltip-when-overflow
                        min-width="100"
                    />
                    <el-table-column label="是否结课" prop="isEndStr" min-width="180" />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                            <el-button
                                v-perms="['member:basic:edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['member:basic:del']"
                                type="danger"
                                link
                                @click="handleDelete(row.id)"
                            >
                                删除
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

<script lang="ts" setup name="member">
import { memberList, memberDelete } from '@/api/member/memeber'

import { usePaging } from '@/hooks/usePaging'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'
import {useDictOptions} from "@/hooks/useDictOptions";
import {courseTypeAll} from "@/api/course/course_type";
const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 表单数据
const queryParams = reactive({
    name: '',
    gender: '',
    age: '',
    telephone: '',
    courseTypeId: '',
    isEnd: ''
})
const { optionsData } = useDictOptions<{
  courseType: any[]
}>({
  courseType: {
    api: courseTypeAll
  }
})
const showEdit = ref(false)
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: memberList,
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

const handleDelete = async (id: number) => {
    await feedback.confirm('确定要删除？')
    await memberDelete({ id })
    feedback.msgSuccess('删除成功')
    getLists()
}


onMounted(() => {
    getLists()
})
</script>
