<template>
  <avue-crud :option="option"
             :data="data"
             :page="page"
             @on-load="onLoad"
             @sortable-change="sortableChange"></avue-crud>
</template>

<script>
export default {
  data() {
    return {
      page: {
        pageSize: 10,
        total: 0
      },
      data: [
        {
          text1: "内容1-1",
          text2: "内容1-2"
        },
        {
          text1: "内容2-1",
          text2: "内容2-2"
        },
        {
          text1: "内容3-1",
          text2: "内容3-2"
        },
        {
          text1: "内容4-1",
          text2: "内容4-2"
        },
        {
          text1: "内容5-1",
          text2: "内容5-2"
        },
        {
          text1: "内容5-1",
          text2: "内容5-2"
        },
        {
          text1: "内容5-1",
          text2: "内容5-2"
        },
        {
          text1: "内容5-1",
          text2: "内容5-2"
        },
        {
          text1: "内容5-1",
          text2: "内容5-2"
        },
        {
          text1: "内容5-1",
          text2: "内容5-2"
        },
        {
          text1: "内容5-1",
          text2: "内容5-2"
        },
        {
          text1: "内容5-1",
          text2: "内容5-2"
        }
      ],
      option: {
        sortable: true,
        addBtn: false,
        menu: false,
        align: "center",

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
  },
  methods: {
    sortableChange(oldindex, newindex, row, list) {
      this.data = [];
      this.$nextTick(() => {
        this.data = list;
      });
      console.log(oldindex, newindex, row, list);
    },
    onLoad(page) {
      this.page.total = this.data.length;
    }
  }
};
</script>