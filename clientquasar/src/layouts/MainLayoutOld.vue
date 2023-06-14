<script setup>
import WebPlayer from "src/components/WebPlayer.vue";
import { ref } from "vue";
let tab = ref("home");
let token = JSON.parse(sessionStorage.getItem("tokens")).access_token;
</script>
<template id="mainWrapper">
  <q-layout>
    <q-page-container class="col-12 q-py-lg q-px-md">
      <router-view />
    </q-page-container>

    <q-footer id="footer" reveal class="column no-wrap col-12">
      <!-- <menu-prueba /> -->
      <div id="playerContainer" class="col-5">
        <web-player :token="token" />
      </div>
      <q-tabs
        v-model="tab"
        indicator-color="transparent"
        active-color="white"
        class="text-grey-5 bg-secondary col-7"
      >
        <q-route-tab
          :to="{ name: 'Dashboard' }"
          name="home"
          icon="home"
          label="Home"
          class="col-4 text-weight-thin text-capitalize no-wrap items-center"
        />
        <q-route-tab
          :to="{ name: 'Library' }"
          name="library"
          icon="library_music"
          label="Your Library"
          class="col-4 text-weight-thin text-capitalize no-wrap items-center"
        />
        <q-route-tab
          :to="{ name: 'Search' }"
          name="search"
          icon="search"
          label="Search"
          class="col-4 text-weight-thin text-capitalize no-wrap items-center"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
<style>
@font-face {
  font-family: "Circular Std";
  src: url("src/assets/spotify-circular-font/CircularSpotifyText-Light.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/CircularSpotifyText-Light.woff")
      format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Circular Std";
  src: url("src/assets/spotify-circular-font/CircularStd-MediumItalic.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/CircularStd-MediumItalic.woff")
      format("woff");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Circular Std";
  src: url("src/assets/spotify-circular-font/CircularStd-Medium.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/CircularStd-Medium.woff")
      format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("src/assets/spotify-circular-font/MillerHeadline-Italic.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/MillerHeadline-Italic.woff")
      format("woff");
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Circular Std Book";
  src: url("src/assets/spotify-circular-font/CircularStd-BookItalic.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/CircularStd-BookItalic.woff")
      format("woff");
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Circular Std Book";
  src: url("src/assets/spotify-circular-font/CircularStd-Book.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/CircularStd-Book.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("src/assets/spotify-circular-font/MillerHeadline-BoldItalic.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/MillerHeadline-BoldItalic.woff")
      format("woff");
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Circular Std";
  src: url("src/assets/spotify-circular-font/CircularStd-BlackItalic.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/CircularStd-BlackItalic.woff")
      format("woff");
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("src/assets/spotify-circular-font/MillerHeadline-LightItalic.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/MillerHeadline-LightItalic.woff")
      format("woff");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("src/assets/spotify-circular-font/MillerHeadline-SemiBoldItalic.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/MillerHeadline-SemiBoldItalic.woff")
      format("woff");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Circular Std";
  src: url("src/assets/spotify-circular-font/CircularStd-BoldItalic.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/CircularStd-BoldItalic.woff")
      format("woff");
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Circular Std";
  src: url("src/assets/spotify-circular-font/CircularStd-Black.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/CircularStd-Black.woff")
      format("woff");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("src/assets/spotify-circular-font/MillerHeadline-Bold.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/MillerHeadline-Bold.woff")
      format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("src/assets/spotify-circular-font/MillerHeadline-Light.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/MillerHeadline-Light.woff")
      format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("src/assets/spotify-circular-font/MillerHeadline-SemiBold.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/MillerHeadline-SemiBold.woff")
      format("woff");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Circular Std";
  src: url("src/assets/spotify-circular-font/CircularStd-Bold.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/CircularStd-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("src/assets/spotify-circular-font/MillerHeadline-Roman.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/MillerHeadline-Roman.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Circular Std";
  src: url("src/assets/spotify-circular-font/CircularSpotifyText-LightItalic.woff2")
      format("woff2"),
    url("src/assets/spotify-circular-font/CircularSpotifyText-LightItalic.woff")
      format("woff");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
* {
  font-family: Circular Std;
}
#footer {
  background-color: rgba(240, 248, 255, 0);
}
@media screen and (min-width: 1050px) {
  #footer {
    height: 7vw;
  }
}
@media screen and (min-width: 1400px) {
  #footer {
    height: 5vw;
  }
}
</style>
