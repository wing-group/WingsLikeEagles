import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/views/Main/Main.vue'),
    children: [
      {
        name: 'Home',
        path: '/',
        component: () => import('@/views/Home/Home.vue'),
      },
      {
        name: 'Page 2',
        path: '/page2',
        component: () => import('@/views/Home/Home2.vue'),
      },
    ],
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('@/views/Auth/Register.vue'),
  },
  {
    name: "Sign In",
    path: '/signin',
    component: () => import('@/views/Auth/SignIn.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
