<template>
  <div class="app-container" :id="`${id}-container`">
    <v-navigation-drawer v-model="sideBar" app>
      <main-nav-menu />
    </v-navigation-drawer>
    <v-app-bar app color="accent" :elevate-on-scroll="true">
      <v-app-bar-nav-icon
        color="headerContent"
        @click.prevent="toggleSidebar"
      />
      <router-link to="/" class="text-decoration-none">
        <span
          class="text-h5 font-weight-bold"
          :style="{ color: $vuetify.theme.currentTheme.headerContent }"
          >{{ appName }}</span
        >
      </router-link>
      <v-spacer />
      <wle-search v-if="!isMobile" class="nav-search"></wle-search>
      <wle-login-status v-if="!isMobile"></wle-login-status>
    </v-app-bar>
    <v-main class="page-wrapper">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer>
      <wle-footer />
    </v-footer>
  </div>
</template>

<script>
import Vue from 'vue';
import WleLoginStatus from '@/views/Main/WLELoginStatus.vue';
import WleSearch from '@/components/WLESearch/WLESearch.vue';
import WleFooter from '@/views/Main/WLEFooter.vue';
import MainNavMenu from './MainNavMenu.vue';

export default Vue.extend({
  name: 'Main',
  components: {
    WleFooter,
    WleSearch,
    WleLoginStatus,
    MainNavMenu,
  },
  data() {
    return {
      id: 'main-view',
      sideBar: false,
      appName: this.$t('global.site_name'),
    };
  },
  methods: {
    toggleSidebar() {
      this.sideBar = !this.sideBar;
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
});
</script>

<style lang="scss" scoped>
.app-container {
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;

  .page-wrapper {
    /* makes sure the fotter is at least the bottom */
    min-height: 95%;
  }
}
</style>
