<template>
  <el-select class="w-[280px]">
    <el-option label="全部" value="" />
    <el-option
        v-for="(item, index) in booleanOptionsData.type"
        :key="index"
        :label="item.name"
        :value="item.id"
    />
  </el-select>
</template>
<script lang="ts" setup>
const booleanOptionsData = { type: [
    {
      "id": 0,
      "name": "否"
    },
    {
      "id": 1,
      "name": "是"
    }
  ]

}
</script>