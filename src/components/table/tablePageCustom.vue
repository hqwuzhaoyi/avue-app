<template>
  <avue-crud :data="data"
             :option="option"
             :page="page"
             @size-change="sizeChange"
             @current-change="currentChange"></avue-crud>
</template>

<script>
export default {
  data() {
    return {
      page: {
        //pageSizes: [10, 20, 30, 40],默认
        currentPage: 2,
        total: 0,
        pageSize: 10
      },
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
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.page.total = 40;
      if (this.page.currentPage === 1) {
        this.data = [
          {
            name: "张三",
            sex: "男"
          }
        ];
      } else if (this.page.currentPage == 2) {
        this.data = [
          {
            name: "李四",
            sex: "女"
          }
        ];
      }
    },
    sizeChange(val) {
      console.log(val);
      this.page.currentPage = 1;
      this.page.pageSize = val;
      this.getList();
      this.$message.success("行数" + val);
    },
    currentChange(val) {
      console.log(val);
      this.page.currentPage = val;
      this.getList();
      this.$message.success("页码" + val);
    }
  }
};
</script>