import { ref } from "vue";
import appointSetting from "/@/settings/appointSetting";
import { getCurrentDate } from "/@/utils/dateUtil";

const useAppointInfo = () => {
  const currentHour = new Date().getHours();

  // 当前时间超过每天预约最晚结束时间，则当天不能预约
  const appointDate = ref(
    currentHour < Number(appointSetting.endTimeHour) ? getCurrentDate(0) : getCurrentDate(1)
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
