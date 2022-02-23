<template>
  <div>
    <div class="course-banner">
      <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="课程图片" />
    </div>
    <div class="appoint-info">
      <van-tabs v-model:active="tabActive">
        <van-tab v-for="index in 7" :title="'标签 ' + index">
          内容 {{ index }}
          <van-cell-group inset>
            <van-field
              v-model="appointInfo.appointDate"
              label="预约日期"
              placeholder="请输入选择预约日期"
            />
          </van-cell-group>
          <van-cell-group inset>
            <cho-date-time-picker
              v-model="appointInfo.appointStartTime"
              label="开始时间"
              placeholder="请选择开始时间"
              type="time"
              :filter="timeFilter"
            />
          </van-cell-group>
          <van-cell-group inset>
            <cho-date-time-picker
              v-model="appointInfo.appointEndTime"
              label="结束时间"
              placeholder="请选择结束时间"
              type="time"
              :filter="timeFilter"
            />
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import ChoDateTimePicker from "../../../components/ChoDateTimePicker.vue";

  const tabActive = ref(0);
  const appointInfo = reactive({
    appointDate: "",
    appointStartTime: "",
    appointEndTime: "",
    appointRemark: "",
  });

  /**
   *
   * @param type
   * @param values
   * @description 预约时间默认为 8点 - 20点，时间默认为 0 和 30 分
   */
  function timeFilter(type: string, values: string[]): string[] {
    const START_TIME_HOUR = "08";
    const END_TIME_HOUR = "20";

    if (type === "hour") {
      return values.slice(Number(START_TIME_HOUR), Number(END_TIME_HOUR) + 1);
    }

    if (type === "minute") {
      return ["00", "30"];
    }
    return values;
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
