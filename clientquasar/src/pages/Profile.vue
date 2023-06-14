<script setup>
import { ref } from "vue";
import { useFetchStore } from "src/stores/fetchService";
import TheUserInfoList from "src/components/TheUserInfoList.vue";
const { userProfile } = useFetchStore();
</script>

<template>
  <q-page>
    <template v-if="userProfile.images">
      <div id="headingWrapper">
        <h1 class="text-h3">My Profile</h1>
      </div>
      <div id="contentWrapper">
        <div class="row flex-center no-wrap">
          <q-avatar size="15vw">
            <img :src="userProfile?.images[0].url" />
          </q-avatar>
        </div>
        <div class="row flex-center col-12 q-mt-md">
          <TheUserInfoList :userProfile="userProfile" />
        </div>
      </div>
    </template>
  </q-page>
</template>

<style scoped>
#headingWrapper {
  height: 12vh;
  margin: 2vh 0;
}
#contentWrapper {
  height: max-content;
}
</style>
