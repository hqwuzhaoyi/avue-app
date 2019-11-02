<template>
  <div>
    <el-row style="margin-bottom:20px;font-size:15px">
      <el-col :span="4">显示边框: <el-switch size="small"
                   v-model="showBorder"> </el-switch>
      </el-col>
      <el-col :span="4">显示斑马纹: <el-switch size="small"
                   v-model="showStripe"> </el-switch>
      </el-col>
      <el-col :span="4">显示索引: <el-switch size="small"
                   v-model="showIndex"> </el-switch>
      </el-col>
      <el-col :span="4">显示多选框: <el-switch size="small"
                   v-model="showCheckbox"> </el-switch>
      </el-col>
      <el-col :span="4">显示表头: <el-switch size="small"
                   v-model="showHeader"> </el-switch>
      </el-col>
      <el-col :span="4">显示分页: <el-switch size="small"
                   v-model="showPage"> </el-switch>
      </el-col>
    </el-row>
    <el-row style="margin-bottom:20px">
      <el-radio-group v-model="sizeValue">
        <el-radio label="">默认</el-radio>
        <el-radio label="small">small</el-radio>
        <el-radio label="mini">mini</el-radio>
      </el-radio-group>
    </el-row>
    <avue-crud :data="data"
               :option="option0"></avue-crud>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {},
      data: [
        {
          name: "张三",
          sex: "男"
        },
        {
          name: "李四",
          sex: "女"
        },
        {
          name: "王五",
          sex: "女"
        },
        {
          name: "赵六",
          sex: "男"
        }
      ],
      showBorder: false,
      showStripe: false,
      showHeader: true,
      showIndex: true,
      showCheckbox: false,
      showPage: false,
      sizeValue: ""
    };
  },
  computed: {
    option0() {
      return {
        title: "表格的标题",
        border: this.showBorder,
        stripe: this.showStripe,
        showHeader: this.showHeader,
        index: this.showIndex,
        size: this.sizeValue,
        selection: this.showCheckbox,
        page: this.showPage,
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
      };
    }
  }
};
</script>