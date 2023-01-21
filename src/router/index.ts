import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import TextConv from '../components/TextConv.vue';
import ExchangeRates from '../components/ExchangeRates.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: TextConv,
  },
  {
    path: '/rates',
    component: ExchangeRates,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
