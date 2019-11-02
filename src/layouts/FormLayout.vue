<template>
  <div>
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane :label="item.meta.ZH"
                   v-for="item in menuData"
                   :name="item.name"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      activeName: "first",
      menuData: menuData[0].children
    };
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push(this.activeName);
    },
    getMenuData(routes) {
      const menuData = [];
      routes.forEach(item => {
        if (item.name && !item.hideInMenu) {
          const newItem = { ...item };
          delete newItem.children;
          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(item.children);
          }
          menuData.push(newItem);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          menuData.push(...this.getMenuData(item.children));
        }
      });
      return menuData;
    }
  }
};
</script>