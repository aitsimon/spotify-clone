<script setup>
import PlayerDetails from "src/components/PlayerDetails.vue";
import { useSpotifyStore } from "src/stores/playerService";
const spotifyStore = useSpotifyStore();
</script>
<template>
  <template v-if="spotifyStore.current_track?.id">
    <Suspense>
      <PlayerDetails />
      <template #fallback>
        <h1>loading...</h1>
      </template>
    </Suspense>
  </template>
  <template v-else>
    <h1>no hay nada</h1>
  </template>
</template>
<style></style>
