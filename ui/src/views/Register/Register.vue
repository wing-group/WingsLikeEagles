<template>
  <error-card
    :allowRetry="false"
    :allowBack="true"
    :title="this.$t('components.error.title')"
  >
    <v-container :id="id" fill-height fluid color="secondary">
      <v-row align="center" justify="center">
        <v-card v-if="!loading" :width="cardWidth">
          <v-container v-if="!registerError">
            <!-- TODO use i18n -->
            <h1>Sign Up for WingsLikeEagles</h1>
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
              :rules="[required, passwordVal]"
            />
            <v-text-field
              outlined
              label="Confirm Password"
              type="password"
              v-model="passwordConf"
              :rules="[required, passwordConfVal]"
            />
            <v-text-field
              outlined
              label="Display Name"
              v-model="displayName"
              :rules="[]"
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
          <v-container v-else>
            <p>ERROR</p>
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
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    passwordVal(input) {
      if (input.length < 8) {
        return 'Password must be at least 8 characters';
      }
      return true;
    },
    passwordConfVal(input) {
      if (input !== this.password) {
        return 'Passwords do not match';
      }
      return true;
    },
    required(input) {
      return !!input || 'Required';
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
