<template>
  <v-row dense>
    <v-col class="text-right">&copy; {{ copyrightInfo }}</v-col>
  </v-row>
</template>

<script>
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
