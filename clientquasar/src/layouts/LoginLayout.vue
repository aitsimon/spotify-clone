<script setup></script>
<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
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
</style>
