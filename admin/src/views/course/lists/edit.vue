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
        <el-form-item label="类型" prop="type">
          <course-category-selector v-model="formData.category">
          </course-category-selector>
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input
              class="ls-input"
              v-model="formData.name"
              placeholder="请输入名称"
              clearable
          />
        </el-form-item>
        <el-form-item label="课时" prop="name">
          <el-input-number v-model="formData.times" :min="1" :max="999"/>
        </el-form-item>
      </el-form>
    </popup>
  </div>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import {courseTypeAdd,courseTypeDetail, courseTypeEdit} from "@/api/course/course_type";
import Popup from '@/components/popup/index.vue'
import feedback from '@/utils/feedback'
const emit = defineEmits(['success', 'close'])
const formRef = shallowRef<FormInstance>()
const popupRef = shallowRef<InstanceType<typeof Popup>>()
const mode = ref('add')
const popupTitle = computed(() => {
  return mode.value == 'edit' ? '编辑课程类型' : '新增课程类型'
})
const formData = reactive({
  id: '',
  name: '',
  category: '',
  times: 0
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
  mode.value == 'edit' ? await courseTypeEdit(params) : await courseTypeAdd(params)
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
  const data = await courseTypeDetail({
    id: row.id
  })
  for (const key in formData) {
    if (data[key] != null && data[key] != undefined) {
      //@ts-ignore
      formData[key] = data[key]
    }
  }
}

defineExpose({
  open,
  setFormData
})
</script>
