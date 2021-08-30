<template>
  <div>
    <div v-if="isLoggedIn">
      <!-- move logout button to dropdown menu on avatar -->
      <v-btn v-on:click="logout">{{ this.$t('auth.logOut') }}</v-btn>
      <v-avatar class="ml-1" color="info" rounded="true" />
    </div>
    <div v-else>
      <v-btn class="ma-1" v-on:click="login">{{ this.$t('auth.logIn') }}</v-btn>
      <router-link :to="{ name: 'Register' }">
        <v-btn class="ma-1" color="primary">{{ this.$t('auth.signUp') }}</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'WleLoginStatus',
  methods: {
    login() {
      this.$store.dispatch('auth/logIn', { username: 'cory' });
      console.log(this.$store.state.auth);
    },
    logout() {
      this.$store.dispatch('auth/logOut');
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
