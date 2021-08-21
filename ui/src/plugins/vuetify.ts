import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import { library } from '@fortawesome/fontawesome-svg-core'; // Core SVG
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // Integration
import '@fortawesome/fontawesome-free/css/all.css';

// import colors from 'vuetify/lib/util/colors'; // preset colors from vuetify

// import needed font awesome icons
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Vue.component('font-awesome-icon', FontAwesomeIcon);
// library.add(faSearch);

// const ICONS = {
//   search: {
//     component: FontAwesomeIcon,
//     props: ['fas', 'search'],
//   },
// };

Vue.use(Vuetify, {
  iconfont: 'fa',
});

export default new Vuetify({
  // icons: {
  //   iconfont: 'faSvg',
  //   values: ICONS,
  // },
  theme: {
    dark: false, // can be changed in-app
    themes: {
      // color overrides
      light: {},
      dark: {},
    },
  },
});
