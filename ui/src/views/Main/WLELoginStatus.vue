<template>
  <div>
    <div v-if="isLoggedIn">
      <v-avatar />
      <v-btn v-on:click="logout">Sign Out</v-btn>
    </div>
    <div v-else>
      <v-btn v-on:click="login">Sign Up</v-btn>
      <v-btn v-on:click="login">Log In</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
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
