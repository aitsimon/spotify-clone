<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuxApiService } from "src/stores/auxApiService";
import BaseLikeBtn from "src/components/BaseLikeBtn.vue";
import BasePlayBtn from "src/components/BasePlayBtn.vue";
import BaseDownArrow from "src/components/BaseDownArrow.vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
const route = useRoute();
const router = useRouter();
const auxApiStore = useAuxApiService();
let trackItem = ref({});
onMounted(async () => {
  trackItem.value = await auxApiStore.getOneTrack(route.params.id);
});
</script>

<template>
  <q-page class="full-width">
    <div class="q-px-sm-md q-px-md-lg q-px-lg-xl">
      <template v-if="trackItem.album">
        <BaseDownArrow />
        <div class="q-pt-md column align-around">
          <div class="row flex-center albumcoverContainer">
            <div
              v-if="trackItem.album"
              class="row flex-center"
              style="object-fit: contain"
            >
              <img
                class="col-9 col-sm-7 col-md-6 rounded-borders"
                :src="trackItem.album?.images[0].url"
                style="object-fit: contain"
              />
            </div>
          </div>
          <div
            class="column q-mt-lg q-mx-md q-px-sm-md q-px-md-lg q-px-lg-xl rounded-borders songDetailsContainer"
            :style="`background-color: ${
              $q.dark.isActive ? '#222' : '#D0D3D4'
            };`"
          >
            <div class="row col-6 justify-between items-center">
              <div class="column songName col-8 q-pl-xs">
                <span>{{ trackItem.name }}</span>
                <div v-if="trackItem.artists">
                  <span class="text-info">
                    {{ trackItem?.artists[0]?.name }}
                    <span v-for="artist in trackItem.artists.splice(1)">{{
                      `, ${artist.name}`
                    }}</span>
                  </span>
                </div>
              </div>
              <div class="col-4 row flex-center">
                <BasePlayBtn
                  v-if="trackItem.id"
                  :type="'tracks'"
                  :input="trackItem.uri"
                  :size="$q.screen.lt.md ? 'md' : 'lg'"
                />
                <BaseLikeBtn
                  v-if="trackItem.id"
                  :typeItem="'tracks'"
                  :idItem="trackItem.id"
                  :size="$q.screen.lt.md ? 'md' : 'lg'"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <q-circular-progress
          indeterminate
          rounded
          size="50px"
          color="primary"
          class="absolute-center"
        />
      </template>
    </div>
  </q-page>
</template>

<style scoped>
.songName {
  font-size: medium;
  font-weight: 500;
}
.songDetailsContainer {
  border: 1px #eee;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  padding: 3vw 5px;
}
@media screen and (min-width: 1000px) {
  .songName {
    font-size: larger;
  }
}
</style>
