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
              :rules="[required, passwordVal]"
            />
            <v-text-field
              outlined
              :label="text.passwordConf"
              type="password"
              v-model="passwordConf"
              :rules="[required, passwordConfVal]"
            />
            <v-text-field
              outlined
              :label="text.displayName"
              v-model="displayName"
              :rules="[]"
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
  name: 'Register',
  components: {
    ErrorCard,
  },
  data() {
    return {
      id: 'register',
      email: '',
      password: '',
      passwordConf: '',
      displayName: '',
      loading: false,
      registerError: false,
      text: {
        title: this.$t('views.auth.signup') + this.$t('global.siteName'),
        email: this.$t('views.auth.email'),
        password: this.$t('views.auth.password'),
        passwordConf: this.$t('views.auth.passwordConf'),
        displayName: this.$t('views.auth.displayName'),
        cancel: this.$t('global.cancel'),
        submit: this.$t('global.submit'),
        required: this.$t('views.auth.required'),
        passwordLength: this.$t('views.auth.passwordLength'),
        passwordMatch: this.$t('views.auth.passwordMatch'),
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    passwordVal(input) {
      if (input.length < 8) {
        return this.text.passwordLength;
      }
      return true;
    },
    passwordConfVal(input) {
      if (input !== this.password) {
        return this.text.passwordMatch;
      }
      return true;
    },
    required(input) {
      return !!input || this.text.required;
    },
    async submit() {
      this.loading = true;
      const logged_in = await authHttpService.register(
        this.email,
        this.password,
        this.passwordConf,
        this.displayName
      );

      if (logged_in) {
        this.goBack();
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
