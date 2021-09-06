<template>
  <div :class="{ full: expand }">
    <div v-if="isLoggedIn" :class="{ 'flex-ends': expand }">
      <!-- move logout button to dropdown menu on avatar -->
      <v-btn v-on:click="logout">{{ this.$t('auth.logOut') }}</v-btn>
      <v-avatar class="ml-1" color="info" rounded="true" />
    </div>
    <div v-else :class="{ 'flex-ends': expand }">
      <v-btn class="ma-1" v-on:click="login">{{ this.$t('auth.logIn') }}</v-btn>
      <v-btn class="ma-1" color="primary" :to="{ name: 'Register' }">{{
        this.$t('auth.signUp')
      }}</v-btn>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'WleLoginStatus',
  props: {
    // pushes buttons to left & right to take up space
    expand: {
      default: false,
      required: false,
    },
  },
  methods: {
    login() {
      // TODO this will change to open a login prompt....
      this.$store.dispatch('auth/logIn', { username: 'cory' });
    },
    logout() {
      this.$store.dispatch('auth/logOut');
    },
  },
  created() {
    this.$store.dispatch('auth/fetchUserData');
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
</style>
