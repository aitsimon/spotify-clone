<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="row justify-start q-mb-md">
    <q-btn
      flat
      round
      color="primary"
      icon="arrow_back_ios_new"
      @click="router.go(-1)"
    />
  </div>
</template>

<style></style>
