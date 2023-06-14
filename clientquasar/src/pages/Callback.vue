<script setup>
import { useTokenStore } from "../stores/tokens.js";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();
const tokenStore = useTokenStore();
const route = useRoute();
onMounted(async () => {
  let tokens = await tokenStore.getAccessToken(route.query.code);
  if (tokens.access_token !== undefined) {
    sessionStorage.setItem("tokens", JSON.stringify(tokens));
    tokenStore.access_token = tokens.access_token;
    tokenStore.refresh_token = tokens.refresh_token;
    sessionStorage.setItem("logued", true);
    router.replace({ name: "Dashboard" });
  } else {
    sessionStorage.setItem("errorLogin", tokens.error);
    router.replace({ name: "Login" });
  }
});
</script>

<template>
  <span>Redirecting ...</span>
</template>

<style></style>
