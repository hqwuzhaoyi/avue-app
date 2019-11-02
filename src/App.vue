<template>
  <div id="app">
    <router-view></router-view>
    <Some>123</Some>
  </div>
</template>

<script>
import Some from "./Some";
export default {
  name: "app",
  components: { Some }
};
</script>

<style>
</style>
