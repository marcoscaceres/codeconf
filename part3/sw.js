/* jshint worker: true */
/*globals async, caches, siteFiles, Response, fetch */
"use strict";
console.info("Hello, I'm the service worker!");
const SITE_CACHE = "v1";

// Let's start bringing in things we need

// Set up Service Worker tasks
const SWTasks = {
  cacheSite: async(function*(siteFiles, cacheName) {
    // Fill me in!
  }),
  networkFirst(request, cacheName) {
    // Fill me in!
  },
  deleteAllCaches: async(function*() {
    // Fill me in!
  }),
  respondFromCache: async(function*(request, cacheName) {
    // Fill me in!
  }),
  saveToCache: async(function*(request, response, cacheName) {
    // Fill me in!
  }),
};

// Let's set up life cycle listeners ("install", "activate", "fetch")
self.addEventListener("install", (ev) => {
  // Fill me in!
});

self.addEventListener("activate", (ev) => {
  // Fill me in!
});

self.addEventListener("fetch", (ev) => {
  // Fill me in!
});
