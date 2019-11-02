<template>
  <avue-crud :data="data"
             :option="option">
    <template slot="menuLeft">
      <el-button type="primary"
                 size="small">自定义按钮</el-button>
    </template>
    <template slot="menuRight">
      <el-button type="primary"
                 icon="el-icon-edit"
                 circle
                 size="small">123</el-button>
    </template>
  </avue-crud>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "张三",
          sex: "男"
        },
        {
          name: "李四",
          sex: "女"
        }
      ],
      option: {
        page: false,
        align: "center",
        menuAlign: "center",
        column: [
          {
            label: "姓名",
            prop: "name"
          },
          {
            label: "性别",
            prop: "sex"
          }
        ]
      }
    };
  },
  methods: {
    rowSave(form, done) {
      this.$message.success("新增数据" + JSON.stringify(form));
      done();
    },
    rowDel(form, index) {
      this.$message.success("删除数据" + JSON.stringify(form));
    },
    rowUpdate(form, index, done) {
      this.$message.success(
        "编辑数据" + JSON.stringify(form) + "数据序号" + index
      );
      done();
    }
  }
};
</script>