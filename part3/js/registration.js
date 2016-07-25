(function(){
  "use strict";
  // Service Worker registration (installation/activation).
  if (!("serviceWorker" in navigator)) {
    console.error("No serviceWorker support!");
    return;
  }

  function doRegistration() {
    async.task(function* () {
      console.info("Attempting to register SW");
      let reg = yield navigator.serviceWorker.getRegistration();
      if (reg) {
        return;
      }
      console.info("No registration, so register");
      try {
        reg = yield navigator.serviceWorker.register("sw.js");
      } catch (err) {
        console.error("SW Registration failed:", err);
      }
    });
  }
  window.addEventListener("load", doRegistration);
}());