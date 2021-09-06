<template>
  <div>
    <!-- MOBILE | vertical nav -->
    <v-container v-if="mobile" class="pa-6">
      <v-row class="mb-2" align-content="center" justify="center">
        <wle-login-status :expand="true" />
      </v-row>
      <v-row align-content="center" justify="center">
        <wle-search :expand="true" />
      </v-row>
      <v-row>
        <v-col>
          <div v-for="link in links" :key="link.display">
            <router-link class="text-h6 mobile-nav-link" :to="link.to">{{
              link.display
            }}</router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- DESKTOP | horizontal nav -->
    <div v-else>
      <v-row align="center" class="ml-1">
        <div class="block ml-4" v-for="link in links" :key="link.display">
          <router-link
            :to="link.to"
            class="text-h6 font-weight-bold nav-link"
            >{{ link.display }}</router-link
          >
        </div>
        <v-spacer />
        <wle-search />
        <wle-login-status />
      </v-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import WleLoginStatus from '@/components/WLELoginStatus/WLELoginStatus.vue';
import WleSearch from '@/components/WLESearch/WLESearch.vue';

export default Vue.extend({
  name: 'MainNavMenu',
  components: {
    WleLoginStatus,
    WleSearch,
  },
  props: {
    mobile: {
      default: true,
      required: false,
    },
  },
  data() {
    return {
      links: [
        { display: 'Home', to: { name: 'Home' } },
        { display: 'Page 2', to: { name: 'Page 2' } },
        { display: 'Page 2.0', to: { name: 'Page 2' } },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
v-row {
  width: 100%;
}

.block {
  display: inline-block;
}

.mobile-nav-link {
  text-decoration: none;
  font-weight: bold;
  color: var(--v-accent-base);
}

.mobile-nav-link:hover {
  color: var(--v-accent-darken2);
}
</style>
