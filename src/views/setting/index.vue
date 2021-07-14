  <template>
  <div>
  <el-button type="success">+新增成員</el-button>
    <hr>
    <el-table
      :data="tableData"
      style="width: 100%">
          <el-table-column prop="date" label="種類" width="180"> </el-table-column>
          <el-table-column prop="name" label="議題編號/議題名稱" width="180"></el-table-column>
              <el-table-column prop="date" label="種類" width="180"> </el-table-column>
    <el-table-column prop="name" label="議題編號/議題名稱" width="180"></el-table-column>
        <el-table-column prop="date" label="種類" width="180"> </el-table-column>
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
            議題  
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
    </el-table>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>