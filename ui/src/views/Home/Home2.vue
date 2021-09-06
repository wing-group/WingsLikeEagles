<template>
  <div :id="id">
    <v-container>
      <h1 class="text-center">{{ appName }}</h1>
      <p class="text-center">Test Page 2 for header &amp; store testing...</p>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      appName: this.$t('global.site_name'),
      id: 'home',
    };
  },
});
</script>

<style lang="scss" scoped></style>
