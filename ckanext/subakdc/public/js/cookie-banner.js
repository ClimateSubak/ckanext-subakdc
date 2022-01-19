"use strict";

function acceptCookieNotice(e) {
    // Set cookie for 1 year
  document.cookie = 'accept-cookie-policy=1; max-age=' + (60*60*24*365)
  _toggleCookieBanner()
}

function _toggleCookieBanner() {
  var banner = document.querySelector("#cookie-banner")
  banner.classList.toggle('hidden')
}

(function () {
  // If cookie isn't set, show the banner
  if (!document.cookie.split('; ').find(row => row.trim().startsWith('accept-cookie-policy'))) {
    _toggleCookieBanner()
  }
})()
