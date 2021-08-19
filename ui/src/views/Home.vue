<template>
  <div :id="id">
    <v-row>
      <v-col>
        <v-container>
          <h1>{{ appName }}</h1>
        </v-container>
      </v-col>
    </v-row>
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
