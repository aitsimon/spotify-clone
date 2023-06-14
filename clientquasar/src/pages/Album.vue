<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuxApiService } from "src/stores/auxApiService";
import BaseLikeBtn from "src/components/BaseLikeBtn.vue";
import BasePlayBtn from "src/components/BasePlayBtn.vue";
import BaseBackArrow from "src/components/BaseBackArrow.vue";
const route = useRoute();
const router = useRouter();
const { getAlbum, checkUserSavedTracks } = useAuxApiService();
let albumItem = ref({});
let arrayIds = ref([]);
let checkedIds = ref([]);
onMounted(async () => {
  albumItem.value = await getAlbum(route.params.id);
  albumItem.value.tracks.items.forEach((element) => {
    arrayIds.value.push(element.id);
  });
  checkedIds.value = await checkUserSavedTracks(arrayIds.value);
});
</script>
<template>
  <q-page class="full-width">
    <div v-if="albumItem.images" class="q-px-xs-sm column no-wrap">
      <BaseBackArrow />
      <div class="column no-wrap q-mx-md-xl">
        <div class="row flex-center">
          <img
            class="col-9 col-sm-7 col-md-3 rounded-borders"
            :src="albumItem.images[0].url"
            style="object-fit: contain"
          />
        </div>
        <div class="column flex-start nowrap col-12 q-mb-sm q-mt-lg">
          <h1 class="text-h3 q-mb-xs text-capitalize">
            {{ albumItem.name }}
          </h1>
          <q-chip
            flat
            class="secondary row flex-center q-ma-none q-my-xs"
            style="width: fit-content"
          >
            <q-avatar>
              <q-icon size="sm" color="info" name="event" />
            </q-avatar>
            <span class="text-info q-pl-md-sm playlistDescription">
              Release Date: {{ albumItem.release_date }}</span
            >
          </q-chip>
        </div>
        <div class="row justify-between items-center">
          <BaseLikeBtn
            v-if="albumItem.id"
            :idItem="albumItem.id"
            :typeItem="'albums'"
            :size="$q.screen.lt.md ? 'md' : 'lg'"
          />
          <BasePlayBtn
            v-if="albumItem.id"
            :input="albumItem.uri"
            type="albums"
            :size="$q.screen.lt.md ? 'md' : 'lg'"
          />
        </div>
        <q-separator class="q-my-xl" size="1px" color="overallBGit" />
        <div class="listOfItems column col-12 no-wrap">
          <div
            class="track row items-center justify-between justify-md-around q-py-sm"
            v-for="track in albumItem.tracks.items"
          >
            <div
              class="col-9 row justify-between items-center"
              @click="router.push({ path: `/playing/${track.id}` })"
            >
              <div class="column col-8">
                <span class="songName ellipsis-2-lines">{{ track.name }}</span>
              </div>
            </div>
            <div class="col-2 heartBtnContainer row items-center justify-end">
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
.track {
  border: 1px;
  border-radius: 10px;
  width: 90vw;
  cursor: pointer;
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
