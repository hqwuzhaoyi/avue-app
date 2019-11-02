<template>
  <avue-crud :data="data"
             :option="option"
             v-model="user">
    <template slot="name"
              slot-scope="scope">
      <el-tag>123</el-tag>
    </template>
  </avue-crud>
</template>

<script>
export default {
  data() {
    return {
      user: {},
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
            prop: "name",
            slot: true
          },
          {
            label: "性别",
            prop: "sex"
          }
        ]
      }
    };
  }
};
</script>