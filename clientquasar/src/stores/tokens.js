import { defineStore } from "pinia";
import { ref } from "vue";
export const useTokenStore = defineStore("token", () => {
  let access_token = ref("");
  let refresh_token = ref("");
  async function getAccessToken(code) {
    const body = new URLSearchParams({
      code: code,
    });
    const response = await fetch(process.env.SERVER_URL + "token", {
      method: "POST",
      body: body,
    });
    const data = await response.json();

    return data;
  }
  function $reset() {
    access_token.value = ref("");
    refresh_token.value = ref("");
  }
  return { getAccessToken, access_token, refresh_token, $reset };
});
