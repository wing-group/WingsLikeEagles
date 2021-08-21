<template>
  <div>
    <v-text-field v-model="searchText" dense solo single-line>
      <template v-slot:append>
        <v-icon v-on:click="search"> fa-search </v-icon>
      </template>
    </v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'WleSearch',
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    search() {
      console.log(this.searchText);
    },
  },
});
</script>

<style></style>
