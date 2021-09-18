<template>
  <div :class="{ full: expand }">
    <div v-if="isLoggedIn" :class="{ 'flex-ends': expand }">
      <v-btn :to="{ name: 'Profile' }">{{ this.$t('auth.profile') }}</v-btn>
      <v-avatar class="ml-1" color="primary" rounded="true" dense>
        <v-icon x-large color="secondary" class="avatar"> fa-user </v-icon>
      </v-avatar>
    </div>
    <div v-else :class="{ 'flex-ends': expand }">
      <v-btn class="ma-1" :to="{ name: 'Sign In' }">{{
        this.$t('auth.logIn')
      }}</v-btn>
      <v-btn class="ma-1" color="primary" :to="{ name: 'Register' }">{{
        this.$t('auth.signUp')
      }}</v-btn>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import authHttpService from '@/services/authHttpService';

export default Vue.extend({
  name: 'WleLoginStatus',
  props: {
    /**
     * pushes buttons to left & right to take up space
     */
    expand: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  methods: {
    async logout() {
      const logged_in = await authHttpService.logOut();
      if (!logged_in) this.$store.dispatch('auth/logOut');
    },
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      getCurrentUser: 'auth/getCurrentUser',
    }),
  },
});
</script>

<style lang="scss" scoped>
.full {
  width: 100%;
}

.flex-ends {
  display: flex;
  justify-content: space-between;
}

.avatar {
  transform: translateY(0.3rem);
}
</style>
