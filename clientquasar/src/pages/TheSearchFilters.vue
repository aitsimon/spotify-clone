<script setup>
import { reactive, computed } from "vue";
import { useFetchStore } from "../stores/fetchService.js";
const fetchStore = useFetchStore();
const filters = reactive({
  track: true,
  artist: false,
  album: false,
  playlist: false,
});

let selection = computed(() => {
  fetchStore.searchFilters = Object.keys(filters)
    .filter((type) => filters[type] === true)
    .join(",");
  return Object.keys(filters)
    .filter((type) => filters[type] === true)
    .join(", ");
});
</script>

<template>
  <div class="q-py-md">
    <div class="q-gutter-xs">
      <q-chip
        v-model:selected="filters.track"
        color="secondary"
        text-color="primary"
        icon="music_note"
        size="md"
        dense
      >
        Tracks
      </q-chip>
      <q-chip
        v-model:selected="filters.playlist"
        color="secondary"
        text-color="primary"
        icon="queue_music"
        size="md"
        dense
      >
        Playlists
      </q-chip>
      <q-chip
        v-model:selected="filters.artist"
        color="secondary"
        text-color="primary"
        icon="person_search"
        size="md"
        dense
      >
        Artists
      </q-chip>
      <q-chip
        v-model:selected="filters.album"
        color="secondary"
        text-color="primary"
        icon="album"
        size="md"
        dense
      >
        Albums
      </q-chip>
    </div>

    <div class="q-mt-sm">Your pick: {{ selection }}</div>
  </div>
</template>
