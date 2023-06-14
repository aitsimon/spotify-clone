<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="row justify-end col-12">
    <q-btn
      flat
      round
      size="lg"
      color="primary"
      icon="expand_more"
      @click="router.go(-1)"
    />
  </div>
</template>

<style></style>
