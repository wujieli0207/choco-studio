import dayjs from "dayjs";
import { onMounted, ref } from "vue";
import { UserAppoint } from "/@/api/model/userModel";

import { getUserAppoint } from "/@/api/userApi";

const useUserAppoint = () => {
  const userAppointList = ref<UserAppoint[]>();

  async function loadUserAppoint() {
    const result = await getUserAppoint(1);
    result.forEach((item: UserAppoint) => {
      item.appointDate = dayjs(item.appointDate).format("YYYY年M月D日");
      item.startTime = dayjs(item.startTime).format("H:mm");
      item.endTime = dayjs(item.endTime).format("H:mm");
    });
    userAppointList.value = result;
  }

  onMounted(() => {
    loadUserAppoint();
  });

  return {
    userAppointList,
  };
};

export default useUserAppoint;
