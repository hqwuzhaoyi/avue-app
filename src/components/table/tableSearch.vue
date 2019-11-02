<template>
  <avue-crud :option="option"
             :data="data"
             @search-change="searchChange">
    <template slot="search">
      <el-col :md="6"
              :xs="24">
        <el-form-item label="自定义">
          <el-input placeholder="自定义搜索"
                    size="small"
                    v-model="searchForm.solt" />
        </el-form-item>
      </el-col>
    </template>
    <template slot="searchMenu">
      <el-button size="small">自定义按钮</el-button>
    </template>
  </avue-crud>
</template>
<script>
export default {
  data() {
    return {
      searchForm: {},
      data: [
        {
          name: "张三"
        }
      ],
      option: {
        column: [
          {
            label: "姓名",
            prop: "name",
            search: true
          }
        ]
      }
    };
  },
  methods: {
    searchChange(params) {
      this.$message.success(
        "search callback" +
          JSON.stringify(Object.assign(params, this.searchForm))
      );
    }
  }
};
</script>