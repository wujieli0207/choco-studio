<template>
  <div>
    <van-card
      title="英文职场面试培训"
      desc="Mon&Tue 全天时间，其他时间需提前预约"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      price="1000"
    >
      <template #footer>
        <van-button size="mini" type="primary" @click="toAppointDetail">预约课程</van-button>
      </template>
    </van-card>
    <van-card
      title="初高中英文代写文书及推荐信"
      desc="Mon&Tue 全天时间，其他时间需提前预约"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      price="600"
    >
      <template #footer>
        <van-button size="mini" type="primary" @click="toAppointDetail">预约课程</van-button>
      </template>
    </van-card>
    <van-card
      title="大学本科英文代写文书及推荐信"
      desc="Mon&Tue 全天时间，其他时间需提前预约"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      price="800"
    >
      <template #footer>
        <van-button size="mini" type="primary" @click="toAppointDetail">预约课程</van-button>
      </template>
    </van-card>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import { getAppointList } from "/@/api/appointApi";

  const router = useRouter();

  const toAppointDetail = () => {
    router.push({ name: "appointDetail" });
  };

  onMounted(async () => {
    loadAppointList();
  });

  const appointList = ref([]);

  async function loadAppointList() {
    const data = await getAppointList();
    appointList.value = data.list;
  }
</script>
