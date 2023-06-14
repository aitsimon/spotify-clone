<script setup>
import BaseHomeCarousel from "@/components/BaseHomeCarousel.vue";
import { useFetchStore } from "@/stores/fetchService.js";
const fetchStore = useFetchStore();
defineProps({
  items: Array,
  section_title: String,
  loading: Boolean,
});
</script>

<template>
  <div v-if="loading"></div>
  <div v-else class="column justify-start">
    <span class="text-h4 q-mb-sm">{{ section_title }}</span>
    <BaseHomeCarousel :items="items" />
  </div>
</template>

<style></style>
