import { defineStore } from "pinia";
import { useTokenStore } from "./tokens";
import { useFetchStore } from "./fetchService";
import { ref, computed } from "vue";
export const useAuxApiService = defineStore("useAuxApiService", () => {
  let loading = ref(undefined);
  let tokenStore = useTokenStore();
  let fetchStore = useFetchStore();
  let recommendations = ref([]);
  async function getOneTrack(id) {
    loading.value = true;
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      id: id,
    });
    const response = await fetch(process.env.SERVER_URL + "get-track", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    loading.value = false;
    return data;
  }
  function chunkArray(arr, chunkSize) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }
  async function checkUserSavedTracks(arrayIds) {
    loading.value = true;
    if (arrayIds.length <= 50) {
      let body = new URLSearchParams({
        token:
          tokenStore.access_token ||
          JSON.parse(sessionStorage.getItem("tokens")).access_token,
        ids: arrayIds.join(","),
      });
      const response = await fetch(process.env.SERVER_URL + "check-user-saved-tracks", {
        method: "POST",
        body: body,
      });
      const data = await response.json();
      const result = {};
      for (let i = 0; i < arrayIds.length; i++) {
        const element = arrayIds[i];
        result[element] = data[i];
      }
      return result;
    } else {
      let newArrayIds = chunkArray(arrayIds, 50);
      let result = {};
      for (let i = 0; i < newArrayIds.length; i++) {
        const element = newArrayIds[i];
        let body = new URLSearchParams({
          token:
            tokenStore.access_token ||
            JSON.parse(sessionStorage.getItem("tokens")).access_token,
          ids: element.join(","),
        });
        const response = await fetch(
          process.env.SERVER_URL + "check-user-saved-tracks",
          {
            method: "POST",
            body: body,
          }
        );
        const data = await response.json();
        for (let j = 0; j < element.length; j++) {
          const subelement = element[j];
          result[element[j]] = data[j];
        }
      }

      loading.value = false;
      return result;
    }
  }
  async function saveTracks(arrayIds) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      ids: arrayIds.join(","),
    });
    const response = await fetch(process.env.SERVER_URL + "save-tracks", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function deleteTracks(arrayIds) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      ids: arrayIds.join(","),
    });
    const response = await fetch(process.env.SERVER_URL + "delete-tracks", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function getPlaylist(id) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      id: id,
    });
    const response = await fetch(process.env.SERVER_URL + "get-playlist", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function followPlaylist(id) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      playlist_id: id,
    });
    const response = await fetch(process.env.SERVER_URL + "save-playlist", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function unfollowPlaylist(id) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      playlist_id: id,
    });
    const response = await fetch(process.env.SERVER_URL + "delete-playlist", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function checkUserFollowedPlaylist(playlist_id) {
    loading.value = true;
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      playlist_id: playlist_id,
      id: fetchStore.userProfile.id,
    });
    const response = await fetch(
      process.env.SERVER_URL + "check-user-follows-playlist",
      {
        method: "POST",
        body: body,
      }
    );
    const data = await response.json();
    loading.value = false;
    return data;
  }
  async function getArtist(id) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      id: id,
    });
    const response = await fetch(process.env.SERVER_URL + "get-artist", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function followArtists(ids) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      ids: ids.join(","),
    });
    const response = await fetch(process.env.SERVER_URL + "follow-artists", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function unfollowArtists(ids) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      ids: ids.join(","),
    });
    const response = await fetch(process.env.SERVER_URL + "unfollow-artists", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function checkUserFollowedArtist(id) {
    loading.value = true;
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      ids: id,
    });
    const response = await fetch(
      process.env.SERVER_URL + "check-user-follows-artists",
      {
        method: "POST",
        body: body,
      }
    );
    const data = await response.json();
    loading.value = false;
    return data[0];
  }
  async function getTopArtistTracks(id) {
    loading.value = true;
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      id: id,
    });
    const response = await fetch(process.env.SERVER_URL + "get-top-artist-tracks", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    loading.value = false;
    return data;
  }
  async function getAlbum(id) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      id: id,
    });
    const response = await fetch(process.env.SERVER_URL + "get-album", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function saveAlbums(ids) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      ids: ids.join(","),
    });
    const response = await fetch(process.env.SERVER_URL + "save-albums", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function removeAlbums(ids) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      ids: ids.join(","),
    });
    const response = await fetch(process.env.SERVER_URL + "remove-albums", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function checkUserSavedAlbums(album_ids) {
    loading.value = true;
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      ids: album_ids.join(","),
    });
    const response = await fetch(process.env.SERVER_URL + "check-user-saved-albums", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    loading.value = false;
    return data;
  }
  async function startPlayback(type, input) {
    loading.value = true;
    if (type == "tracks") {
      let body = new URLSearchParams({
        token:
          tokenStore.access_token ||
          JSON.parse(sessionStorage.getItem("tokens")).access_token,
        uris: input,
      });
      const response = await fetch(process.env.SERVER_URL + "player-play-uri", {
        method: "POST",
        body: body,
      });
      const data = await response.json();
      loading.value = false;
      return;
    } else {
      let body = new URLSearchParams({
        token:
          tokenStore.access_token ||
          JSON.parse(sessionStorage.getItem("tokens")).access_token,
        context_uri: input,
      });
      const response = await fetch(process.env.SERVER_URL + "player-play-context-uri", {
        method: "POST",
        body: body,
      });
      const data = await response.json();
      loading.value = false;
      return data[0];
    }
  }
  async function getUserProfile(user_id) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      user_id: user_id,
    });
    const response = await fetch(process.env.SERVER_URL + "get-user", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function getSavedTracks(offset = 0, limit = 20) {
    loading.value = true;
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      limit: limit,
      offset: offset,
    });
    const response = await fetch(process.env.SERVER_URL + "get-user-saved-tracks", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    loading.value = false;
    return data;
  }
  async function getRecommendations(seeds, limit = 40) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      seed_artists: seeds.seedArtists,
      seed_genres: seeds.seedGenres,
      seed_tracks: seeds.seedTracks,
      limit: limit,
    });
    const response = await fetch(process.env.SERVER_URL + "get-recommendations", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    recommendations.value = data;
    return data;
  }
  async function createPlaylist(name, userId) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      name: name,
      user_id: userId,
    });
    const response = await fetch(process.env.SERVER_URL + "create-playlist", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  async function addTracksToPlaylist(playlistId, uris) {
    let body = new URLSearchParams({
      token:
        tokenStore.access_token ||
        JSON.parse(sessionStorage.getItem("tokens")).access_token,
      playlist_id: playlistId,
      uris: uris,
    });
    const response = await fetch(process.env.SERVER_URL + "add-items-playlist", {
      method: "POST",
      body: body,
    });
    const data = await response.json();
    return data;
  }
  function $reset() {
    loading.value = ref(undefined);
  }
  return {
    loading,
    recommendations,
    checkUserSavedTracks,
    saveTracks,
    deleteTracks,
    getPlaylist,
    getOneTrack,
    followPlaylist,
    unfollowPlaylist,
    checkUserFollowedPlaylist,
    getArtist,
    followArtists,
    unfollowArtists,
    checkUserFollowedArtist,
    getTopArtistTracks,
    getAlbum,
    saveAlbums,
    removeAlbums,
    checkUserSavedAlbums,
    startPlayback,
    getSavedTracks,
    getUserProfile,
    getRecommendations,
    createPlaylist,
    addTracksToPlaylist,
    $reset,
  };
});
