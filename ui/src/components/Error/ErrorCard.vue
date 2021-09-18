<template>
  <div class="error-card">
    <v-container v-if="show" fluid fill-height>
      <v-row align="center" justify="center">
        <v-card :width="this.$vuetify.breakpoint.thresholds.xs">
          <v-container>
            <h1>{{ title }}</h1>
            <p v-if="pageDetails">{{ pageDetails }}</p>
            <hr />
            <div class="ma-4 mb-12">
              <p>{{ message }}</p>
            </div>
            <v-btn v-if="allowRetry" @click="retry" color="primary">{{
              retryMsg
            }}</v-btn>
            <v-btn v-if="allowBack" @click="back" color="primary">{{
              backMsg
            }}</v-btn>
          </v-container>
        </v-card>
      </v-row>
    </v-container>
    <slot v-else />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ErrorCard',
  props: {
    /**
     * @param title title card error name
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * @param details detailed error message for implementation
     */
    pageDetails: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * @param allowRetry shows retry button, hiding card
     */
    allowRetry: {
      type: Boolean,
      required: false,
      default: true,
    },
    /**
     * @param allowBack shows back button, routing back 1 page
     */
    allowBack: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      show: false,
      message: '',
      retryMsg: this.$t('components.error.retry'),
      backMsg: this.$t('components.error.back'),
    };
  },
  methods: {
    retry() {
      this.show = false;
    },
    back() {
      this.$router.go(-1);
    },
  },
  errorCaptured(err) {
    this.message = `Error: ${err.message}`;
    this.show = true;

    // catch error here
    return false;
  },
});
</script>

<style scoped>
.error-card {
  height: 100%;
  width: 100%;
}
</style>
