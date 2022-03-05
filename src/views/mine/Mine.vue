<template>
  <div class="background">
    <!-- 头像及昵称 -->
    <div>
      <img class="w-16 rounded-full" src="http://wujieli.top/avatar.jpg" />
      <div class="mt-2 text-white">点击登录</div>
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
        <van-cell title="英文职场面试培训">
          <template #label>
            <div>
              <van-icon name="label-o" />
              <span> 2022年3月5日</span>
            </div>
            <div>
              <van-icon name="clock-o" />
              <span> 8:00 - 9:00</span>
            </div>
          </template>
        </van-cell>
        <van-cell title="初高中英文代写文书及推荐信">
          <template #label>
            <div>
              <van-icon name="label-o" />
              <span> 2022年3月9日</span>
            </div>
            <div>
              <van-icon name="clock-o" />
              <span> 13:00 - 15:00</span>
            </div>
          </template>
        </van-cell>
        <van-cell title="大学本科英文代写文书及推荐信">
          <template #label>
            <div>
              <van-icon name="label-o" />
              <span> 2022年4月10日</span>
            </div>
            <div>
              <van-icon name="clock-o" />
              <span> 8:00 - 9:00</span>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
