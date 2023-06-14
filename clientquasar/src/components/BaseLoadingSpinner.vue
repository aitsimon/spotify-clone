<script setup>
defineProps({
  color: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "2em",
  },
  position: {
    type: String,
    default: "absolute-center",
  },
});
</script>

<template>
  <q-spinner-tail :color="color" :size="size" :class="position" />
</template>

<style scoped></style>
