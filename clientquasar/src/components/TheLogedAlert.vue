<script setup>
import { onMounted } from "vue";
import { useQuasar } from "quasar";
import { ref } from "vue";
import TheThemeToggle from "./TheThemeToggle.vue";
let $q = useQuasar();
let active = ref(false);
let slide = ref("style");
let lorem = "hellow wold lorem ipsum";
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
      control-color="dark"
      navigation
      padding
      arrows
      height="300px"
      class="bg-primary text-dark shadow-1 rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="login" size="56px" />
        <div class="q-mt-lg text-justify">
          Once you're succesfully loged in, you will be able to see your
          playlists, albums, artists, and more. You can also search for new
          music, and add it to your playlists.
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="light-theme" class="column no-wrap flex-center">
        <TheThemeToggle />
        <div class="q-mt-lg text-justify">
          Are you a night owl? Or a morning person? This app will adapt to your
          needs. Toogle the light theme on and off. Don't worry, you can change
          this later on the settings tab.
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-dialog>
</template>

<style></style>
