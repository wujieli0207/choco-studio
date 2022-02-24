<template>
  <div>
    <div class="course-banner">
      <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="课程图片" />
    </div>
    <div class="appoint-info">
      <div>
        <van-tabs
          v-model:active="tabActive"
          @click-tab="
            ({ title }) => {
              setAppointDate(title);
            }
          "
        >
          <van-tab v-for="item in generateAppointDate()" :index="item" :title="item">
            <van-cell-group inset>
              <van-field
                readonly
                v-model="appointDate"
                label="预约日期"
                placeholder="请输入选择预约日期"
              />
            </van-cell-group>
            <van-cell-group inset>
              <cho-date-time-picker
                v-model="appointStartTime"
                label="开始时间"
                placeholder="请选择开始时间"
                type="time"
                :filter="appointTimeFilter"
              />
            </van-cell-group>
            <van-cell-group inset>
              <cho-date-time-picker
                v-model="appointEndTime"
                label="结束时间"
                placeholder="请选择结束时间"
                type="time"
                :filter="appointTimeFilter"
              />
            </van-cell-group>
            <van-cell-group inset>
              <van-field v-model="appointRemark" label="备注" placeholder="请输入其他备注信息" />
            </van-cell-group>
            <van-cell-group inset>
              <van-button type="primary" block>立即预约</van-button>
            </van-cell-group>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import dayjs from "dayjs";
  import ChoDateTimePicker from "/@/components/ChoDateTimePicker.vue";
  import { getCurrentDate } from "/@/utils/dateUtil";
  import appointSetting from "/@/settings/appointSetting";
  import useAppointInfo from "./hooks/useAppointInfo";

  const START_TIME_HOUR = appointSetting.startTimeHour;
  const END_TIME_HOUR = appointSetting.endTimeHour;
  const MINUTE_SELECT = appointSetting.minuteSelect;

  const tabActive = ref(0);

  const { appointDate, appointStartTime, appointEndTime, appointRemark, setAppointDate } =
    useAppointInfo();

  /**
   *
   * @description 预约时间范围设置
   */
  function appointTimeFilter(type: string, values: string[]): string[] {
    const currentDay = dayjs().format("YYYY-MM-D");

    if (type === "hour") {
      // 超过最晚结束时间小时则不展示
      let filterHour = values.slice(Number(START_TIME_HOUR), Number(END_TIME_HOUR) + 1);

      // 当天已经过去的小时不可以预约
      if (currentDay === appointDate.value) {
        filterHour.filter((value) => {
          return Number(value) > new Date().getHours();
        });
      }
      return filterHour;
    }

    if (type === "minute") {
      return MINUTE_SELECT;
    }
    return values;
  }

  /**
   * @description 生成可预约时间，默认为当前日期至最近 7 天
   */
  function generateAppointDate(): string[] {
    const APPOINT_DATE_RANGE = 7;

    let result: string[] = [];

    for (let index = 0; index <= APPOINT_DATE_RANGE; index++) {
      result.push(`${getCurrentDate(index)}`);
    }

    // 当前时间超过每天预约最晚结束时间，则当天不能预约
    const currentHour = new Date().getHours();
    if (currentHour >= Number(END_TIME_HOUR)) {
      result.shift();
    }

    return result;
  }
</script>

<style scoped lang="scss">
  .course-banner {
    width: 100%;

    img {
      width: 100vw;
    }
  }
</style>
