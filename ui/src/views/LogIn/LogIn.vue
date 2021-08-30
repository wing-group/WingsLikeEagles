<template>
  <v-container :id="id" fill-height fluid>
    <v-row align="center" justify="center">
      <v-card :width="cardWidth">
        <v-container>
          <!-- TODO use i18n -->
          <h1>Log In to WingsLikeEagles</h1>
          <v-text-field outlined label="Username" />
          <v-text-field outlined label="Password" type="password" />
          <v-row>
            <v-col>
              <v-btn @click="goBack">{{ 'Cancel' }}</v-btn>
            </v-col>
            <v-col align="right">
              <v-btn color="primary">{{ 'Log In' }}</v-btn>
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
  name: 'LogIn',
  data() {
    return {
      id: 'login',
      w: this.$vuetify.breakpoint.xs,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
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
