<script setup>
import { ref } from "vue";
import { useFetchStore } from "../stores/fetchService.js";
let fetchStore = useFetchStore();
let search = ref("");
</script>

<template>
  <q-input
    clearable
    filled
    label="What do you want to listen to?"
    v-model.trim="search"
    @keyup="fetchStore.searchItem(search, fetchStore.searchFilters || 'track')"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<style></style>
