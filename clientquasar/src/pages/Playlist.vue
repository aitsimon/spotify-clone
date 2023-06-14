<script setup>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import { useAuxApiService } from "src/stores/auxApiService";
import BaseLikeBtn from "src/components/BaseLikeBtn.vue";
import BasePlayBtn from "src/components/BasePlayBtn.vue";
import BaseBackArrow from "src/components/BaseBackArrow.vue";
const $q = useQuasar();
const route = useRoute();
const router = useRouter();
const { getPlaylist, getUserProfile, checkUserSavedTracks } =
  useAuxApiService();
let playListItem = ref({});
let owner = ref({});
let arrayIds = ref([]);
let checkedIds = ref([]);
onMounted(async () => {
  playListItem.value = await getPlaylist(route.params.id);
  owner.value = await getUserProfile(playListItem.value.owner.id);
  playListItem.value.tracks.items.forEach((element) => {
    arrayIds.value.push(element.track.id);
  });
  checkedIds.value = await checkUserSavedTracks(arrayIds.value);
});
</script>

<template>
  <q-page class="full-width">
    <div v-if="playListItem.images" class="column no-wrap">
      <BaseBackArrow />
      <div class="column no-wrap q-mx-md q-mx-md-xl">
        <div class="row flex-center">
          <img
            class="col-9 col-sm-7 col-md-3 rounded-borders"
            :src="playListItem.images[0].url"
            style="object-fit: contain"
          />
        </div>
        <div class="column flex-start nowrap col-12 q-mb-sm q-mt-md">
          <h1 class="text-h3 q-mb-xs text-capitalize">
            {{ playListItem.name }}
          </h1>
          <span
            v-if="playListItem.description.charAt(0) !== '<'"
            class="text-info playlistDescription"
            >{{ playListItem.description }}</span
          >
          <q-chip
            flat
            dense
            clickable
            class="ellipsis row flex-center q-ma-none q-my-xs"
            style="width: fit-content"
          >
            <q-avatar>
              <template v-if="owner.images">
                <img v-if="owner.images[0]?.url" :src="owner.images[0]?.url" />
                <q-icon v-else size="sm" name="person" class="bg-info" />
              </template>
            </q-avatar>
            <span class="q-py-sm q-pl-md-sm text-subtitle1">{{
              owner.display_name
            }}</span>
          </q-chip>
          <q-chip
            flat
            dense
            class="secondary row flex-center q-ma-none q-my-xs"
            style="width: fit-content"
          >
            <q-avatar>
              <q-icon size="sm" color="info" name="language" />
            </q-avatar>
            <span class="text-info q-pl-md-sm playlistDescription">
              {{ playListItem.followers.total }} likes</span
            >
          </q-chip>
        </div>
        <div class="row justify-between items-center">
          <BaseLikeBtn
            v-if="playListItem.id"
            :idItem="playListItem.id"
            :typeItem="'playlist'"
            :size="$q.screen.lt.md ? 'md' : 'lg'"
          />
          <BasePlayBtn
            v-if="playListItem.id"
            :input="playListItem.uri"
            type="playlist"
            :size="$q.screen.lt.md ? 'md' : 'lg'"
          />
        </div>
        <q-separator class="q-my-xl" size="1px" color="overallBGit" />
        <div class="listOfItems column col-12 no-wrap">
          <div
            class="track row items-center justify-between q-py-sm"
            v-for="track in playListItem.tracks.items"
          >
            <div
              class="col-9 row justify-between items-center"
              @click="router.push({ path: `/playing/${track.track.id}` })"
            >
              <q-img
                v-if="track.track.album.images[0]"
                class="col-3 trackCover"
                :src="track.track.album.images[0].url"
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
                <span class="songName ellipsis-2-lines">{{
                  track.track.name
                }}</span>
              </div>
            </div>
            <div class="col-2 heartBtnContainer">
              <Suspense>
                <BaseLikeBtn
                  v-if="checkedIds[track.track.id] !== undefined"
                  :isLiked="checkedIds[track.track.id]"
                  :idItem="track.track.id"
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
