<template>
  <div>
    <van-field
      readonly
      :label="label"
      :placeholder="placeholder"
      v-model="text"
      v-bind="other"
      @click="showPicker = true"
    />
    <van-popup v-model:show="showPicker" :position="position">
      <van-datetime-picker
        v-model:show="showPicker"
        :type="type"
        :title="placeholder"
        :filter="filter"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
  import type { PopupPosition } from "vant";
  import { ref, PropType, computed } from "vue";

  const props = defineProps({
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "时间选择器",
    },
    placeholder: {
      type: String,
      default: "请点击选择",
    },
    position: {
      type: String as PropType<PopupPosition>,
      default: "bottom",
    },
    type: {
      type: String as PropType<"date" | "time" | "year-month" | "month-day" | "datehour">,
      default: "datetime",
    },
    filter: {
      type: Function as PropType<(type: string, values: string[]) => string[]>,
      default: () => {},
    },
    // 其他属性配置
    other: {
      type: Object,
      default: () => ({}),
    },
  });

  const emits = defineEmits<{ (e: "update:modelValue", value: string): void }>();

  const showPicker = ref(false);
  const text = computed(() => {
    return props.modelValue;
  });

  /**
   *
   * @param value
   * @description
   */
  function onConfirm(value: string) {
    emits("update:modelValue", value);
    showPicker.value = false;
  }
</script>
