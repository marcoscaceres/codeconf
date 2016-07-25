/* jshint worker: true */
// We need to get the files for the site
// e.g., find . -type f \( ! -iname ".DS_Store" \) -follow -print|xargs ls -l -1
// Watch for garbage!
// watch for defaults "index.html"

"use strict";
const siteFiles = [

];

/*
  "./",
  "./favicon.ico",
  "./images/background_1x.jpg",
  "./images/background_2x.jpg",
  "./images/background_2x_crop.jpg",
  "./images/battery_icon.png",
  "./images/calendar.svg",
  "./images/document.svg",
  "./images/github.svg",
  "./images/irc.svg",
  "./images/link.svg",
  "./images/logos.jpg",
  "./images/logos.pxm",
  "./images/mail.svg",
  "./images/phone.svg",
  "./images/splash.png",
  "./images/splash2x.png",
  "./images/twitter_white.svg",
  "./images/voip.svg",
  "./images/w3c_white.svg",
  "./images/webmob.svg",
  "./js/accordion.js",
  "./js/lib/async.js",
  "./js/registration.js",
  "./js/siteFiles.js",
  "./manifest.json",
  "./styles/fonts/nexa/Nexa_Bold.otf",
  "./styles/style.css",
  "./sw.js",
*/