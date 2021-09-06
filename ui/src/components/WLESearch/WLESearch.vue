<template>
  <div class="nav-search" :class="{ full: expand }">
    <v-text-field
      v-model="searchText"
      :placeholder="this.$t('components.search.placeholder')"
      dense
      solo
      single-line
    >
      <template v-slot:append>
        <v-icon @click="search"> fa-search </v-icon>
      </template>
    </v-text-field>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'WleSearch',
  props: {
    expand: {
      default: false,
      required: false,
    },
  },
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

<style scoped>
.nav-search {
  height: 36px; /* aligns with veutify sizes */
  display: inline-block;
  margin-right: 8px;
  position: relative;
  top: -1px;
}

.full {
  margin-right: 0;
}
</style>
