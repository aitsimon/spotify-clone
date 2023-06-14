<script setup>
import { useSpotifyStore } from "src/stores/playerService";
import { onMounted, onUnmounted, ref } from "vue";
const spotifyStore = useSpotifyStore();
let progress = ref(0);
let currentSongTime = ref("");
26;

function millisecondsToTime(milli) {
  var minutes = Math.floor((milli / (60 * 1000)) % 60);
  var seconds = Math.floor((milli / 1000) % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}

const checkPercentageProgress = setInterval(async () => {
  let currentState = await spotifyStore.player.getCurrentState();
  if (currentState) {
    progress.value = currentState.position / currentState.duration;
  }
}, 100);
const checkSecondSong = setInterval(async () => {
  let currentState = await spotifyStore.player.getCurrentState();
  if (currentState) {
    currentSongTime.value = millisecondsToTime(currentState.position);
  }
}, 1000);
onMounted(() => {
  checkPercentageProgress;
});
onUnmounted(() => {
  clearInterval(checkPercentageProgress);
  clearInterval(checkSecondSong);
});
</script>

<template>
  <template v-if="spotifyStore.current_track?.id">
    <div class="row col-12 flex-center">
      <q-linear-progress
        animation-speed="500"
        rounded
        :value="progress"
        color="accent"
        class="q-mt-sm col-12"
        :label="currentSongTime"
      />
      <div class="col-12 row justify-between q-mt-xs">
        <span>{{ currentSongTime }}</span>
        <span>{{
          millisecondsToTime(spotifyStore.current_track.duration_ms)
        }}</span>
      </div>
      <div class="col-12 row justify-between items-center q-mt-sm">
        <q-btn
          color="primary"
          flat
          size="lg"
          icon="fa-solid fa-backward-step"
          class="col-4"
          @click="spotifyStore.player.previousTrack()"
        />
        <q-btn
          color="primary"
          size="lg"
          round
          :icon="spotifyStore.is_paused ? 'play_arrow' : 'pause'"
          text-color="secondary"
          @click="spotifyStore.player.togglePlay()"
        />
        <q-btn
          color="primary"
          flat
          size="lg"
          icon="fa-solid fa-forward-step"
          class="col-4"
          @click="spotifyStore.player.nextTrack()"
        />
      </div>
    </div>
  </template>
</template>

<style scoped>
.q-linear-progress {
  height: 5px;
}
</style>
