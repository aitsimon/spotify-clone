<script setup>
import { useQuasar } from "quasar";
import { onMounted } from "vue";
import { useSpotifyStore } from "../stores/playerService.js";
import { useRouter } from "vue-router";
import BaseLikeBtn from "src/components/BaseLikeBtn.vue";
import BasePlayBtn from "./BasePlayBtn.vue";
const $q = useQuasar();
const router = useRouter();
const props = defineProps({
  token: {
    type: String,
    default: "",
  },
});
const store = useSpotifyStore();
const script = document.createElement("script");
script.src = "https://sdk.scdn.co/spotify-player.js";
script.async = true;

document.body.appendChild(script);

onMounted(() => {
  window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new window.Spotify.Player({
      name: "Web Playback SDK",
      getOAuthToken: (cb) => {
        cb(
          props.token ||
            JSON.parse(sessionStorage.getItem("tokens")).access_token
        );
      },
      volume: 0.5,
    });

    store.setPlayer(player);

    store.player.addListener("ready", ({ device_id }) => {
      console.log("Ready with Device ID", device_id);
      store.changeDevice(device_id);
    });

    store.player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });

    store.player.addListener("player_state_changed", (state) => {
      if (!state) {
        return;
      }

      store.setTrack(state.track_window.current_track);
      store.setPaused(state.paused);

      store.player.getCurrentState().then((state) => {
        !state ? store.setActive(false) : store.setActive(true);
      });
    });
    store.player.addListener("initialization_error", ({ message }) => {
      $q.notify({
        message: message,
        color: "negative",
        position: "top",
        icon: "report_problem",
      });
    });
    store.player.addListener("authentication_error", ({ message }) => {
      $q.notify({
        message: message,
        color: "negative",
        position: "top",
        icon: "report_problem",
      });
    });
    store.player.addListener("account_error", ({ message }) => {
      $q.notify({
        message: message,
        color: "negative",
        position: "top",
        icon: "report_problem",
      });
    });
    store.player.addListener("playback_error", ({ message }) => {
      $q.notify({
        message: message,
        color: "negative",
        position: "top",
        icon: "report_problem",
      });
    });
    store.player.addListener("autoplay_failed", ({ message }) => {
      $q.notify({
        message: message,
        color: "negative",
        position: "top",
        icon: "report_problem",
      });
    });
    store.player.connect();
  };
});
</script>
<template>
  <template v-if="!store.is_active">
    <div
      class="row col-12 justify-around items-center q-pa-sm q-ma-xs bg-secondaryLighter rounded-borders full-height"
    >
      <q-spinner-audio color="white" size="3rem" :thickness="3" />
    </div>
  </template>
  <template v-else>
    <div
      class="row col-12 justify-around items-center q-pa-sm q-ma-xs bg-secondaryLighter rounded-borders full-height"
    >
      <q-img
        :src="store.current_track?.album.images[0].url"
        id="trackImg"
        spinner-color="primary"
        spinner-size="100%"
        fit="contain"
        ratio="1"
        class="col-2 flex-center now-playing__cover full-height"
        img-class="rounded-borders"
        @click="
          router.push({
            name: 'NowPlaying',
          })
        "
      />
      <div
        class="informacion row col-9 now-playing__side justify-around items-center no-wrap"
      >
        <div
          class="column col-7 no-wrap"
          @click="
            router.push({
              name: 'NowPlaying',
            })
          "
        >
          <div class="infoSong now-playing__name ellipsis">
            {{ store.current_track?.name }}
          </div>
          <div class="infoSong now-playing__artist text-info">
            {{ store.current_track?.artists[0].name }}
          </div>
        </div>

        <div class="botones row flex-center col-5">
          <base-like-btn
            v-if="store.current_track?.id"
            :type-item="'tracks'"
            :idItem="store.current_track?.id"
            :size="$q.screen.lt.md ? 'md' : 'lg'"
            class="q-mr-sm-xs q-mr-md-md"
          />
          <q-btn
            color="white"
            @click="store.player.togglePlay()"
            :size="$q.screen.lt.md ? 'md' : 'lg'"
            :icon="store.is_paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'"
            flat
            round
          />
        </div>
      </div>
    </div>
  </template>
</template>
<style scoped>
.infoSong {
  font-size: large;
}
@media screen and (min-width: 1000px) {
  .infoSong {
    font-size: largere;
  }
}
</style>
