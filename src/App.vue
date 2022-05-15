<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import { routes } from './router';
import MenuItem from '@/components/menu-item/index.vue';
import LoadingComp from '@/components/loading-comp/index.vue';
import { getQiankunAppUrl } from '@/utils';
import useEventBus from './utils/eventBus';
import { useRoute } from 'vue-router';

const qiankunRouter = getQiankunAppUrl();
const loading = ref(false);
const [event] = useEventBus();
const route = useRoute();

event.on('qiankun-child-loading', (data: any) => {
  const {isLoading, isMenuClick} = data ?? {};
  if (route.path === '/' && !isMenuClick) {
    loading.value = false;
  } else {
    loading.value = Boolean(isLoading);
  }
});
</script>

<template>
  <div className="left-menu">
    <div className="left-menu-title">QIANKUN</div>
    <div className="left-menu-body">
      <menu-item
        v-for="(item, i) in [...routes, ...qiankunRouter]"
        :key="i"
        :menuText="String(item.name)"
        :menuPath="item.path"
      />
    </div>
  </div>
  <div className="rigth-qiankun-wrapper">
    <router-view />
    <loading-comp :visible="loading">
      <div id="container"></div>
    </loading-comp>
  </div>
</template>

<style lang="scss" src="./app.scss"></style>
