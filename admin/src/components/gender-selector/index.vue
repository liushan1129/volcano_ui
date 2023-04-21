<template>
  <el-select class="w-[280px]">
<!--    <el-option label="全部" value="" />-->
    <el-option
        v-for="(item, index) in genderOptionsData.type"
        :key="index"
        :label="item.name"
        :value="item.id"
    />
  </el-select>
</template>
<script lang="ts" setup>
const genderOptionsData = { type: [
    {
      "id": 1,
      "name": "男"
    },
    {
      "id": 0,
      "name": "女"
    }
  ]};
</script>