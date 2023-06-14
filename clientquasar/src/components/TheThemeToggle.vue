<script setup>
import { ref } from "vue";
let darkModeOn = ref(false);
</script>

<template>
  <q-toggle
    checked-icon="light_mode"
    unchecked-icon="dark_mode"
    color="accent"
    size="xl"
    v-model="darkModeOn"
    :dark="$q.dark.isActive"
    @update:model-value="$q.dark.toggle()"
    class="text-h4"
  >
    Light mode
  </q-toggle>
</template>

<style scoped></style>
