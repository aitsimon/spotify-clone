import { ref } from "vue";
import { defineStore } from "pinia";
import { useTokenStore } from "./tokens";
export const useSpotifyStore = defineStore("spotify", () => {
  const tokenStore = useTokenStore();
  // STATE
  const is_active = ref(false);
  const is_paused = ref(true);
  const player = ref({});
  const current_track = ref({});
  // ACTIONS
  const setActive = (newValue) => {
    is_active.value = newValue;
  };
  const setPaused = (newValue) => {
    is_paused.value = newValue;
  };
  const setPlayer = (newValue) => {
    player.value = newValue;
  };
  const setTrack = (newValue) => {
    current_track.value = newValue;
  };
  async function changeDevice(device_id) {
    let body = new URLSearchParams({
      device_ids: device_id,
      play: false,
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
    });
    const response = await fetch(process.env.SERVER_URL + "transfer-playback", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function getPlayerState() {
    return await player.getCurrentState();
  }
  function $reset() {
    is_active.value = ref(false);
    is_paused.value = ref(true);
    player.value = ref({});
    current_track.value = ref({});
  }
  return {
    is_active,
    is_paused,
    player,
    current_track,
    setActive,
    changeDevice,
    getPlayerState,
    setPaused,
    setPlayer,
    setTrack,
    $reset,
  };
});
