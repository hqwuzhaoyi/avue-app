<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px"
                style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']"
                 v-for="item in menuData">
          <el-submenu :index="item.path"
                      default-active="formGroup">
            <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item :index="childItem.path"
                            @click="RouterPushClick(item.path+'/'+childItem.path)"
                            v-for="childItem in item.children">{{childItem.meta.ZH}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting"
               style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    const menuData = this.getMenuData(this.$router.options.routes[0].children);
    const item = {};
    return {
      menuData
    };
  },
  methods: {
    ...mapActions(["GenerateRoutes"]),
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
    },

    RouterPushClick(path) {
      this.GenerateRoutes(this.menuData);
      if (this.$route.path !== path) {
        this.$router.push({ path });
      }
    }
  }
};
</script>