<template>
  <error-card
    :allowRetry="false"
    :allowBack="true"
    :title="this.$t('components.error.title')"
  >
    <v-container :id="id" fill-height fluid color="secondary">
      <v-row align="center" justify="center">
        <v-card v-if="!loading" :width="cardWidth">
          <v-container>
            <!-- TODO use i18n -->
            <h1>Sign In to WingsLikeEagles</h1>
            <br />
            <v-text-field
              outlined
              label="E-mail"
              v-model="email"
              :rules="[required]"
            />
            <v-text-field
              outlined
              label="Password"
              type="password"
              v-model="password"
              :rules="[required]"
            />
            <v-row>
              <v-col>
                <v-btn @click="goBack">{{ 'Cancel' }}</v-btn>
              </v-col>
              <v-col align="right">
                <v-btn @click="submit" color="primary">{{ 'Submit' }}</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-container v-if="loading" class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
            :size="cardWidth / 6"
            :width="8"
          />
        </v-container>
      </v-row>
    </v-container>
  </error-card>
</template>

<script>
import Vue from 'vue';
import authHttpService from '@/services/authHttpService';
import ErrorCard from '@/components/Error/ErrorCard.vue';

export default Vue.extend({
  name: 'SignIn',
  components: {
    ErrorCard,
  },
  data() {
    return {
      id: 'signin',
      email: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    required(input) {
      return !!input || 'Required';
    },
    async submit() {
      this.loading = true;
      const [logged_in, user] = await authHttpService.logIn(this.email, this.password);

      if (logged_in) {
        this.goBack();
        this.$store.dispatch('auth/logIn', user);
      } else {
        this.loading = false;
        throw new Error(this.$t('components.error.generic'));
      }
    },
  },
  computed: {
    cardWidth() {
      return this.$vuetify.breakpoint.thresholds.xs;
    },
  },
});
</script>

<style></style>
