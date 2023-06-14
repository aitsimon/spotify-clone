<script setup>
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { onMounted } from "vue";
import TheWelcomeAlert from "../components/TheWelcomeAlert.vue";
const router = useRouter();
const $q = useQuasar();
if (sessionStorage.getItem("errorLogin")) {
  $q.notify({
    message: sessionStorage.get("errorLogin"),
    color: "red-5",
    icon: "error",
    position: "bottom",
    timeout: 4000,
  });
  sessionStorage.remove("errorLogin");
}
</script>
<template>
  <q-page class="full-height full-width row flex-center">
    <TheWelcomeAlert />
    <video
      autoplay
      muted
      loop
      id="background-video"
      src="../assets/videos/pexels-cottonbro-studio-7087636-4096x2160-25fps.webm"
    ></video>
    <q-card bordered tag="div" class="q-px-sm q-px-md-lg q-px-lg-xl">
      <div id="loginContent" class="column no-wrap justify-around items-center">
        <div class="row flex-center">
          <h1
            class="text-center q-mr-xs q-mr-md-lg q-mr-lg-xl text-weight-bold"
            :class="$q.screen.lt.sm ? 'text-h3' : 'text-h2'"
          >
            ReSpoted
          </h1>
          <img
            class="col-2"
            src="../assets/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Green.png"
            alt=""
          />
        </div>
        <q-btn
          align="between"
          color="spotifyGreen"
          label="Login with Spotify"
          unelevated
          icon-right="login"
          @click="router.push('/preauth')"
          :size="$q.screen.lt.sm ? 'md' : 'lg'"
        />
      </div>
    </q-card>
  </q-page>
</template>
<style>
h1 {
  word-break: break-all;
}
#loginContent {
  height: 60vh;
}
.q-card {
  background-color: rgba(255, 255, 255, 0.438);
  backdrop-filter: blur(5px);
  margin: 0 4vw;
}
#background-video {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
@media screen and (min-width: 900px) {
  #loginContent {
    height: 80vh;
  }
  .q-card {
    margin: 0 10vw;
  }
}
@media screen and (min-width: 1200px) {
  .q-card {
    margin: 0 20vw;
  }
}
</style>
