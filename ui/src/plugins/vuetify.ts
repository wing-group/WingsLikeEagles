import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors'; // preset colors from vuetify

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false, // can be changed in-app
    themes: {
      // color overrides
      light: {},
      dark: {},
    },
  },
});
