<template>
  <div>
    <cho-navbar />
    <router-view />
    <cho-tabbar />
  </div>
</template>

<script lang="ts" setup>
  import ChoNavbar from "/@/components/ChoNavbar.vue";
  import ChoTabbar from "/@/components/ChoTabbar.vue";
</script>

<!-- <style scoped lang="scss"></style> -->
