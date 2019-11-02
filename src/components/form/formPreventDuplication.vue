<template>
  <div>
    <avue-form :option="option"
               v-model="form"
             ></avue-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        text: "动态内容1"
      },
      option: {
        column: [
          {
            label: "用户名",
            prop: "username"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(form, done) {
      this.$message.success("3s后关闭");
      setTimeout(() => {
        done();
      }, 3000);
    }
  }
};
</script>