<!-- 封装 Vant 选择器 -->
<template>
  <div>
    <van-field
      readonly
      :label="label"
      :placeholder="placeholder"
      v-bind="other"
      @click="showPicker = true"
    >
      <van-popup v-model:show="showPicker" :position="position">
        <van-picker :columns="columns" @cancel="showPicker = false"> </van-picker>
      </van-popup>
    </van-field>
  </div>
</template>

<script lang="ts" setup>
  import type { PopupPosition, PickerColumn, PickerOption } from "vant";
  import { ref, onMounted, PropType } from "vue";
  const props = defineProps({
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "选择器",
    },
    placeholder: {
      type: String,
      default: "点击选择",
    },
    // 展示数据
    columns: {
      type: Object as PropType<PickerColumn[]>,
      default: () => [],
    },
    position: {
      type: Object as PropType<PopupPosition>,
      default: "bottom",
    },
    // 其他属性配置
    other: {
      type: Object,
      default: () => ({}),
    },
  });

  const showPicker = ref(false);
  // 弹出框是否可以点击
  const isClick = ref(true);
  const text = ref("");

  // onMounted(() => {
  //   initPickerText();
  // });

  // /**
  //  * @description 初始化选择框默认值
  //  */
  // function initPickerText() {
  //   props.data.forEach((value) => {
  //     if (value.val === props.modelValue) {
  //       text.value = value.label;
  //     }
  //   });
  // }

  // /**
  //  * @description 选择参数只有一个时无法点击选择
  //  */
  // function handleUnClick() {
  //   // isClick.value =
  // }
</script>

<!-- <style scoped lang="scss"></style> -->
