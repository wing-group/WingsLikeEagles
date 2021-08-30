import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/views/Main/Main.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue'),
      },
    ],
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('@/views/Register/Register.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
