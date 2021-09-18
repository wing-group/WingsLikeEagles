// initial state
const state = () => ({
  translations: [],
});

const getters = {
  getTranslations(state) {
    return state.translations;
  },
};

const mutations = {
  setTranslations(state, translationList) {
    state.translations = translationList;
  },
};

const actions = {
  /**
   *
   * @param {Object, function} param0 vuex params
   * @param {boolean} forceFetch if true, will re-run api call even if cached data exists
   */
  async fetchBibleData({ state, commit }, forceFetch) {
    // translations
    if (state.translations.length === 0 || forceFetch) {
      // TODO send API call for supported translations
      setTimeout(() => {
        const translations = ['esv'];
        commit('setTranslations', translations);
      }, 500); // simulate async
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
