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
          id: 1,
          name: "张三",
          sex: "男"
        },
        {
          id: 2,
          name: "李四",
          sex: "女"
        }
      ],
      option: {
        index: true,
        indexFixed: true,
        indexWidth: 100,
        selection: true,
        selectionWidth: 100,
        selectionFixed: true,
        expand: true,
        expandWidth: 100,
        expandFixed: true,
        align: "center",
        menuAlign: "center",
        column: [
          {
            width: 500,
            label: "姓名",
            prop: "name"
          },
          {
            width: 500,
            label: "性别",
            prop: "sex"
          }
        ]
      }
    };
  }
};
</script>
