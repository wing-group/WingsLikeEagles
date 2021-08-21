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
