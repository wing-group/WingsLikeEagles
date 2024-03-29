import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import { i18n } from './plugins/i18n';

Vue.config.productionTip = false;

// Vue.prototype.$t = translate;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
