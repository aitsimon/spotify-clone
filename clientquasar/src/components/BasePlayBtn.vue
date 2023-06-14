<script setup>
import { onMounted, ref } from "vue";
import { useAuxApiService } from "src/stores/auxApiService";
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  input: {
    //could be either an uri for tracks or a context uri for albums and playlists
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "md",
  },
});
const { startPlayback } = useAuxApiService();
</script>

<template>
  <q-btn
    color="secondary"
    icon="play_arrow"
    :size="props.size"
    round
    text-color="primary"
    @click="startPlayback(props.type, props.input)"
  />
</template>

<style></style>
