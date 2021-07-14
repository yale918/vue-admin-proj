  <template>
  <div>
      <el-button type="success">+新增議題</el-button>
    <hr>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="種類" width="180"> </el-table-column>
    <el-table-column prop="name" label="議題編號/議題名稱" width="180"></el-table-column>
    <el-table-column
      class-name="status-col"
      label="優先權"
      width="110"
      align="center"
    >
      <template slot-scope="scope">
        <el-tag :type="scope.row.status | statusFilter">{{
          scope.row.status
        }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      class-name="status-col"
      label="狀態"
      width="110"
      align="center"
    >
      <template slot-scope="scope">
        <el-tag :type="scope.row.status | statusFilter">{{
          scope.row.status
        }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="Actions"
      align="center"
      width="230"
      class-name="small-padding fixed-width"
    >
      <template slot-scope="{ row, $index }">
        <el-button
          v-if="row.status != 'draft'"
          size="mini"
          @click="handleModifyStatus(row, 'draft')"
        >
          轉移
        </el-button>
        <el-button
          v-if="row.status != 'deleted'"
          size="mini"
          type="danger"
          @click="handleDelete(row, $index)"
        >
          關閉
        </el-button>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="受分配者" width="180"> </el-table-column>
  </el-table>
  </div>
</template>

  <script>

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  /*
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)
      const items = data.items
      this.list = items.map(v => {
        this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        v.originalTitle = v.title //  will be used when user click the cancel botton
        return v
      })
      this.listLoading = false
    },
    */
  data() {
    return {
      tableData: [
        {
          date: 1,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: 2,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: 3,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },

      ],
    };
  },
};
</script>