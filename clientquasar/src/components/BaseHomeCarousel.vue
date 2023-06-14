<script setup>
import { useRoute, useRouter } from "vue-router";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import { Arrow } from "@egjs/flicking-plugins";
import { AutoPlay } from "@egjs/flicking-plugins";
const props = defineProps({
  items: Array,
  type: String,
});
const router = useRouter();
const plugins = [new Arrow()];
</script>

<template>
  <div class="flex-center cursor-pointer">
    <Flicking
      v-if="type === 'tracks'"
      :options="{
        circular: true,
        moveType: 'snap',
        interruptable: true,
        bounce: '10%',
        autoInit: true,
        panelsPerView: $q.screen.width < 600 ? 3 : -1,
        preventClickOnDrag: true,
      }"
      :plugins="$q.screen.width < 600 ? [] : plugins"
    >
      <div
        class="celda ellipsis-2-lines"
        v-for="item in items"
        :key="item.id"
        @click="router.push({ path: `playing/${item.id}` })"
      >
        <img
          class="q-pb-xs"
          :src="item.album.images[0].url"
          alt="album cover image"
        />
        <span class="text-primary ellipsis songName">{{ item.name }}</span>
      </div>
      <template #viewport v-if="$q.screen.width >= 600">
        <span
          class="flicking-arrow-prev bg-secondaryLighter"
          color="red"
        ></span>
        <span class="flicking-arrow-next bg-secondaryLighter"></span>
      </template>
    </Flicking>
    <Flicking
      v-else-if="type === 'artists'"
      :options="{
        circular: true,
        moveType: 'snap',
        interruptable: true,
        bounce: '10%',
        autoInit: true,
        panelsPerView: $q.screen.width < 600 ? 3 : -1,
        preventClickOnDrag: true,
      }"
      :plugins="$q.screen.width < 600 ? [] : plugins"
    >
      <div
        class="celda ellipsis-2-lines"
        v-for="item in items"
        :key="item.id"
        @click="router.push({ path: `artists/${item.id}` })"
      >
        <img
          class="q-pb-xs"
          :src="item.images[0].url"
          alt="album cover image"
        />
        <span class="text-primary ellipsis songName">{{ item.name }}</span>
      </div>
      <template #viewport v-if="$q.screen.width >= 600">
        <span
          class="flicking-arrow-prev bg-secondaryLighter"
          color="red"
        ></span>
        <span class="flicking-arrow-next bg-secondaryLighter"></span>
      </template>
    </Flicking>
    <Flicking
      v-else-if="type === 'recently-played-tracks'"
      :options="{
        circular: true,
        moveType: 'snap',
        interruptable: true,
        bounce: '10%',
        autoInit: true,
        panelsPerView: $q.screen.width < 600 ? 3 : -1,
        preventClickOnDrag: true,
      }"
      :plugins="$q.screen.width < 600 ? [] : plugins"
    >
      <div
        class="celda ellipsis-2-lines"
        v-for="item in items"
        :key="item"
        @click="router.push({ path: `playing/${item.track.id}` })"
      >
        <template v-if="item.track.id !== undefined">
          <img
            class="q-pb-xs"
            :src="item.track.album.images[0].url"
            alt="album cover image"
          />
          <span class="text-primary ellipsis songName">{{
            item.track.name
          }}</span>
        </template>
      </div>
      <template #viewport v-if="$q.screen.width >= 600">
        <span
          class="flicking-arrow-prev bg-secondaryLighter"
          color="red"
        ></span>
        <span class="flicking-arrow-next bg-secondaryLighter"></span>
      </template>
    </Flicking>
    <Flicking
      v-else-if="type === 'playlists'"
      :options="{
        circular: true,
        moveType: 'snap',
        interruptable: true,
        bounce: '10%',
        autoInit: true,
        panelsPerView: $q.screen.width < 600 ? 3 : -1,
        preventClickOnDrag: true,
      }"
      :plugins="$q.screen.width < 600 ? [] : plugins"
    >
      <div
        class="celda ellipsis-2-lines"
        v-for="item in items"
        @click="router.push({ path: `playlists/${item.id}` })"
        :key="item.id"
      >
        <template v-if="item.id !== undefined">
          <img
            class="q-pb-xs"
            :src="item.images[0].url"
            alt="album cover image"
          />
          <span class="text-primary ellipsis songName">{{ item.name }}</span>
        </template>
      </div>
      <template #viewport v-if="$q.screen.width >= 600">
        <span
          class="flicking-arrow-prev bg-secondaryLighter"
          color="red"
        ></span>
        <span class="flicking-arrow-next bg-secondaryLighter"></span>
      </template>
    </Flicking>
    <Flicking
      v-else-if="type === 'albums'"
      :options="{
        circular: true,
        moveType: 'snap',
        interruptable: true,
        bounce: '10%',
        autoInit: true,
        panelsPerView: $q.screen.width < 600 ? 3 : -1,
        preventClickOnDrag: true,
      }"
      :plugins="$q.screen.width < 600 ? [] : plugins"
    >
      <div
        class="celda ellipsis-2-lines"
        v-for="item in items"
        @click="router.push({ path: `albums/${item.id}` })"
        :key="item.id"
      >
        <template v-if="item.id !== undefined">
          <img
            class="q-pb-xs"
            :src="item.images[0].url"
            alt="album cover image"
          />
          <span class="text-primary ellipsis songName">{{ item.name }}</span>
        </template>
      </div>
      <template #viewport v-if="$q.screen.width >= 600">
        <span
          class="flicking-arrow-prev bg-secondaryLighter"
          color="red"
        ></span>
        <span class="flicking-arrow-next bg-secondaryLighter"></span>
      </template>
    </Flicking>
    <Flicking
      v-else
      :options="{
        circular: true,
        moveType: 'snap',
        interruptable: true,
        bounce: '10%',
        autoInit: true,
        panelsPerView: $q.screen.width < 600 ? 3 : -1,
        preventClickOnDrag: true,
      }"
      :plugins="$q.screen.width < 600 ? [] : plugins"
    >
      <div class="celda ellipsis-2-lines" v-for="item in items" :key="item.id">
        <img
          class="q-pb-xs"
          :src="item.images[0].url"
          alt="album cover image"
        />
        <span class="text-primary ellipsis songName">{{ item.name }}</span>
      </div>
      <template #viewport v-if="$q.screen.width >= 600">
        <span
          class="flicking-arrow-prev bg-secondaryLighter"
          color="red"
        ></span>
        <span class="flicking-arrow-next bg-secondaryLighter"></span>
      </template>
    </Flicking>
  </div>
</template>

<style scoped>
.flicking-viewport {
  width: 95vw;
  height: 20vh;
  overflow: hidden;
}
.celda {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
}
.celda > img {
  aspect-ratio: 1;
  object-fit: cover;
  width: fit-content;
  height: 80%;
  border-radius: 10px;
}
.celda > span {
  text-align: center;
  width: 134px;
  height: 20%;
}
.songName {
  font-size: large;
}
@media screen and (min-width: 600px) {
  .celda {
    margin-right: 0.5vw;
  }
}
@media screen and (min-width: 900px) {
  .songName {
    font-size: larger;
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
