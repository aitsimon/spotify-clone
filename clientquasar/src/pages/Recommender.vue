<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted, computed } from "vue";
import { useFetchStore } from "../stores/fetchService.js";
import { useAuxApiService } from "src/stores/auxApiService";
import TheSearchFilters from "./TheSearchFilters.vue";
import { useRouter } from "vue-router";
const $q = useQuasar();
const router = useRouter();
const fetchStore = useFetchStore();
const auxApiService = useAuxApiService();
let top10Artists = ref([]);
let top10Tracks = ref([]);
let recommendations = ref([]);
onMounted(async () => {
  top10Artists.value = fetchStore.userTopArtists.items.slice(0, 10);
  top10Tracks.value = fetchStore.userTopContent.items.slice(0, 10);
  $q.dialog({
    title: "Instructions",
    message:
      "Create a playlist based on your favorite artists, tracks and genres. Choose at least one of each between the given suggestions or search for your own.",
    persistent: true,
    color: "accent",
  })
    .onOk(() => {})
    .onCancel(() => {})
    .onDismiss(() => {});
});
let selectedItems = ref([]);
let search = ref("");
let searched = computed(() => {
  return search.value?.length > 0 ? true : false;
});
let validSeeds = computed(() => {
  let seedArtists = [];
  let seedTracks = [];
  let seedGenres = [];
  if (selectedItems.value.length > 0) {
    selectedItems.value.forEach((item) => {
      if (typeof item === "string") {
        seedGenres.push(item);
      } else if (item.type === "track") {
        seedTracks.push(item.id);
      } else if (item.type === "artist") {
        seedArtists.push(item.id);
        if (fetchStore.avaibleGenreSeeds.genres.includes(item.genres[0])) {
          seedTracks.push(item.genres[0]);
        }
      } else if (item.type === "album") {
        item.artists.forEach((artist) => {
          if (!seedArtists.includes(artist.id)) seedArtists.push(artist.id);
        });
      } else {
        console.log("item.type", item.type);
      }
    });
    if (seedArtists.length > 5) {
      seedArtists = seedArtists.slice(0, 5);
    }
    if (seedTracks.length > 5) {
      seedTracks = seedTracks.slice(0, 5);
    }
    if (seedGenres.length > 5) {
      seedGenres = seedGenres.slice(0, 5);
    }
    if (
      seedGenres.length > 0 &&
      seedTracks.length > 0 &&
      seedArtists.length > 0
    ) {
      return {
        seedArtists: seedArtists.join(","),
        seedTracks: seedTracks.join(","),
        seedGenres: seedGenres.join(","),
      };
    } else {
      return false;
    }
  } else {
    return false;
  }
});
function handlePrompt(valid) {
  if (valid) {
    $q.dialog({
      title: "Leave this page?",
      message:
        "Do you want to see the playlist that has been created based on your recommendations?",
      cancel: true,
      persistent: true,
    })
      .onOk(() => {
        router.push({ name: "RecommendedPlaylist" });
      })
      .onCancel(() => {})
      .onDismiss(() => {});
  } else {
    $q.dialog({
      title: "Error",
      message: "Something went wrong, please try again.",
    })
      .onOk(() => {})
      .onCancel(() => {})
      .onDismiss(() => {});
  }
}
async function handleRecommendations() {
  if (validSeeds.value) {
    let response = await auxApiService.getRecommendations(validSeeds.value);
    handlePrompt(true);
  } else {
    console.log("invalid seeds");
  }
}
</script>

<template>
  <q-page>
    <h1 class="text-h4">Create a playlist based on your recommendations</h1>
    <div class="row items-center justify-start q-py-md">
      <h2 class="text-h5 col-12">Check our recommendations</h2>

      <div class="row justify-start items-center q-my-sm">
        <div class="row">
          <h3 class="text-h6 col-12">Artists Seeds</h3>
          <q-chip
            v-for="(item, index) in top10Artists"
            :key="index"
            clickable
            :color="selectedItems.includes(item) ? 'accent' : 'secondary'"
            text-color="primary"
            :icon="selectedItems.includes(item) ? 'check' : 'person_search'"
            size="md"
            dense
            :id="item.id"
            @click="
              selectedItems.includes(item)
                ? selectedItems.splice(selectedItems.indexOf(item), 1)
                : selectedItems.push(item)
            "
          >
            {{ item.name }}
          </q-chip>
        </div>
      </div>
      <div class="row justify-start items-center q-my-sm">
        <h3 class="text-h6 col-12">Track Seeds</h3>
        <div class="row">
          <q-chip
            v-for="(item, index) in top10Tracks"
            :key="index"
            clickable
            :color="selectedItems.includes(item) ? 'accent' : 'secondary'"
            text-color="primary"
            :icon="selectedItems.includes(item) ? 'check' : 'music_note'"
            size="md"
            dense
            :id="item.id"
            @click="
              selectedItems.includes(item)
                ? selectedItems.splice(selectedItems.indexOf(item), 1)
                : selectedItems.push(item)
            "
          >
            {{ item.name }}
          </q-chip>
        </div>
      </div>
      <div class="column full-width items-start justify-center no-wrap">
        <h3 class="text-h6 col-12">Genre Seeds</h3>
        <q-scroll-area>
          <q-chip
            v-for="(genre, index) in fetchStore.avaibleGenreSeeds.genres"
            :key="genre"
            clickable
            :color="selectedItems.includes(genre) ? 'accent' : 'secondary'"
            text-color="primary"
            :icon="selectedItems.includes(genre) ? 'check' : 'graphic_eq'"
            size="md"
            dense
            :id="genre"
            @click="
              selectedItems.includes(genre)
                ? selectedItems.splice(selectedItems.indexOf(genre), 1)
                : selectedItems.push(genre)
            "
          >
            {{ genre }}
          </q-chip>
        </q-scroll-area>
      </div>
    </div>
    <div>
      <h3 class="text-h5">Or search yourself</h3>
      <div class="full-width column">
        <TheSearchFilters
          @click="
            searched
              ? fetchStore.searchItem(search, fetchStore.searchFilters)
              : ''
          "
        />
        <q-input
          clearable
          filled
          label="What do you want to listen to?"
          v-model="search"
          @keyup="fetchStore.searchItem(search, fetchStore.searchFilters)"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="q-mt-sm" v-if="!searched">
        <span>Nothing Searched</span>
      </div>
      <div
        v-else
        v-for="(value, key, index) in fetchStore.founditems"
        :key="index"
      >
        <h4 class="text-capitalize text-subtitle1">{{ key }}</h4>
        <q-chip
          clickable
          :color="selectedItems.includes(item) ? 'accent' : 'secondary'"
          text-color="primary"
          :icon="
            selectedItems.includes(item)
              ? 'check'
              : item.type === 'artist'
              ? 'person_search'
              : item.type === 'track'
              ? 'music_note'
              : item.type === 'album'
              ? 'album'
              : 'queue_music'
          "
          size="md"
          dense
          :id="item.id"
          v-for="item in value.items"
          @click="
            selectedItems.includes(item)
              ? selectedItems.splice(selectedItems.indexOf(item), 1)
              : selectedItems.push(item)
          "
          class="text-capitalize"
        >
          {{ item.name }}
        </q-chip>
      </div>
    </div>
    <div class="row flex-center q-my-md q-my-lg-lg">
      <q-btn
        :disable="!validSeeds ? true : false"
        color="accent"
        @click="handleRecommendations"
        icon="auto_mode"
        label="Generate a playlist"
      />
    </div>
  </q-page>
</template>

<style scoped>
.q-scrollarea {
  width: 100%;
  height: 30vh;
}
</style>
