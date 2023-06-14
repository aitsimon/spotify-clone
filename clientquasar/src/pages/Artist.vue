<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuxApiService } from "src/stores/auxApiService";
import BasePlayBtn from "src/components/BasePlayBtn.vue";
import BaseLikeBtn from "src/components/BaseLikeBtn.vue";
import BaseBackArrow from "src/components/BaseBackArrow.vue";
const route = useRoute();
const router = useRouter();
const { getArtist, getTopArtistTracks } = useAuxApiService();
let artistItem = ref({});
let topArtistTracks = ref([]);
onMounted(async () => {
  artistItem.value = await getArtist(route.params.id);
  topArtistTracks.value = await getTopArtistTracks(route.params.id);
});
</script>

<template>
  <div v-if="artistItem.images">
    <div class="column">
      <BaseBackArrow />
      <div class="column justify-end items-start">
        <div
          :style="`background-image: url(${artistItem.images[0].url}); height: 30rem;`"
          class="artistNameContainer full-width rounded-borders"
        >
          <div
            class="row justify-start text-accent full-height items-end text-h3 self-end"
          >
            <h1 class="col-12 text-h3 q-my-none artistName">
              {{ artistItem.name }}
            </h1>
          </div>
        </div>
      </div>
      <div class="row justify-between items-center q-mt-xl">
        <div class="col-8 text-info column">
          <span class="text-subtitle1"
            >{{ artistItem.followers.total }} Monthly Listeners</span
          >
          <span class="text-subtitle1"
            >Genres:
            <span v-for="genre in artistItem.genres" class="text-capitalize">{{
              `${genre} `
            }}</span>
          </span>
        </div>
        <div class="col-4z row flex-center">
          <BasePlayBtn
            v-if="artistItem.id"
            :input="artistItem.uri"
            type="artists"
            :size="$q.screen.lt.md ? 'md' : 'lg'"
          />
          <base-like-btn
            :idItem="artistItem.id"
            :typeItem="'artists'"
            :size="$q.screen.lt.md ? 'md' : 'lg'"
          />
        </div>
      </div>
      <q-separator class="q-my-xl" size="1px" color="overallBGit" />
      <div class="column">
        <div
          class="track row items-center justify-between q-py-sm"
          v-for="track in topArtistTracks.tracks"
        >
          <div
            class="col-9 row justify-around items-center"
            @click="router.push({ path: `/playing/${track.id}` })"
          >
            <q-img
              v-if="track.album.images[0]"
              class="col-3"
              :src="track.album.images[0].url"
              :ratio="1"
              fit="contain"
              width="5rem"
              spinner-color="primary"
              spinner-size="82px"
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
          <div class="col-2 heartBtnContainer row justify-end">
            <Suspense>
              <BaseLikeBtn
                v-if="track.id !== undefined"
                :idItem="track.id"
                :typeItem="'tracks'"
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
  <template v-else>
    <q-spinner-rings color="secondary" size="3rem" :thickness="3" />
  </template>
</template>

<style scoped>
.artistNameContainer {
  height: 70vw;
  background-size: cover;
  background-repeat: no-repeat;
}
.artistName {
  background-color: rgba(0, 0, 0, 0.288);
  padding: 7vw 2vw 1vh 2vw;
  box-shadow: rgba(0, 0, 0, 0.288) 0px 0px 7vw 0px;
}
.track {
  border: 1px;
  width: 90vw;
  cursor: pointer;
}
.songName {
  font-size: larger;
}
@media screen and (min-width: 1000px) {
  .songName {
    font-size: x-large;
  }
}
.artistNameContainer {
  background-position: center;
  background-size: cover;
}
</style>
