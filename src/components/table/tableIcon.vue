<template>
  <avue-crud :data="data"
             :option="option3"
             v-model="obj"
             @date-change="dateChange">
    <template slot-scope="scope"
              slot="menu">
      <el-button size="small"
                 @click.native="tip"
                 icon="el-icon-share"></el-button>
    </template>
  </avue-crud>
</template>

<script>
export default {
  data() {
    return {
      obj: {},
      data: [
        {
          name: "张三",
          sex: "男",
          date: "1994-02-23 00:00:00"
        },
        {
          name: "李四",
          sex: "女",
          date: "1994-02-23 00:00:00"
        },
        {
          name: "王五",
          sex: "女",
          date: "1994-02-23 00:00:00"
        },
        {
          name: "赵六",
          sex: "男",
          date: "1994-02-23 00:00:00"
        }
      ],
      option3: {
        title: "表格的标题",
        menuType: "icon",
        page: false,
        align: "center",
        dateBtn: true,
        dateDefault: true,
        menuAlign: "center",
        column: [
          {
            label: "姓名",
            prop: "name"
          },
          {
            label: "性别",
            prop: "sex"
          },
          {
            label: "日期1",
            prop: "date",
            type: "date",
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh"
          }
        ]
      }
    };
  },
  methods: {
    dateChange(date) {
      this.$message.success(date);
    },
    tip() {
      this.$message.success("自定义按钮");
    }
  }
};
</script>