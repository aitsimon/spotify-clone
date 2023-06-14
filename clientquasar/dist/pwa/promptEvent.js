window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile.
  event.preventDefault();
  console.log("beforeinstallprompt", event);
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
});
