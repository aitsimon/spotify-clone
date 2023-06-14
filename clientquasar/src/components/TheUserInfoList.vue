<script setup>
defineProps(["userProfile"]);
</script>

<template>
  <q-list
    :bordered="false"
    :dense="false"
    :separator="false"
    :dark="false"
    :padding="false"
    class="q-py-md"
  >
    <q-item v-ripple>
      <q-item-section>
        <q-item-label overline>NAME</q-item-label>
        <q-item-label>{{ userProfile.display_name }}</q-item-label>
      </q-item-section>
      <q-item-section>
        <q-item-label overline>EMAIL</q-item-label>
        <q-item-label>{{ userProfile.email }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-ripple lines="2">
      <q-item-section lines="2">
        <q-item-label overline>PROFILE URL</q-item-label>
        <q-item-label caption class="text-accent" lines="3"
          ><a
            ref="nofollow"
            target="_blank"
            :href="userProfile.external_urls.spotify"
            class="text-accent"
            >See in Spotify</a
          ></q-item-label
        >
      </q-item-section>
      <q-item-section>
        <q-item-label overline>FOLLOWERS</q-item-label>
        <q-item-label class="text-capitalize">{{
          userProfile.followers.total
        }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-ripple>
      <q-item-section>
        <q-item-label overline>ACCOUNT SUBSCRIPTION</q-item-label>
        <q-item-label class="ellipsis text-capitalize">{{
          userProfile.product
        }}</q-item-label>
      </q-item-section>
      <q-item-section>
        <q-item-label overline>COUNTRY</q-item-label>
        <q-item-label>{{ userProfile.country }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<style scoped>
a,
a:any-link {
  outline: none;
  text-decoration: none;
  color: inherit;
}
div {
  font-size: medium;
}
@media screen and (width > 1000px) {
  div {
    font-size: large;
  }
}
</style>
