<template>
  <avue-crud :data="data"
             :option="option"
             @sort-change="sortChange"></avue-crud>
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
        border: true,
        page: false,
        align: "center",
        menuAlign: "center",

        column: [
          {
            sortable: true,
            label: "姓名",
            prop: "name"
          },
          {
            sortable: true,
            label: "性别",
            prop: "sex"
          }
        ]
      }
    };
  },
  methods: {
    sortChange(val) {
      this.$message.success("排序" + JSON.stringify(val));
    }
  }
};
</script>