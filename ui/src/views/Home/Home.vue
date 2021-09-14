<template>
  <div :id="id">
    <v-container>
      <h1 class="text-center">{{ appName }}</h1>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      appName: this.$t('global.siteName'),
      id: 'home',
    };
  },
});
</script>

<style lang="scss" scoped></style>
