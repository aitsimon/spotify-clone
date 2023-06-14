<script setup>
import { ref, onMounted } from "vue";
import { useFetchStore } from "../stores/fetchService.js";
import { useRouter } from "vue-router";
const router = useRouter();
const fetchStore = useFetchStore();
let offset = ref(0);
let savedPlaylists = ref([]);
onMounted(async () => {
  let response = await fetchStore.getUserPlaylists(offset.value);
  savedPlaylists.value = response;
});
async function handleInfiniteScroll(index, done) {
  let lengthItems = await savedPlaylists.value.items?.length;
  offset.value += 20;
  let response = await fetchStore.getUserPlaylists(offset.value);
  response.items.forEach((element) => {
    savedPlaylists.value?.items?.push(element);
  });
  done();
  if (lengthItems === savedPlaylists.value?.items?.length) {
    done(true);
  }
}
</script>

<template>
  <q-page class="full-width">
    <div id="mainContent" class="full-width column">
      <h1 class="text-h4">Your library</h1>
      <div class="column q-mt-lg">
        <q-chip
          square
          color="secondary"
          size="xl"
          clickable
          class="text-subtitle1"
          @click="router.push({ name: 'LikedSongs' })"
        >
          <q-avatar class="likedSongs" icon="favorite" text-color="white" />
          <div class="ellipsis text-subtitle1">Liked Songs</div>
        </q-chip>
      </div>
    </div>
    <q-infinite-scroll @load="handleInfiniteScroll" :offset="300">
      <template #default>
        <div class="column flex-nowrap">
          <q-chip
            square
            color="secondary"
            size="xl"
            clickable
            class="ellipsis"
            v-for="item in savedPlaylists.items"
            @click="router.push({ name: 'Playlist', params: { id: item.id } })"
          >
            <q-avatar>
              <q-img
                :src="item.images[0].url"
                :ratio="1"
                class="rounded-borders"
                spinner-color="primary"
              />
            </q-avatar>
            <div class="ellipsis text-subtitle1">
              {{ item.name }}
            </div>
          </q-chip>
        </div>
      </template>
      <template #loading>
        <div class="row flex-center">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>
</template>

<style scoped>
.likedSongs {
  background: rgb(61, 18, 186);
  background: linear-gradient(
    148deg,
    rgba(61, 18, 186, 1) 0%,
    rgba(99, 93, 158, 1) 53%,
    rgba(182, 218, 218, 1) 100%
  );
}
.q-chip {
  width: 90vw;
}
@media screen and (min-width: 700px) {
  .q-chip {
    width: 97vw;
  }
}
</style>
