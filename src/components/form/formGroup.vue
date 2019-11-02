<template>
  <div>
    <avue-form :option="option"
               v-model="form"
               @submit="handleSubmit">
      <template slot="group1Header">
        <h4>自定义表头</h4>
      </template>
    </avue-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        text1: "文本1",
        text2: "文本2",
        text3: "文本3"
      },
      option: {
        group: [
          {
            icon: "el-icon-info",
            label: "分组1",
            prop: "group1",
            column: [
              {
                label: "内容1",
                prop: "text1"
              }
            ]
          },
          {
            icon: "el-icon-info",
            label: "分组2",
            prop: "group2",
            column: [
              {
                label: "选项卡2",
                prop: "text2"
              },
              {
                label: "选项卡3",
                prop: "text3"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(form) {
      this.$message.success(JSON.stringify(this.form));
    }
  }
};
</script>