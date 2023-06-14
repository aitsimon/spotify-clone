<script setup>
import { onMounted, ref } from "vue";
import { useAuxApiService } from "src/stores/auxApiService";
import { useRouter } from "vue-router";
import BaseLikeBtn from "src/components/BaseLikeBtn.vue";
import BasePlayBtn from "src/components/BasePlayBtn.vue";
let savedTracks = ref([]);
let offset = ref(0);
const { getSavedTracks, loading } = useAuxApiService();
const router = useRouter();
let totalSongsLiked = ref(undefined);
onMounted(async () => {
  let response = await getSavedTracks(offset.value);
  savedTracks.value = response;
  totalSongsLiked.value = response.total;
});
const nextPage = async () => {
  offset.value += 20;
  savedTracks.value = await getSavedTracks(offset.value);
};
const prevPage = async () => {
  offset.value -= 20;
  savedTracks.value = await getSavedTracks(offset.value);
};
async function handleInfiniteScroll(index, done) {
  offset.value += 20;
  let response = await getSavedTracks(offset.value);
  response.items.forEach((element) => {
    savedTracks.value.items.push(element);
  });
  done();
}
</script>

<template>
  <q-page class="full-width">
    <div id="mainContent">
      <div v-if="savedTracks.items" class="q-px-xs-xs column no-wrap">
        <div class="row justify-start">
          <q-btn
            flat
            round
            color="primary"
            icon="arrow_back_ios_new"
            @click="router.go(-1)"
          />
        </div>
        <div class="column">
          <div class="row flex-center">
            <q-avatar
              class="likedSongs"
              size="40vw"
              icon="favorite"
              text-color="white"
              rounded
            />
          </div>
          <div class="q-mb-xs row flex-start items-center col-12">
            <h1 class="text-h5 col-8">Your Saved Tracks</h1>
            <div class="col-3 row justify-between items-center">
              <q-btn
                color="secondary"
                text-color="primary"
                unelevated
                icon="arrow_back_ios"
                @click="prevPage"
                size="sm"
                round
                :disable="offset < 20"
              />
              <q-btn
                color="secondary"
                text-color="primary"
                unelevated
                icon="arrow_forward_ios"
                @click="nextPage"
                size="sm"
                round
                :disable="offset >= totalSongsLiked - 20"
              />
            </div>
          </div>
          <q-infinite-scroll @load="handleInfiniteScroll" :offset="500">
            <template #default>
              <div class="listOfItems row col-12 q-mb-md">
                <div
                  class="track row items-center justify-around q-py-sm col-12"
                  v-for="item in savedTracks.items"
                >
                  <div
                    class="col-9 row justify-around items-center"
                    @click="router.push({ path: `/playing/${item.track.id}` })"
                  >
                    <q-img
                      v-if="item.track.album.images[0]"
                      class="col-3"
                      :src="item.track.album.images[0].url"
                      :ratio="1"
                      fit="contain"
                      spinner-color="primary"
                      spinner-size="82px"
                      img-class="rounded-borders"
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
                      <span class="text-subtitle1 ellipsis-2-lines">{{
                        item.track.name
                      }}</span>
                    </div>
                  </div>
                  <div class="col-2 heartBtnContainer row flex-center">
                    <Suspense>
                      <BaseLikeBtn
                        :isLiked="true"
                        :idItem="item.track.id"
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
            </template>
            <template #loading>
              <div class="row flex-center">
                <q-spinner-dots color="primary" size="40px" />
              </div>
            </template>
          </q-infinite-scroll>
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
    </div>
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
</style>
