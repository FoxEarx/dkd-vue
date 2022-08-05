<template>
  <div>
    <div class="search">
      <el-form ref="form" :inline="true">
        <el-form-item label="工单编号：">
          <el-input placeholder="请输入" value=""></el-input>
        </el-form-item>
        <el-form-item label="工单状态：">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="search"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="Main">
      <div class="MainNav">
        <!-- 按钮1 -->
        <el-button
          @click="dialogVisible = true"
          class="el-icon-circle-plus-outline el-button-1"
          >新建</el-button
        >

        <el-dialog
          title="新增工单"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
        <!-- 按钮2 -->
        <el-button @click="dialogVisible = true" class="el-button-2"
          >工单配置</el-button
        >

        <el-dialog
          title="新增工单"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </div>
      <div class="MainData">
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      dialogVisible: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },

  created() {},

  methods: {
    search() {},
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
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
.Main {
  padding: 20px 15px 19px 17px;
  background-color: #fff;
  .MainNav {
    margin-bottom: 20px;
    display: flex;
  }
  .el-button-1 {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 80px !important;
    height: 36px;
    padding: 0;
    background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
    border: none;
    color: #fff;
    margin-right: 10px;
  }
  .el-button-2 {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 80px !important;
    height: 36px;
    padding: 0;
    background-color: #fbf4f0 !important;
    border: none;
    color: #655b56 !important;
  }
}
</style>
