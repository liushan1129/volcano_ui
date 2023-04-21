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
            <el-form ref="formRef" :model="formData" label-width="84px" :rules="formRules">
                <el-form-item label="姓  名" prop="name">
                    <el-input
                        v-model="formData.name"
                        :disabled="isRoot"
                        placeholder="请输入姓名"
                        clearable
                    />
                </el-form-item>
                <el-form-item label="性  别" prop="gender" >
                  <el-radio v-model="formData.gender" :label="1">男</el-radio>
                  <el-radio v-model="formData.gender" :label="0">女</el-radio>
                </el-form-item>
                <el-form-item label="年  龄" prop="age">
                  <el-input v-model="formData.age" placeholder="请输入年龄" clearable />
                </el-form-item>
                <el-form-item label="身高(cm)" prop="height">
                  <el-input v-model="formData.height" placeholder="请输入身高" clearable />
                </el-form-item>
                <el-form-item label="体重(kg)" prop="weight">
                  <el-input v-model="formData.weight" placeholder="请输入体重" clearable />
                </el-form-item>
                <el-form-item label="联系方式" prop="telephone">
                  <el-input v-model="formData.telephone" placeholder="请输入联系方式" clearable />
                </el-form-item>
<!--                <el-form-item label="课程类别">-->
<!--                  <course-category-selector v-model="formData.courseCategory">-->
<!--                  </course-category-selector>-->
<!--                </el-form-item>-->
              <el-form-item label="课程类型" prop="courseTypes">
                <el-select
                    class="flex-1"
                    v-model="formData.courseTypeId"
                    placeholder="请选择课程类型"
                >
                  <el-option
                      v-for="(item, index) in optionsData.courseType"
                      :key="index"
                      :label="item.name"
                      :value="item.id"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="所属小组">
<!--                <course-category-selector v-model="formData.groupId">-->
<!--                </course-category-selector>-->
              </el-form-item>
                <el-form-item label="有效月" prop="telephone">
                  <el-input v-model="formData.expireTime" placeholder="请输入有效月" clearable />
                </el-form-item>
            </el-form>
        </popup>
    </div>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { memberAdd, memberEdit, memberDetail } from '@/api/member/memeber'
import feedback from '@/utils/feedback'
import {useDictOptions} from "@/hooks/useDictOptions";
import {courseTypeAll} from "@/api/course/course_type";
import {adminListByCondition} from "@/api/perms/admin"
import {roleLists} from "@/api/perms/role";
const emit = defineEmits(['success', 'close'])
const formRef = shallowRef<FormInstance>()
const popupRef = shallowRef<InstanceType<typeof Popup>>()
const mode = ref('add')
const popupTitle = computed(() => {
    return mode.value == 'edit' ? '编辑会员' : '新增会员'
})

const formData = reactive({
    id: 0,
    name: '',
    gender: '',
    age: '',
    telephone: '',
    courseTypeId: '',
    groupId: '',
    expireTime: 3,
    height: '',
    weight: '',
    courseCategory: ''
})

const { optionsData } = useDictOptions<{
  courseType: any[]
}>({
  courseType: {
    api: courseTypeAll
  }
})

const isRoot = computed(() => {
    return formData.id == 1
})

const formRules = reactive({
    name: [
        {
            required: true,
            message: '请输入用户名',
            trigger: ['blur']
        }
    ],
    gender: [
        {
            required: true,
            message: '请选择性别',
            trigger: ['blur']
        }
    ],
    age: [
        {
            required: true,
            message: '请输入年龄',
            trigger: ['blur']
        }
    ],
    telephone: [
      {
        required: true,
        message: '请输入联系方式',
        trigger: ['blur']
      }
    ],
  courseTypeId: [
    {
      required: true,
      message: '请输入课程类别',
      trigger: ['blur']
    }
  ],
})


const handleSubmit = async () => {
    await formRef.value?.validate()
  console.log(formData)
    mode.value == 'edit' ? await memberEdit(formData) : await memberAdd(formData)
    popupRef.value?.close()
    feedback.msgSuccess('操作成功')
    emit('success')
}

const open = (type = 'add') => {
    mode.value = type
    popupRef.value?.open()
}

const setFormData = async (row: any) => {
    const data = await memberDetail({
        id: row.id
    })
    for (const key in formData) {
      console.log(key + ": " + data[key])
      if (data[key] != null && data[key] != undefined && data[key] != null) {
        //@ts-ignore
        formData[key] = data[key]
      }
    }
}

const handleClose = () => {
    emit('close')
}

defineExpose({
    open,
    setFormData
})
</script>
