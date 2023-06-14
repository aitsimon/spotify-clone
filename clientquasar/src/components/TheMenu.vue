<script setup>
import TheMenuButton from "./TheMenuButton.vue";
import TheSearchButton from "./TheSearchButton.vue";
defineProps({
  deferredPrompt: Object,
});
</script>

<template>
  <div
    class="full-width bg-secondary row justify-between items-center flex-nowrap q-px-xs"
  >
    <TheMenuButton :deferred-prompt="deferredPrompt" />
    <TheSearchButton />
  </div>
</template>

<style scoped></style>
