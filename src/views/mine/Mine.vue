<template>
  <div class="background">
    <!-- 头像及昵称 -->
    <div class="flex flex-col items-center">
      <img class="w-16 rounded-full" :src="userAvatar" />
      <div class="mt-2 text-white">{{ userNickName }}</div>
    </div>

    <!-- 基础菜单 -->
    <div class="w-full mt-3">
      <van-cell-group inset>
        <van-cell title="已预约课程" is-link />
        <van-cell title="联系客服" is-link />
        <van-cell title="关于我们" is-link />
      </van-cell-group>
    </div>

    <!-- 即将开始课程 -->
    <div class="w-full mt-3">
      <van-cell-group inset>
        <van-cell is-link arrow-direction="down">
          <template #title>
            <span class="font-bold">即将开始</span>
          </template>
        </van-cell>
        <template v-for="item in userAppointList" :key="item.relationId">
          <van-cell :title="item.appointTitle">
            <template #label>
              <div>
                <van-icon name="label-o" />
                <span>&nbsp;{{ item.appointDate }}</span>
              </div>
              <div>
                <van-icon name="clock-o" />
                <span>&nbsp;{{ item.startTime }} - {{ item.endTime }}</span>
              </div>
              <div v-if="item.appointRemark">
                <van-icon name="notes-o" />
                <span>&nbsp;{{ item.appointRemark }}</span>
              </div>
            </template>
          </van-cell>
        </template>
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import useUserInfo from "./hooks/useUserInfo";
  import useUserAppoint from "./hooks/useUserAppoint";

  const { userNickName, userAvatar } = useUserInfo();
  const { userAppointList } = useUserAppoint();
</script>

<style scoped lang="scss">
  @import "/@/styles/variables.scss";
  .background {
    position: relative;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
    overflow: hidden;
  }

  .background::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 10rem;
    content: "";
    background: $--color-mine-bg;
    border-radius: 0 0 30% 30%;
  }
</style>
