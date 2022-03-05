<template>
  <div>
    <div class="w-full">
      <img class="" :src="appointDetail?.appointImg" alt="课程图片" />
    </div>

    <div>
      <div class="float-right">
        <van-button @click="calendarShow = true">
          <van-icon name="notes-o" class="text-gray-500 z-10" size="1.4rem" />
          <div class="text-xs text-gray-500">选择</div>
        </van-button>
        <van-calendar
          v-model:show="calendarShow"
          :show-confirm="false"
          @confirm="choseAppointDate"
        />
      </div>

      <div>
        <van-tabs
          v-model:active="tabActiveName"
          @click-tab="
            ({ name }) => {
              setAppointDate(name);
            }
          "
        >
          <van-tab v-for="item in appointDateRange" :index="item" :name="item.fullDate">
            <template #title>
              <div>{{ item.date }}</div>
              <div class="text-center">{{ item.weekDay }}</div>
            </template>
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
          </van-tab>
        </van-tabs>
      </div>
      <van-cell-group inset>
        <van-button type="primary" block>立即预约</van-button>
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, nextTick } from "vue";
  import dayjs from "dayjs";
  import ChoDateTimePicker from "/@/components/ChoDateTimePicker.vue";
  import appointSetting from "/@/settings/appointSetting";
  import useAppointInfo from "./hooks/useAppointInfo";
  import { getAppointDetail } from "/@/api/appointApi";
  import { getQueryVariable } from "/@/utils/cache";
  import type { AppointDetail, AppointDateReturn } from "../types";

  const START_TIME_HOUR = appointSetting.startTimeHour;
  const END_TIME_HOUR = appointSetting.endTimeHour;
  const MINUTE_SELECT = appointSetting.minuteSelect;

  // 默认当前日期的 Tab
  const tabActiveName = ref(dayjs().format("YYYY年M月D日"));
  const calendarShow = ref(false);

  const { appointDate, appointStartTime, appointEndTime, appointRemark, setAppointDate } =
    useAppointInfo();

  /**
   *
   * @description 预约时间范围设置
   */
  function appointTimeFilter(type: string, values: string[]): string[] {
    const currentDay = dayjs().format("YYYY年M月D日");

    if (type === "hour") {
      // 超过最晚结束时间小时则不展示
      let filterHour = values.slice(Number(START_TIME_HOUR), Number(END_TIME_HOUR) + 1);

      // 当天已经过去的小时不可以预约
      if (currentDay === appointDate.value) {
        filterHour = filterHour.filter((value) => {
          return Number(value) > Number(new Date().getHours());
        });
      }
      return filterHour;
    }

    if (type === "minute") {
      return MINUTE_SELECT;
    }
    return values;
  }

  const appointDateRange = ref(generateAppointDateRange());

  /**
   * @description 生成可预约时间，默认为当前日期至最近 7 天
   */
  function generateAppointDateRange(
    startDay: Date = new Date(),
    num: number = 7
  ): AppointDateReturn[] {
    let weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const currentDate = dayjs(startDay);
    let result: AppointDateReturn[] = [];

    for (let index = 0; index <= num; index++) {
      const date = new Date(
        currentDate.get("year"),
        currentDate.get("month"),
        currentDate.get("date") + index
      );
      result.push({
        date: dayjs(date).format("MM.DD"),
        weekDay: weekDay[date.getDay()],
        fullDate: dayjs(date).format("YYYY年M月D日"),
      });
    }

    // 当前时间超过每天预约最晚结束时间，则当天不能预约
    if (currentDate.get("hour") > Number(END_TIME_HOUR)) {
      result.shift();
    }

    return result;
  }

  /**
   *
   * @param date
   * @description 选择更多日期
   */
  function choseAppointDate(date: Date) {
    appointDate.value = dayjs(date).format("YYYY年M月D日");
    calendarShow.value = false;
    // 重置 tab 渲染数据
    appointDateRange.value = [];
    nextTick(() => {
      appointDateRange.value = generateAppointDateRange(date);
    });
  }

  onMounted(() => {
    loadAppointDetail();
  });

  const appointDetail = ref<AppointDetail>();

  async function loadAppointDetail() {
    const appointId = getQueryVariable("appointId");
    appointDetail.value = await getAppointDetail(Number(appointId));
  }
</script>
