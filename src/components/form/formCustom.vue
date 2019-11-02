<template>
  <div>
    <avue-form ref="form"
               v-model="obj0"
               :option="option0">
      <template slot="menuForm">
        <el-button type="primary"
                   @click="handleSubmit">提 交</el-button>
        <el-button @click="handleEmpty">清 空</el-button>
      </template>
    </avue-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj0: {},
      option0: {
        emptyBtn: false,
        submitBtn: false,
        column: [
          {
            label: "用户名",
            prop: "username",
            rules: [
              {
                required: true,
                message: "请输入用户名",
                trigger: "blur"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    handleEmpty() {
      this.$refs.form.resetForm();
    },
    handleSubmit() {
      this.$refs.form.validate(vaild => {
        if (vaild) {
          this.$message.success(JSON.stringify(this.obj0));
        }
      });
    }
  }
};
</script>