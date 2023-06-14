import { useRoute, useRouter } from "vue-router";
function checkAuth() {
  const router = useRouter();

  if (
    !sessionStorage.getItem("logued") === "true" ||
    sessionStorage.getItem("logued") === null
  ) {
    router.replace({ path: "Login" });
    return false;
  }
  return true;
}
export default checkAuth;
