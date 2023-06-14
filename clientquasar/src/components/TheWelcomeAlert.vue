<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import TheThemeToggle from "./TheThemeToggle.vue";
let active = ref(false);
let slide = ref("style");
onMounted(() => {
  active.value = true;
});
</script>

<template>
  <q-dialog v-model="active">
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      class="bg-primary text-secondary shadow-1 rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-lg q-mt-md-md text-justify">
          Welcome to my Spotify clone! This is a work in progress about a
          Progressive Web App based on Quasar Framework.
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="light-theme" class="column no-wrap flex-center">
        <div class="q-mt-lg q-mt-md-md text-justify">
          <div class="row flex-center q-mb-md">
            <q-icon name="dark_mode" size="56px" class="q-mr-sm" />
            <q-icon name="light_mode" size="56px" />
          </div>
          Are you a night owl? Or a morning person? This app will adapt to your
          needs. Toogle the light theme on and off. Don't worry, you can change
          this later on the settings tab.
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="login" class="column no-wrap flex-center">
        <q-icon name="key" size="56px" />
        <div class="q-mt-lg q-mt-sm-md text-justify row flex-center no-wrap">
          In order to use this app, you need to login with your Spotify account.
        </div>
        <q-btn
          v-close-popup
          rounded=""
          label="Got it!"
          class="q-mt-md q-mt-md-lg"
          icon="check"
          color="accent"
          @click="
            () => {
              active = false;
            }
          "
        />
      </q-carousel-slide>
    </q-carousel>
  </q-dialog>
</template>

<style></style>
