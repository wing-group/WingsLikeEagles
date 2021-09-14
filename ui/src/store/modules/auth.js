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
      const [logged_in, user] = await authHttpService.getLoginStatus();
      if (state.loggedIn !== logged_in) commit('toggleLoggedInStatus');
      commit('setUser', user);
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
