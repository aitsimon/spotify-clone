<script setup>
import { ref, computed } from "vue";
import { useFetchStore } from "../stores/fetchService.js";
import { useRoute, useRouter } from "vue-router";
import TheSearchFilters from "./TheSearchFilters.vue";
const fetchStore = useFetchStore();
const router = useRouter();
let search = ref("");
let searched = computed(() => {
  return search.value?.length > 0 ? true : false;
});
</script>

<template>
  <q-page>
    <div class="full-width column">
      <div class="row justify-start">
        <q-btn
          flat
          round
          color="primary"
          icon="arrow_back_ios_new"
          @click="router.go(-1)"
        />
      </div>
      <h1 class="text-h4">Search</h1>
      <TheSearchFilters
        @click="
          searched
            ? fetchStore.searchItem(search, fetchStore.searchFilters)
            : ''
        "
      />
      <q-input
        clearable
        filled
        label="What do you want to listen to?"
        v-model="search"
        @keyup="fetchStore.searchItem(search, fetchStore.searchFilters)"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div v-if="!searched">Nothing Searched</div>
    <div
      v-else
      v-for="(value, key, index) in fetchStore.founditems"
      :key="index"
    >
      <template v-if="key === 'tracks'">
        <h2 class="text-capitalize">{{ key }}</h2>
        <q-chip
          square
          color="secondary"
          size="xl"
          clickable
          class="ellipsis"
          :id="item.id"
          v-for="item in value.items"
          @click="router.push({ path: `/playing/${item.id}` })"
        >
          <q-avatar>
            <img :src="item.album.images[0].url" alt="item image cover" />
          </q-avatar>
          <div class="ellipsis text-subtitle1">
            {{ item.name }}
          </div>
        </q-chip>
      </template>
      <template
        v-else-if="
          ['playlists', 'artists', 'albums', 'shows', 'albums'].includes(key)
        "
      >
        <h2 class="text-capitalize">{{ key }}</h2>
        <q-chip
          square
          color="secondary"
          size="xl"
          clickable
          class="ellipsis"
          v-for="item in value.items"
          :id="item.id"
          @click="router.push({ path: `/${key}/${item.id}` })"
        >
          <template v-if="item.images.length > 0">
            <q-avatar>
              <img :src="item.images[0].url" alt="item image cover" />
            </q-avatar>
            <div class="ellipsis text-subtitle1">
              {{ item.name }}
            </div>
          </template>
        </q-chip>
      </template>
      <template v-else>Nothing found</template>
    </div>
  </q-page>
</template>

<style scoped></style>
