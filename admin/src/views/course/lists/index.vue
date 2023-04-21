<template>
    <div class="course-type">
        <el-card class="!border-none" shadow="never">
            <el-form class="mb-[-16px]" :model="queryParams" inline>
                <el-form-item label="名称">
                    <el-input
                        v-model="queryParams.name"
                        class="w-[280px]"
                        clearable
                        @keyup.enter="resetPage"
                    />
                </el-form-item>
                <el-form-item label="类型">
                  <course-category-selector v-model="queryParams.category">
                  </course-category-selector>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card v-loading="pager.loading" class="mt-4 !border-none" shadow="never">
            <el-button v-perms="['course:type:add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <div class="mt-4">
                <el-table :data="pager.lists" size="large">
                    <el-table-column label="ID" prop="id" min-width="60" v-if="false" />
                    <el-table-column label="名称" prop="name" min-width="100" />
                    <el-table-column
                        label="类型"
                        prop="categoryName"
                        show-tooltip-when-overflow
                        min-width="100"
                    />
                    <el-table-column
                        label="课时"
                        prop="times"
                        show-tooltip-when-overflow
                        min-width="100"
                    />
                    <el-table-column label="创建时间" prop="createTime" min-width="180" />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                            <el-button
                                v-perms="['course:type:edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-if="row.id != 1"
                                v-perms="['course:type:del']"
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

<script lang="ts" setup name="course_type">
import { usePaging } from '@/hooks/usePaging'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'
import {courseTypeList, courseTypeDelete} from "@/api/course/course_type";
const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 表单数据
const queryParams = reactive({
    name: '',
    category: ''
})
const showEdit = ref(false)
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: courseTypeList,
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
    await courseTypeDelete({ id })
    feedback.msgSuccess('删除成功')
    getLists()
}

const typeOptionsData = { type: [
    {
      "id": 1,
      "name": "游泳"
    },
    {
      "id": 2,
      "name": "团课"
    }
  ]};

onMounted(() => {
    getLists()
})
</script>
