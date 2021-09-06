import authHttpService from '@/services/authHttpService';

// initial state
const state = () => ({
  loggedIn: false,
  currentUser: {},
});

const getters = {
  isLoggedIn(state) {
    return state.loggedIn;
  },

  getCurrentUser(state) {
    return state.currentUser;
  },
};

const mutations = {
  toggleLoggedInStatus(state) {
    state.loggedIn = !state.loggedIn;
  },

  setUser(state, user) {
    state.currentUser = user;
  },
};

const actions = {
  logIn({ state, commit }, user) {
    if (state.loggedIn === false) {
      commit('toggleLoggedInStatus');
    }
    commit('setUser', user);
  },

  logOut({ state, commit }) {
    if (state.loggedIn === true) {
      commit('toggleLoggedInStatus');
      commit('setUser', {});
    }
  },

  /**
   *
   * @param {Object, function} param0 vuex params
   * @param {boolean} forceFetch if true, will re-run api call even if cached data exists
   */
  async fetchUserData({ state, commit }, forceFetch) {
    if (Object.keys(state.currentUser).length === 0 || forceFetch) {
      // logged_in
      let logged_in = await authHttpService.getLoginStatus();
      if (state.loggedIn !== logged_in) commit('toggleLoggedInStatus');

      // TODO: api call for current user if logged_in
      if (logged_in) {
        commit('setUser', {}); // will change...
      }
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
