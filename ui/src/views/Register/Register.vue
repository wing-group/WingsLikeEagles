<template>
  <v-container :id="id" fill-height fluid color="secondary">
    <v-row align="center" justify="center">
      <v-card :width="cardWidth">
        <v-container>
          <!-- TODO use i18n -->
          <h1>Sign Up for WingsLikeEagles</h1>
          <v-text-field
            outlined
            label="Username"
            v-model="username"
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
          <v-row>
            <v-col>
              <v-btn @click="goBack">{{ 'Cancel' }}</v-btn>
            </v-col>
            <v-col align="right">
              <v-btn color="primary">{{ 'Submit' }}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Register',
  data() {
    return {
      id: 'register',
      username: '',
      password: '',
      passwordConf: '',
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
  },
  computed: {
    cardWidth() {
      return this.$vuetify.breakpoint.thresholds.xs;
    },
  },
});
</script>

<style></style>
