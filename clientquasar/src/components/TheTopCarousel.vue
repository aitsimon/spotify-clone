<script setup>
import { useRouter } from "vue-router";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/flicking-plugins/dist/arrow.css";

import { Arrow } from "@egjs/flicking-plugins";
import { AutoPlay } from "@egjs/flicking-plugins";
import { useQuasar } from "quasar";
const props = defineProps({
  items: Array,
});
const $q = useQuasar();
const router = useRouter();
const pluginsSmallScreen = [
  new AutoPlay({
    duration: 5000,
    direction: "NEXT",
    stopOnHover: true,
    animationDuration: 2000,
  }),
];
const pluginsBigScreen = [
  new Arrow(),
  new AutoPlay({
    duration: 5000,
    direction: "NEXT",
    stopOnHover: true,
    animationDuration: 2000,
  }),
];
</script>

<template>
  <main class="q-pa-none q-ma-none flex-center cursor-pointer">
    <Flicking
      :options="{
        circular: true,
        align: 'prev',
        moveType: 'snap',
        interruptable: true,
        bounce: '10%',
        autoInit: true,
        threshold: $q.screen.width < 600 ? 0 : 30,
        panelsPerView: 1.1,
        preventClickOnDrag: true,
      }"
      :plugins="$q.screen.width < 600 ? pluginsSmallScreen : pluginsBigScreen"
    >
      <div
        class="celda column items-end content-end justify-end rounded-borders"
        v-for="item in items"
        :key="item.id"
        @click="router.push({ path: `playing/${item.id}` })"
        v-bind:style="{
          backgroundImage: 'url(' + item.album.images[0].url + ')',
        }"
      >
        <span
          class="text-capitalize text-accent bg-secondaryLighterOpacityReduced full-width q-pa-xs-md q-pa-sm-lg q-pa-md-xl text-right rounded-borders"
          >{{ item.name.toLowerCase() }}</span
        >
      </div>
      <template #viewport v-if="$q.screen.width >= 600">
        <span
          class="flicking-arrow-prev bg-secondaryLighter"
          color="red"
        ></span>
        <span class="flicking-arrow-next bg-secondaryLighter"></span>
      </template>
    </Flicking>
  </main>
</template>

<style scoped>
.flicking-viewport {
  width: 95vw;
  height: 45vw;
  overflow: hidden;
}
.celda {
  margin-right: 1.5vw;
  background-size: cover;
  background-repeat: no-repeat;
}
.celda > span {
  background-size: 90vw;
  font-size: xx-large;
  font-weight: 700;
  background-position: center;
  margin: 0 0.1% !important;
}
@media screen and (min-width: 1000px) {
  .flicking-viewport {
    height: 30vw;
    width: 97vw;
  }
}
.flicking-arrow-next {
  border: 1px solid white;
  border-radius: 50%;
}
.flicking-arrow-prev {
  border: 1px solid white;
  border-radius: 50%;
}

.flicking-arrow-prev::after {
  background-color: white;
}
.flicking-arrow-prev::before {
  background-color: white;
}
.flicking-arrow-next::before {
  background-color: white;
}
.flicking-arrow-next::after {
  background-color: white;
}
</style>
