<template>
  <div class="MainData">
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column
          v-for="(item, index) in table"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          width="180"
        >
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  created() {},

  methods: {},
  props: {
    tableData: {
      type: Array,
    },
    table: {
      type: Array,
    },
  },
}
</script>

<style scoped lang="less">
.MainData {
  width: 100%;
}
</style>
