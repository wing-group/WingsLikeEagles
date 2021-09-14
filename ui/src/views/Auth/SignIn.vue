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
            <h1>{{ text.title }}</h1>
            <br />
            <v-text-field
              outlined
              :label="text.email"
              v-model="email"
              :rules="[required]"
            />
            <v-text-field
              outlined
              :label="text.password"
              type="password"
              v-model="password"
              :rules="[required]"
            />
            <v-row>
              <v-col>
                <v-btn @click="goBack">{{ text.cancel }}</v-btn>
              </v-col>
              <v-col align="right">
                <v-btn @click="submit" color="primary">{{ text.submit }}</v-btn>
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
      text: {
        title: this.$t('views.auth.signin') + this.$t('global.siteName'),
        email: this.$t('views.auth.email'),
        password: this.$t('views.auth.password'),
        cancel: this.$t('global.cancel'),
        submit: this.$t('global.submit'),
      },
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
      const [logged_in, user] = await authHttpService.logIn(
        this.email,
        this.password
      );

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
