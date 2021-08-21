// not using typescript for vuex -
//    vuex does not provide typings out of the box for stores

import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';

Vue.use(Vuex);

// WLE: use example: https://github.dev/vuejs/vuex/tree/dev/examples/shopping-cart/store

export default new Vuex.Store({
  modules: {
    auth,
  },
});
