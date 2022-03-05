<template>
  <div>
    <template v-for="item in appointList" :index="item.appointId">
      <van-card
        :title="item.appointTitle"
        :desc="item.appointDesc"
        :thumb="item.appointImg"
        :price="item.appointAmt"
      >
        <template #footer>
          <van-button size="mini" type="primary" @click="toAppointDetail(item.appointId)"
            >预约课程</van-button
          >
        </template>
      </van-card>
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import type { AppointDetail } from "./types";
  import { getAppointList } from "/@/api/appointApi";

  const router = useRouter();

  const toAppointDetail = (appointId: number) => {
    console.log("appointId: ", appointId);
    router.push({
      name: "appointDetail",
      query: { appointId },
    });
  };

  onMounted(async () => {
    loadAppointList();
  });

  const appointList = ref<AppointDetail[]>();

  async function loadAppointList() {
    const data = await getAppointList();
    appointList.value = data.list;
  }
</script>
