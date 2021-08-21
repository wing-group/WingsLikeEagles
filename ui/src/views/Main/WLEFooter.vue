<template>
  <v-container>
    <v-row> &copy; {{ copyrightInfo }} </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'WleFooter',
  data() {
    return {
      copyrightInfo: this.$t('footer.copyright'),
    };
  },
});
</script>
