<template>
  <avue-crud :data="data"
             :option="option"></avue-crud>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "张三",
          sex: true
        },
        {
          name: "李四",
          sex: false
        }
      ],
      option: {
        cellBtn: true,
        editBtn: false,
        column: [
          {
            label: "姓名",
            prop: "name",
            cell: true
          },
          {
            label: "性别",
            prop: "sex",
            type: "switch",
            cell: true,
            displayAs: "switch"
          }
        ]
      }
    };
  }
};
</script>
