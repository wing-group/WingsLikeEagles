<template>
  <div class="app-container" :id="`${id}-container`">
    <v-app-bar app>
      <v-toolbar-title>{{ appName }}</v-toolbar-title>
      <v-spacer />
      <wle-search class="nav-search"></wle-search>
      <wle-login-status></wle-login-status>
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

<script lang="ts">
import Vue from 'vue';
import WleLoginStatus from '@/views/Main/WLELoginStatus.vue';
import WleSearch from '@/components/WLESearch/WLESearch.vue';
import WleFooter from '@/views/Main/WLEFooter.vue';

export default Vue.extend({
  name: 'Main',
  components: {
    WleFooter,
    WleSearch,
    WleLoginStatus,
  },
  data() {
    return {
      id: 'main-view',
      appName: this.$t('global.site_name'),
    };
  },
});
</script>

<style lang="scss" scoped>
.app-container {
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;

  .nav-search {
    height: 36px; /* aligns with veutify sizes */
    display: inline-block;
    margin-right: 8px;
    position: relative;
    top: -1px;
  }

  .page-wrapper {
    min-height: 95%;
  }
}
</style>
