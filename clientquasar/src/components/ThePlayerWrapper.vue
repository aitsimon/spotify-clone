<script setup>
import WebPlayer from "./WebPlayer.vue";
import { useTokenStore } from "src/stores/tokens";
let tokenStore = useTokenStore();
let token =
  tokenStore.access_token ||
  JSON.parse(sessionStorage.getItem("tokens")).access_token;
</script>

<template>
  <div v-if="token" id="playerContainer" class="full-height cursor-pointer">
    <web-player :token="token" />
  </div>
</template>

<style scoped></style>
