/* jshint worker: true */
/*globals async, caches, siteFiles, Response, fetch */
"use strict";

// Let's check that the SW script loaded
console.log("Hello, I'm the service worker!");

// // Let's start bringing in things we need
importScripts("js/lib/async.js");

// // Set up Service Worker tasks
// const SWTasks = {
//   deleteAllCaches: async(function*() {
//     // Fill me in
//   }),
//   cacheSite: async(function*(ev, siteFiles) {
//     // Fill me in
//   }),
//   respondFromCache: async(function*(request, cacheName) {
//     // Fill me in
//   }),
//   hasCacheEntry: async(function*(request, cacheName) {
//     // Fill me in
//   }),
// };

// // Let's set up life cycle listeners ("install", "activate", "fetch")
self.addEventListener("install", async(function*(ev) {
  // Fill me in
  console.log("install");
}));

self.addEventListener("activate", async(function*(ev) {
  // Fill me in
  console.log("active");
}));

self.addEventListener("fetch", function(ev) {
  // Fill me in
  console.log("fetching", ev.request.url);
});
