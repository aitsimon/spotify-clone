<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
<template>
  <q-page>
    <div
      class="fullscreen bg-overallBg text-accent text-center q-pa-md flex flex-center"
    >
      <div>
        <div style="font-size: 30vh">404</div>

        <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="accent"
          unelevated
          to="/dashboard"
          label="Go Home"
          no-caps
        />
      </div>
    </div>
  </q-page>
</template>
