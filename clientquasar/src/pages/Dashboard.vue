<script setup>
import { useTokenStore } from "../stores/tokens.js";
import { useFetchStore } from "../stores/fetchService.js";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import BaseTopChip from "src/components/BaseTopChip.vue";
import BaseHomeCarousel from "src/components/BaseHomeCarousel.vue";
import checkAuth from "../stores/errorLoginService.js";
import BaseLoadingSpinner from "src/components/BaseLoadingSpinner.vue";
import TheTopCarousel from "src/components/TheTopCarousel.vue";
const router = useRouter();
const fetchStore = useFetchStore();
onMounted(async () => {
  if (!fetchStore.inited) {
    await fetchStore.initStoreValues();
  }
});
</script>

<template>
  <q-page class="full-width">
    <div id="mainContent" class="full-width column">
      <div v-if="fetchStore.loading">
        <BaseLoadingSpinner />
      </div>
      <div v-else>
        <TheTopCarousel
          class="q-my-md"
          :items="fetchStore.userTopContent.items"
        />
        <div v-if="fetchStore.loading">
          <BaseLoadingSpinner />
        </div>
        <div v-else class="column justify-start">
          <h2>Recently Played Songs</h2>
          <BaseHomeCarousel
            :type="'recently-played-tracks'"
            :items="fetchStore.recentlyPlayed.items"
            class="q-mb-md"
          />
        </div>
        <div v-if="fetchStore.loading">
          <BaseLoadingSpinner />
        </div>
        <div v-else class="column justify-start">
          <h2>Your Popular Artists</h2>
          <BaseHomeCarousel
            :type="'artists'"
            :items="fetchStore.userTopArtists.items"
            class="q-mb-md"
          />
        </div>
        <div v-if="fetchStore.loading">
          <BaseLoadingSpinner />
        </div>
        <div v-else class="column justify-start">
          <h2>Playlists for right now</h2>
          <BaseHomeCarousel
            :type="'playlists'"
            :items="fetchStore.featuredPlaylists.playlists?.items"
            class="q-mb-md"
          />
        </div>
        <div v-if="fetchStore.loading">
          <BaseLoadingSpinner />
        </div>
        <div v-else class="column justify-start">
          <h2>New Releases</h2>
          <BaseHomeCarousel
            :type="'albums'"
            :items="fetchStore.newReleases.albums?.items"
            class="q-mb-md"
          />
        </div>
      </div>
      <div class="row items-center justify-between q-mb-sm">
        <h2 class="full-width">Your Top Content</h2>
        <BaseTopChip
          v-for="item in fetchStore.userTopContent.items"
          :key="item.id"
          :text="item.name"
          :icon="item.album.images[0].url"
          @click="router.push(`/playing/${item.id}`)"
        />
      </div>
    </div>
  </q-page>
</template>

<style scoped></style>
