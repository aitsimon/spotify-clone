<script setup>
import { useRouter } from "vue-router";
import BaseLikeBtn from "src/components/BaseLikeBtn.vue";
import PlayerDetails from "src/components/PlayerDetails.vue";
import BaseDownArrow from "src/components/BaseDownArrow.vue";
import { useSpotifyStore } from "src/stores/playerService";
const router = useRouter();
const spotifyStore = useSpotifyStore();
</script>

<template>
  <q-page class="full-width">
    <div class="row flex-center">
      <template v-if="spotifyStore.current_track.album">
        <BaseDownArrow />
        <div class="row col-12 col-lg-8 flex-center q-mt-lg q-py-lg">
          <div class="row flex-center albumcoverContainer col-12">
            <div class="row flex-center" style="object-fit: contain">
              <img
                class="col-9 col-md-11"
                :src="spotifyStore.current_track.album?.images[0].url"
                style="object-fit: contain"
              />
            </div>
          </div>
          <div class="col-12 row flex-center q-mt-md">
            <div class="col-10 row justify-between">
              <div class="col-9 column">
                <span>{{ spotifyStore.current_track.name }}</span>
                <div v-if="spotifyStore.current_track.artists">
                  <span class="text-info">
                    {{ spotifyStore.current_track?.artists[0]?.name }}
                    <span
                      v-for="artist in spotifyStore.current_track.artists.splice(
                        1
                      )"
                      >{{ `, ${artist.name}` }}</span
                    >
                  </span>
                </div>
              </div>
              <div>
                <BaseLikeBtn
                  v-if="spotifyStore.current_track.id"
                  :typeItem="'tracks'"
                  :idItem="spotifyStore.current_track.id"
                />
              </div>
            </div>
            <div class="row col-10 q-mt-lg">
              <Suspense>
                <PlayerDetails />
                <template #fallback>
                  <q-spinner color="primary" :thickness="5" size="16px" />
                </template>
              </Suspense>
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

<style scoped></style>
