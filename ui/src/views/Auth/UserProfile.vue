<template>
  <error-card :title="this.$t('components.error.title')">
    <v-container :id="id" class="mb-4">
      <v-row justify="space-between">
        <div>
          <h1>My Profile</h1>
        </div>
        <div>
          <v-btn @click="logout">Log Out</v-btn>
          <v-btn class="ml-2" color="success" @click="error = true">Save</v-btn>
        </div>
      </v-row>
      <v-row justify="center" dense>
        <v-col cols="4" sm="2">
          <span>Email</span>
        </v-col>
        <v-col cols="8" sm="6">
          <v-text-field v-model="user.email" />
        </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col cols="4" sm="2">
          <span>Display</span>
        </v-col>
        <v-col cols="8" sm="6">
          <v-text-field v-model="user.display" />
        </v-col>
      </v-row>
      <v-row justify="center" dense>
        <v-col cols="4" sm="2">
          <span>Default Version</span>
        </v-col>
        <v-col cols="8" sm="6">
          <v-select :items="translations" v-model="user.default_version" />
        </v-col>
      </v-row>
      <v-alert v-model="error" type="error" dismissible
        >Not Implemented Yet</v-alert
      >
    </v-container>
  </error-card>
</template>

<script lang="ts">
import ErrorCard from '@/components/Error/ErrorCard.vue';
import authHttpService from '@/services/authHttpService';
import Vue from 'vue';

export default Vue.extend({
  name: 'UserProfile',
  components: { ErrorCard },
  data() {
    return {
      id: 'user-profile',
      user: {
        email: '',
        display: '',
        default_version: '',
      },
      translations: [] as Array<Record<string, unknown>>,
      error: false,
    };
  },
  methods: {
    async logout() {
      const logged_in = await authHttpService.logOut();
      if (!logged_in) this.$store.dispatch('auth/logOut');
      this.$router.push({ name: 'Home' });
    },
    formatTranslations(translationList: Array<string>) {
      var tr: Array<Record<string, unknown>> = [];
      translationList.forEach((val) => {
        tr.push({
          text: val,
          value: val,
        });
      });
      this.translations = tr;
    },
  },
  created() {
    const logged_in = this.$store.getters['auth/isLoggedIn'];
    if (!logged_in) this.$router.push({ name: 'Register' });
    this.user = this.$store.getters['auth/getCurrentUser'];
    this.translations = this.$store.getters['bible/getTranslations'];
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.thresholds.xs;
    },
  },
});
</script>

<style scoped>
span {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#user-profile {
  max-width: 800px;
}
</style>
