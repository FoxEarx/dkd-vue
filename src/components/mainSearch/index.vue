<template>
  <div class="search">
    <el-form ref="form" :inline="true">
      <el-form-item label="工单编号：">
        <el-input placeholder="请输入" value=""></el-input>
      </el-form-item>
      <el-form-item label="工单状态：">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="代办" value="shanghai"></el-option>
          <el-option label="进行" value="beijing"></el-option>
          <el-option label="取消" value="beijing"></el-option>
          <el-option label="完成" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="search"
          >查询</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
    }
  },

  created() {},

  methods: {
    search() {},
  },
}
</script>

<style scoped lang="scss">
.search {
  display: flex;
  width: 100%;
  background-color: #fff;
  height: 64px;
  padding-left: 17px;
  margin-bottom: 20px;
  align-items: center;
  .el-form-item {
    margin-bottom: 0;
  }
}
</style>
