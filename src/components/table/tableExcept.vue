<template>
  <avue-crud :option="option"
             :data="data"></avue-crud>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          text1: "内容1-1",
          text2: "内容1-2"
        },
        {
          text1: "内容2-1",
          text2: "内容2-2"
        }
      ],
      option: {
        title: "表格的标题",
        excelBtn: true,
        addBtn: false,
        menu: false,
        align: "center",
        selection: true,
        column: [
          {
            label: "列内容1",
            prop: "text1"
          },
          {
            label: "列内容2",
            prop: "text2"
          }
        ]
      }
    };
  }
};
</script>
