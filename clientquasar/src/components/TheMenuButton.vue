<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useTokenStore } from "src/stores/tokens";
import { useAuxApiService } from "src/stores/auxApiService";
import { useFetchStore } from "src/stores/fetchService";
import { useSpotifyStore } from "src/stores/playerService";
const router = useRouter();
let fabRight = ref(false);
const $q = useQuasar();

const installApp = async () => {
  const promptEvent = window.deferredPrompt;
  console.log("promptEvent", promptEvent);
  if (!promptEvent) {
    return;
  }
  console.log(browserType());
  if (
    !pwaIsInstalled.value &&
    browserType() !== "safari" &&
    browserType() !== "firefox"
  ) {
    console.log("installApp");
    promptEvent.prompt();
    const result = await deferredPrompt.userChoice;
    if (result === "dismissed") {
      console.log(`User response to the install prompt: ${outcome}`);
      deferredPrompt = null;
      return "";
    }
  }
};
const pwaIsInstalled = computed(() => {
  if (window.matchMedia("(display-mode: standalone)").matches) {
    console.log("This IS running as standalone.");
    return true;
  }

  console.log("This is NOT running as standalone.");
  return false;
});
function handleMenuClick(actionName) {
  switch (actionName) {
    case "profile":
      router.push({ name: "Profile" });
      break;
    case "theme":
      $q.dark.toggle();
      break;
    case "logout":
      useTokenStore().$reset();
      useAuxApiService().$reset();
      useFetchStore().$reset();
      useSpotifyStore().$reset();
      sessionStorage.clear();
      router.push({ name: "Login" });
      break;
    case "home":
      router.push({ name: "Dashboard" });
      break;
    case "library":
      router.push({ name: "Library" });
      break;
    case "recommender":
      router.push({ name: "Recommender" });
      break;
    case "activatePlayer":
      useSpotifyStore().player.activateElement();
      break;
    case "download":
      installApp();
      break;
    default:
      break;
  }
}
const browserType = () => {
  const userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }

  return browserName;
};
</script>

<template>
  <q-fab
    v-model="fabRight"
    vertical-actions-align="left"
    padding="md"
    color="primary"
    icon="menu"
    text-color="accent"
    direction="down"
    flat
    unelevated
  >
    <q-fab-action
      text-color="primary"
      label-position="left"
      color="secondary"
      @click="handleMenuClick('home')"
      icon="home"
      label="Home"
    />
    <q-fab-action
      text-color="primary"
      label-position="left"
      color="secondary"
      @click="handleMenuClick('library')"
      icon="library_music"
      label="Library"
    />
    <q-fab-action
      text-color="primary"
      label-position="left"
      color="secondary"
      @click="handleMenuClick('recommender')"
      icon="assistant"
      label="Recommender"
    />
    <q-fab-action
      text-color="primary"
      label-position="left"
      color="secondary"
      @click="handleMenuClick('profile')"
      icon="account_circle"
      label="Profile"
    />
    <q-fab-action
      text-color="primary"
      label-position="left"
      color="secondary"
      @click="handleMenuClick('theme')"
      :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
      label="Theme"
    />
    <q-fab-action
      text-color="primary"
      label-position="left"
      color="secondary"
      @click="handleMenuClick('download')"
      icon="install_mobile"
      label="Download"
    />

    <q-fab-action
      text-color="primary"
      label-position="left"
      color="secondary"
      @click="handleMenuClick('logout')"
      icon="logout"
      label="Log out"
    />
  </q-fab>
</template>

<style></style>
