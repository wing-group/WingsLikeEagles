<template>
  <div class="app-container" :id="`${id}-container`">
    <v-navigation-drawer v-if="isMobile" v-model="sideBar" app>
      <main-nav-menu :mobile="true" />
    </v-navigation-drawer>
    <v-app-bar app color="accent" :elevate-on-scroll="true">
      <v-app-bar-nav-icon
        v-if="isMobile"
        color="secondary"
        @click.prevent="toggleSidebar"
      />
      <router-link to="/" class="text-decoration-none">
        <span class="text-h5 font-weight-bold nav-link">{{ appName }}</span>
      </router-link>
      <main-nav-menu v-if="!isMobile" :mobile="false" class="full-width" />
    </v-app-bar>
    <div class="page-wrapper">
      <v-container fluid>
        <router-view />
      </v-container>
    </div>
    <v-footer>
      <wle-footer />
    </v-footer>
  </div>
</template>

<script>
import Vue from 'vue';
import WleFooter from '@/views/Main/WLEFooter.vue';
import MainNavMenu from './MainNavMenu.vue';

export default Vue.extend({
  name: 'Main',
  components: {
    WleFooter,
    MainNavMenu,
  },
  data() {
    return {
      id: 'main-view',
      sideBar: false,
      appName: this.$t('global.siteName'),
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

  .full-width {
    width: 100%;
  }
}
</style>

<style lang="scss">
.app-container {
  .nav-link {
    text-decoration: none;
    color: var(--v-secondary-base);
  }

  .nav-link:hover {
    color: var(--v-secondary-darken1);
  }
}
</style>
