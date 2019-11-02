<template>
  <div>
    <avue-form :option="option"
               v-model="obj"></avue-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: {
        dynamic: [
          {
            input: 1,
            select: 1,
            radio: 1
          },
          {
            input: 2,
            select: 2,
            radio: 1
          }
        ]
      },
      option: {
        labelWidth: 110,
        column: [
          {
            label: "输入框",
            prop: "input",
            span: 16,
            row: true
          },
          {
            label: "子表单",
            prop: "dynamic",
            type: "dynamic",
            span: 16,
            children: {
              align: "center",
              headerAlign: "center",
              column: [
                {
                  width: 200,
                  label: "输入框",
                  prop: "input"
                },
                {
                  width: 200,
                  label: "选择框",
                  prop: "select",
                  type: "select",
                  dicData: [
                    {
                      label: "测试1",
                      value: 1
                    },
                    {
                      label: "测试2",
                      value: 2
                    }
                  ]
                },
                {
                  width: 200,
                  label: "多选",
                  prop: "checkbox",
                  type: "checkbox",
                  dicData: [
                    {
                      label: "测试1",
                      value: 1
                    },
                    {
                      label: "测试2",
                      value: 2
                    }
                  ]
                },
                {
                  width: 200,
                  label: "开关",
                  prop: "switch",
                  type: "switch",
                  dicData: [
                    {
                      label: "测试1",
                      value: 1
                    },
                    {
                      label: "测试2",
                      value: 2
                    }
                  ]
                },
                {
                  width: 200,
                  label: "数字框",
                  prop: "number",
                  type: "number"
                }
              ]
            },
            rules: [
              {
                required: true,
                message: "必填项测试",
                trigger: "blur"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>