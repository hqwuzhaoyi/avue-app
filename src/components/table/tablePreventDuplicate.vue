<template>
  <avue-crud :data="data"
             :option="option"
             @row-save="handleRowSave"
             @row-update="handleRowUpdate"
             @submit="handleSubmit"></avue-crud>
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
    handleRowSave(row, done, loading) {
      this.$message.success("1秒后关闭禁止表单");
      setTimeout(() => {
        loading();
        this.$message.success("3秒后关闭表单");
      }, 1000);
      setTimeout(() => {
        done();
      }, 3000);
    },
    handleRowUpdate(row, index, done, loading) {
      this.$message.success("1秒后关闭禁止表单");
      setTimeout(() => {
        loading();
        this.$message.success("3秒后关闭表单");
      }, 1000);
      setTimeout(() => {
        done();
      }, 3000);
    },
    handleSubmit(form, done) {
      this.$message.success("3s后关闭");
      setTimeout(() => {
        done();
      }, 3000);
    }
  }
};
</script>