<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/" name="home" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item to="/appoint" name="appoint" icon="certificate">课程预约</van-tabbar-item>
    <van-tabbar-item to="/mine" name="mine" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  const active = ref("home");
</script>
