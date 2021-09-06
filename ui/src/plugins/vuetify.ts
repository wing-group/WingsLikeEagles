import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css';

// import colors from 'vuetify/lib/util/colors'; // preset colors from vuetify

Vue.use(Vuetify, {
  iconfont: 'fa',
});

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'sm', // This is equivalent to a value of 960
  },
  theme: {
    options: { customProperties: true },
    dark: false, // can be changed in-app
    themes: {
      // color overrides
      light: {
        primary: '#2196F3',
        secondary: '#FFFFFF',
        accent: '#965913',
        error: '#FF5252',
        info: '#A3A3A3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        // todo
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
});
