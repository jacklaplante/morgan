const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jacklaplante/nonToast/morgan/.cache/dev-404-page.js"))),
  "component---src-pages-background-color-js": hot(preferDefault(require("/Users/jacklaplante/nonToast/morgan/src/pages/background-color.js"))),
  "component---src-pages-blur-up-js": hot(preferDefault(require("/Users/jacklaplante/nonToast/morgan/src/pages/blur-up.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jacklaplante/nonToast/morgan/src/pages/index.js"))),
  "component---src-pages-prefer-webp-js": hot(preferDefault(require("/Users/jacklaplante/nonToast/morgan/src/pages/prefer-webp.js"))),
  "component---src-pages-traced-svg-js": hot(preferDefault(require("/Users/jacklaplante/nonToast/morgan/src/pages/traced-svg.js")))
}

