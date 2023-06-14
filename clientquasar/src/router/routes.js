import { useTokenStore } from "src/stores/tokens";
const CLIENT_ID = process.env.CLIENT_ID;
const SCOPES = process.env.SCOPES;
const REDIRECT_URI = process.env.REDIRECT_URI;
function checkAuth() {
  if (useTokenStore().access_token) {
    if (
      sessionStorage.getItem("logued") === "true" &&
      useTokenStore().access_token.value !== ""
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Login.vue"),
        name: "Login",
      },
      {
        path: "preauth",
        component: () => import("src/pages/PreAuth.vue"),
        name: "PreAuth",
        beforeEnter(to, from, next) {
          window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPES}`;
          next();
          return false;
        },
      },
      {
        path: "callback",
        component: () => import("src/pages/Callback.vue"),
        name: "Callback",
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "dashboard",
        component: () => import("src/pages/Dashboard.vue"),
        name: "Dashboard",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "library",
        component: () => import("src/pages/Library.vue"),
        name: "Library",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "search",
        component: () => import("src/pages/Search.vue"),
        name: "Search",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "playing/:id",
        component: () => import("src/pages/Playing.vue"),
        name: "Playing",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "playlists/:id",
        component: () => import("src/pages/Playlist.vue"),
        name: "Playlist",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "albums/:id",
        component: () => import("src/pages/Album.vue"),
        name: "Album",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "artists/:id",
        component: () => import("src/pages/Artist.vue"),
        name: "Artist",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "now-playing",
        component: () => import("src/pages/NowPlaying.vue"),
        name: "NowPlaying",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "liked-songs",
        component: () => import("src/pages/LikedSongs.vue"),
        name: "LikedSongs",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "user-profile",
        component: () => import("src/pages/Profile.vue"),
        name: "Profile",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "recommender",
        component: () => import("src/pages/Recommender.vue"),
        name: "Recommender",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "recommended-playlist",
        component: () => import("src/pages/RecommendedPlaylist.vue"),
        name: "RecommendedPlaylist",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
      {
        path: "tests",
        component: () => import("src/pages/Tests.vue"),
        name: "Test",
        async beforeEnter(to, from, next) {
          checkAuth() ? next() : next("/");
        },
      },
    ],
  },

  // Error 404
  {
    path: "/:catchAll(.*)*",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/ErrorNotFound.vue"),
        name: "Error404",
      },
    ],
  },
];

export default routes;
