const prefix = import.meta.env.VITE_NODE_ENV === 'production' ? '/vue-vite-qiankun' : '/vue-vite-qiankun';

export const qiankunApp = [
  {
    name: 'vue3-cnode',
    entry: 'https://guoqirong.github.io/vue3-cnode/',
    container: '#container',
    activeRule: prefix + '/#/vue3-cnode',
  },
  {
    name: 'umi-cnode',
    entry: 'https://guoqirong.github.io/umi-cnode/',
    container: '#container',
    activeRule: prefix + '/#/umi-cnode',
  },
  {
    name: 'react-cnode',
    entry: 'https://guoqirong.github.io/react-cnode/',
    container: '#container',
    activeRule: prefix + '/#/react-cnode',
  },
  {
    name: 'vue2-cnode',
    entry: 'http://localhost/vue2-cnode/',
    container: '#container',
    activeRule: prefix + '/#/vue2-cnode',
  },
  {
    name: 'vue-vite-cnode',
    entry: 'https://guoqirong.github.io/vue-vite-cnode/',
    container: '#container',
    activeRule: prefix + '/#/vue-vite-cnode',
  },
];