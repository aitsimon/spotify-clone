import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useTokenStore } from "./tokens";

export const useFetchStore = defineStore("fetchService", () => {
  let inited = ref(false);
  let tokenStore = useTokenStore();
  let avaibleGenreSeeds = ref([]);
  let userTopContent = ref([]);
  let userTopArtists = ref([]);
  let userPlaylists = ref([]);
  let userProfile = ref([]);
  let loading = ref(true);
  let founditems = ref({});
  let currentItemPlaying = ref({});
  let searchFilters = ref("");
  let recentlyPlayed = ref([]);
  let newReleases = ref([]);
  let featuredPlaylists = ref([]);
  let ALL_SEARCH_TYPES = ["track", "artist", "album", "playlist", "show"];
  async function getUserPlaylists(offset = 0, limit = 20) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      limit: limit,
      offset: offset,
    });
    const response = await fetch(process.env.SERVER_URL + "user-playlists", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function getUserAvaibleDevices() {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
    });
    const response = await fetch(process.env.SERVER_URL + "user-avaible-devices", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function transferUserPlayBack(device_ids) {
    let body = new URLSearchParams({
      device_ids: device_ids,
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
  async function getUserTopContent(type, time_range, limit = "10") {
    loading.value = true;
    let body = new URLSearchParams({
      type: type,
      time_range: time_range,
      limit: limit,
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
    });
    const response = await fetch(process.env.SERVER_URL + "user-top-content", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    loading.value = false;
    return data;
  }
  async function getCurrentUserProfile() {
    loading.value = true;
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
    });
    const response = await fetch(process.env.SERVER_URL + "user-profile", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    loading.value = false;
    return data;
  }
  async function searchItem(
    query,
    type = ALL_SEARCH_TYPES.join(),
    market = "ES",
    limit = "20",
    offset = "0"
  ) {
    loading.value = true;
    let body = new URLSearchParams({
      query: query,
      type: type,
      market: market,
      limit: limit,
      offset: offset,
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
    });
    const response = await fetch(process.env.SERVER_URL + "search-item", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    founditems.value = {};
    loading.value = false;
    for (const key in data) {
      founditems.value[key] = data.key;
    }
    founditems.value = data;
    return data;
  }
  async function getRecentlyPlayedTracks(limit = 20) {
    let body = new URLSearchParams({
      limit: limit,
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
    });
    const response = await fetch(
      process.env.SERVER_URL + "get-recently-played-tracks",
      {
        method: "POST",
        body: body,
      }
    );
    const data = await response.json();
    return data;
  }
  async function getAvaibleGenreSeeds() {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
    });
    const response = await fetch(process.env.SERVER_URL + "get-avaible-genre-seeds", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function getFeaturedPlaylists(
    locale = "es_ES",
    country = "ES",
    timestamp = new Date().toISOString()
  ) {
    loading.value = true;
    let body = new URLSearchParams({
      locale: locale,
      country: country,
      timestamp: timestamp,
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
    });
    const response = await fetch(process.env.SERVER_URL + "get-featured-playlists", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    loading.value = false;
    return data;
  }
  async function getNewReleases(limit = 20) {
    loading.value = true;
    let body = new URLSearchParams({
      limit: limit,
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
    });
    const response = await fetch(process.env.SERVER_URL + "get-new-releases", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    loading.value = false;
    return data;
  }
  async function initStoreValues() {
    userTopContent.value = await getUserTopContent("tracks", "short_term");
    recentlyPlayed.value = await getRecentlyPlayedTracks();
    userTopArtists.value = await getUserTopContent(
      "artists",
      "short_term",
      "20"
    );
    newReleases.value = await getNewReleases();
    featuredPlaylists.value = await getFeaturedPlaylists();
    userPlaylists.value = await getUserPlaylists();
    userProfile.value = await getCurrentUserProfile();
    avaibleGenreSeeds.value = await getAvaibleGenreSeeds();
    inited.value = true;
  }

  function $reset() {
    tokenStore.value = useTokenStore();
    userTopContent.value = ref([]);
    userTopArtists.value = ref([]);
    userPlaylists.value = ref([]);
    userProfile.value = ref([]);
    loading.value = ref(true);
    founditems.value = ref({});
    currentItemPlaying.value = ref({});
    searchFilters.value = ref("");
    recentlyPlayed.value = ref([]);
    avaibleGenreSeeds.value = ref([]);
  }
  return {
    userTopContent,
    userPlaylists,
    userProfile,
    userTopArtists,
    founditems,
    currentItemPlaying,
    searchFilters,
    recentlyPlayed,
    avaibleGenreSeeds,
    newReleases,
    featuredPlaylists,
    inited,
    searchItem,
    getUserPlaylists,
    getUserTopContent,
    getUserAvaibleDevices,
    transferUserPlayBack,
    initStoreValues,
    getRecentlyPlayedTracks,
    $reset,
  };
});
