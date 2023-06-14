<script setup>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { useAuxApiService } from "src/stores/auxApiService";
import { useFetchStore } from "src/stores/fetchService";
import BaseLikeBtn from "src/components/BaseLikeBtn.vue";
import BaseBackArrow from "src/components/BaseBackArrow.vue";
const $q = useQuasar();
let auxApiService = useAuxApiService();
let { userProfile } = useFetchStore();
const router = useRouter();
let playListItem = ref();
let arrayIds = ref([]);
let checkedIds = ref([]);
onMounted(async () => {
  playListItem.value = auxApiService.recommendations;
  playListItem.value.tracks.forEach((track) => {
    arrayIds.value.push(track.id);
  });
  checkedIds.value = await auxApiService.checkUserSavedTracks(arrayIds.value);
});
function handleCreatePrompt() {
  $q.dialog({
    title: "Create a new playlist",
    message: "Enter a name for the new playlist",
    prompt: {
      model: "",
      isValid: (val) => val.length > 0,
    },
    cancel: true,
    persistent: true,
  }).onOk(async (data) => {
    let playlist = await auxApiService.createPlaylist(data, userProfile.id);
    if (playlist) {
      let sanitazedTracks = [];
      playListItem.value.tracks.forEach((track) => {
        sanitazedTracks.push(track.uri);
      });
      auxApiService.addTracksToPlaylist(playlist.id, sanitazedTracks.join(","));
      $q.notify({
        message: "Playlist created",
        color: "positive",
        icon: "playlist_add_check",
      });
    }
  });
}
</script>

<template>
  <q-page class="full-width">
    <div v-if="playListItem" class="q-px-xs-xs column no-wrap">
      <BaseBackArrow />
      <div class="column no-wrap q-mx-md-xl">
        <div class="column flex-start nowrap col-12 q-my-sm">
          <h1 class="text-h3 q-mb-xs text-capitalize">Custom Playlist</h1>
          <span class="playlistDescription"
            >A playlist based on your selections. You can save it by clicking in
            the aside button</span
          >
        </div>
        <div class="row justify-between items-center q-mt-sm">
          <q-btn
            color="accent"
            icon="save"
            label="Create"
            :size="$q.screen.lt.md ? 'md' : 'lg'"
            @click="handleCreatePrompt"
          />
        </div>
        <q-separator class="q-my-xl" size="1px" color="overallBGit" />
        <div class="listOfItems column col-12 no-wrap">
          <div
            class="track row items-center justify-between q-py-sm"
            v-for="track in playListItem.tracks"
          >
            <div
              class="col-9 row justify-between items-center"
              @click="router.push({ path: `/playing/${track.track.id}` })"
            >
              <q-img
                v-if="track.album.images[0]"
                class="col-3 trackCover"
                :src="track.album.images[0].url"
                :ratio="1"
                fit="contain"
                spinner-color="primary"
                spinner-size="100%"
                img-class="q-mr-sm-xs"
              />
              <template v-else>
                <q-icon
                  tag="i"
                  name="map"
                  color="primary"
                  :left="false"
                  :right="false"
                  size="16px"
                />
              </template>
              <div class="column col-8">
                <span class="songName ellipsis-2-lines">{{ track.name }}</span>
              </div>
            </div>
            <div class="col-2 heartBtnContainer">
              <Suspense>
                <BaseLikeBtn
                  v-if="checkedIds[track.id] !== undefined"
                  :isLiked="checkedIds[track.id]"
                  :idItem="track.id"
                  :typeItem="'tracks'"
                  :size="$q.screen.lt.md ? 'md' : 'lg'"
                />
                <template #fallback>
                  <q-circular-progress
                    indeterminate
                    rounded
                    size="20px"
                    color="primary"
                    class="absolute-center"
                  />
                </template>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <q-circular-progress
        indeterminate
        rounded
        size="50px"
        color="primary"
        class="absolute-center"
      />
    </div>
  </q-page>
</template>

<style scoped>
.track {
  border: 1px;
  border-radius: 10px;
  width: 90vw;
  cursor: pointer;
}
.trackCover {
  max-height: 10rem;
}
.songName {
  font-size: larger;
}
.playlistDescription {
  font-size: large;
}

@media screen and (min-width: 1000px) {
  .songName {
    font-size: x-large;
  }
  .playlistDescription {
    font-size: larger;
  }
}
</style>
