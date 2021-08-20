<template>
  <div :id="id">
    <v-container>
      <h1 class="center">{{ appName }}</h1>
    </v-container>
    <hello-world />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      appName: this.$t('global.site_name'),
      id: 'home',
    };
  },
});
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
}
</style>
