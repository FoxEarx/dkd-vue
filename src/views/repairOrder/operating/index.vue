<template>
  <div>
    <mainSearch></mainSearch>
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
            <el-button @click="dialogVisible = false">取消</el-button>
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
      <List :tableData="tableData" :table="table">
        <template #operation>
          <span class="details">查看详情</span>
        </template>
      </List>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          :page-size="100"
          :total="+$store.state.repair.AllList.totalCount"
          @next-click="nextClick"
          @prev-click="prevClick"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import mainSearch from '@/components/mainSearch'
import List from '@/components/List'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      index: 1,
      table: [
        { prop: 'taskCode', label: '工单编号' },
        { prop: 'innerCode', label: '设备编号' },
        { prop: 'taskType', label: '工单类型' },
        { prop: 'Type', label: '工单方式' },
        { prop: 'taskStatusTypeEntity', label: '工单状态' },
        { prop: 'userName', label: '运营人员' },
        { prop: 'createTime', label: '创建日期' },
      ],
    }
  },

  created() {
    this.getList()
  },
  updatad() {},

  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    getList() {
      const list = []
      this.$store.state.repair.AllList.currentPageRecords.forEach((item) => {
        const time = dayjs(item.createTime).format('YYYY.MM.DD hh:mm:ss')
        list.push({
          taskCode: item.taskCode,
          innerCode: item.innerCode,
          taskType: item.taskType.typeName,
          Type: item.createType === 0 ? '自动' : '手动',
          taskStatusTypeEntity: item.taskStatusTypeEntity.statusName,
          userName: item.userName,
          createTime: time,
          operation: '查看详情',
        })
      })
      this.tableData = list
      console.log(this.tableData)
    },
    async nextClick() {
      this.index++
      await this.$store.dispatch('repair/getAllList', this.index)
      this.getList()
    },
    async prevClick() {
      this.index--
      await this.$store.dispatch('repair/getAllList', this.index)
      this.getList()
    },
  },
  components: {
    mainSearch,
    List,
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
.details {
  color: #8384ff;
  cursor: pointer;
}
</style>
