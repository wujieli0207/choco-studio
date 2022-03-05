import dayjs from "dayjs";
import { ref } from "vue";
import appointSetting from "/@/settings/appointSetting";

const useAppointInfo = () => {
  const currentDate = dayjs();

  // 当前时间超过每天预约最晚结束时间，则当天不能预约
  const appointDate = ref(
    currentDate.get("hour") < Number(appointSetting.endTimeHour)
      ? currentDate.format("YYYY年M月D日")
      : dayjs(
          new Date(currentDate.get("year"), currentDate.get("month"), currentDate.get("date") + 1)
        ).format("YYYY年M月D日")
  );
  const appointStartTime = ref("");
  const appointEndTime = ref("");
  const appointRemark = ref("");

  const setAppointDate = (value: string) => {
    appointDate.value = value;
  };

  return {
    appointDate,
    appointStartTime,
    appointEndTime,
    appointRemark,
    setAppointDate,
  };
};

export default useAppointInfo;
