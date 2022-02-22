<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    right-text="分享"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script lang="ts" setup>
  import { ref, Ref } from "vue";
  import { Toast } from "vant";
  import { useRouter, useRoute } from "vue-router";

  const router = useRouter();
  const route = useRoute();

  const title: Ref<string> = ref("");

  router.afterEach(() => {
    title.value = route.meta.title as string;
  });

  const onClickLeft = () => history.back();
  const onClickRight = () => Toast("分享");
</script>
