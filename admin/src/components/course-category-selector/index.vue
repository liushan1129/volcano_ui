<template>
  <el-select class="w-[280px]">
<!--    <el-option label="全部" value="" />-->
    <el-option
        v-for="(item, index) in categoryOptionsData.type"
        :key="index"
        :label="item.categoryName"
        :value="item.id"
    />
  </el-select>
</template>
<script lang="ts" setup>
const categoryOptionsData = { type: [
    {
      "id": 1,
      "categoryName": "游泳"
    },
    {
      "id": 2,
      "categoryName": "团课"
    }
  ]};
</script>