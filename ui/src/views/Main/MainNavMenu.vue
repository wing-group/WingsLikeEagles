<template>
  <v-container>
    <v-row>
      <v-col>
        <div v-for="link in links" :key="link.display">{{ link.display }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'MainNavMenu',
  data() {
    return {
      links: [
        { display: 'Link 1' },
        { display: 'Link 2' },
        { display: 'Link 3' },
        { display: 'Link 4' },
      ],
    };
  },
});
</script>

<style></style>
