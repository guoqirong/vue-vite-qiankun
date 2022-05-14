<script setup lang="ts">
import useEventBus from '@/utils/eventBus';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  menuText: String,
  menuPath: String,
});

const route = useRoute();
const router = useRouter();
const [event] = useEventBus();

const getSelected = (path: string) => {
  if (path === '/') {
    return route.path === path;
  }
  return route.path.includes(path);
};

defineExpose({
  name: 'MenuItem',
});
</script>

<template>
  <div
    :class="`menu-item${getSelected(props.menuPath ?? '') ? ' is-selected' : ''}`"
    @click="() => {
      if (props.menuPath !== '/' && props.menuPath !== route.path) {
        event.emit('qiankun-child-loading', {
          isLoading: true,
          isMenuClick: true
        });
      } else {
        event.emit('qiankun-child-loading', {
          isLoading: false
        });
      }
      router.push(props.menuPath ?? '');
    }"
  >
    {{props.menuText}}
  </div>
</template>

<style lang="scss" src="./index.scss"></style>