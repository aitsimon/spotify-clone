<script setup>
import { onMounted, ref, defineProps } from "vue";
import { useAuxApiService } from "src/stores/auxApiService";
const props = defineProps({
  typeItem: String,
  idItem: String,
  isLiked: {
    type: Boolean,
    default: undefined,
  },
  size: {
    type: String,
    default: "md",
  },
});
const auxApiService = useAuxApiService();
let liked = ref(undefined);

async function check() {
  switch (props.typeItem) {
    case "tracks":
      return await auxApiService.checkUserSavedTracks([props.idItem]);
    case "playlist":
      return await auxApiService.checkUserFollowedPlaylist(props.idItem);
    case "artists":
      return await auxApiService.checkUserFollowedArtist(props.idItem);
    case "albums":
      return await auxApiService.checkUserSavedAlbums([props.idItem]);
    default:
      false;
      break;
  }
}
async function save() {
  switch (props.typeItem) {
    case "tracks":
      auxApiService.saveTracks([props.idItem]);
      break;
    case "playlist":
      auxApiService.followPlaylist(props.idItem);
      break;
    case "artists":
      auxApiService.followArtists([props.idItem]);
      break;
    case "albums":
      auxApiService.saveAlbums([props.idItem]);
      break;
    default:
      false;
      break;
  }
}
async function deleteItem() {
  switch (props.typeItem) {
    case "tracks":
      auxApiService.deleteTracks([props.idItem]);
      break;
    case "playlist":
      auxApiService.unfollowPlaylist(props.idItem);
      break;
    case "artists":
      auxApiService.unfollowArtists([props.idItem]);
      break;
    case "albums":
      auxApiService.deleteAlbums([props.idItem]);
      break;
    default:
      false;
      break;
  }
}
function handleLikeBtnClick(event) {
  if (liked.value == true) {
    // Remove from saved tracks
    liked.value = false;
    deleteItem();
  } else if (liked.value == false) {
    // Add to saved tracks
    liked.value = true;
    save();
  } else {
    return;
  }
  console.log("liked", liked);
}
onMounted(async () => {
  if (props.isLiked === undefined) {
    liked.value = undefined;
    let response = await check();
    if (props.typeItem === "tracks") liked.value = response[0];
    if (props.typeItem === "artists") {
      liked.value = response;
      return;
    }
    for (var key in response) {
      if (response.hasOwnProperty(key)) {
        liked.value = response[key];
      }
    }
  } else {
    liked.value = props.isLiked;
  }
});
</script>

<template>
  <template v-if="liked !== undefined">
    <q-btn
      flat
      rounded
      :color="liked === true ? 'accent' : 'white'"
      :loading="liked === undefined"
      :icon="liked === true ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
      @click="handleLikeBtnClick($event)"
      :size="props.size"
    />
  </template>
  <template v-else>
    <div>
      <q-spinner-rings color="info" size="2em" />
    </div>
  </template>
</template>

<style></style>
