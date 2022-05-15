<script setup lang="ts">
import { ref, useSlots, watch } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  delay: {
    type: Number,
    default: 0,
  },
  isNotScrollbar: {
    type: Boolean,
    default: false,
  },
});

const visibled = ref(false);
//判断<slot/>是否有传值
const slotDefault = !!useSlots().default;

let timer: any | undefined;
watch([() => props.visible, () => props.delay], ([visible, delay]) => {
  if (delay) { // 防闪烁
    timer && clearTimeout(timer);
    if (visible) {
      timer = setTimeout(() => visibled.value = true, delay);
    } else {
      visibled.value = false;
    }
  } else {
    visibled.value = visible;
  }
});

defineExpose({
  name: 'LoadingComp',
});
</script>

<template>
  <div :class='`hp-spin ${visibled ? "" : "hide"}`'>
    <div
      :class='isNotScrollbar ? "is-not-scrollbar" : ""'
    >
      <slot />
    </div>
    <div :class="slotDefault ? 'spin-content' : ''">
      <div class="spin-img"></div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>