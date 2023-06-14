<script setup>
import { useRouter } from "vue-router";
import { defineProps, ref, onMounted, computed } from "vue";
defineProps({
  text: String,
  icon: String,
});
const router = useRouter();
</script>

<template>
  <q-chip square color="secondary" size="xl" clickable class="q-mb-sm">
    <q-avatar>
      <img :src="icon" alt="item image cover" />
    </q-avatar>
    <div class="ellipsis songTitle">
      {{ text }}
    </div>
  </q-chip>
</template>

<style scoped>
.q-chip {
  width: 90vw;
}
.songTitle {
  font-size: medium;
}
@media screen and (min-width: 600px) {
  .q-chip {
    width: 45vw;
  }
}
@media screen and (min-width: 900px) {
  .q-chip {
    width: 30vw;
  }
  .songTitle {
    font-size: large;
  }
}
</style>
