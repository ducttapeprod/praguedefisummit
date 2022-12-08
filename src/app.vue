
<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// import useContentful from '~/api/useContentful'
// const { fetchContentfulData } = useContentful()

onMounted(async () => {
  // await fetchContentfulData()
})

</script>

<style lang="stylus">
@import url("https://p.typekit.net/p.css?s=1&k=yis7juv&ht=tk&f=39496.39498.39504.39506&a=2002437&app=typekit&e=css")

*
  box-sizing border-box

:root
  // colors
  // --col-primary-action #0aff44
  // --col-secondary-action #61ffff
  // --col-primary-accent #ff0
  --col-light-gray-bg rgb(0 0 0 / 8%)
  --mobile-breakpoint 1120px
  --app-padding 15px

html
  scroll-behavior smooth
  transition all 0.3s

body *
  font-family neue-haas-grotesk-display, sans-serif
  color white

body
  margin 0
  background-color black


/*
 * The Typekit service used to deliver this font or fonts for use on websites
 * is provided by Adobe and is subject to these Terms of Use
 * http://www.adobe.com/products/eulas/tou_typekit. For font license
 * information, see the list below.
 *
 * neue-haas-grotesk-display:
 *   - http://typekit.com/eulas/00000000000000007735bb5a
 *   - http://typekit.com/eulas/00000000000000007735bb62
 * neue-haas-grotesk-text:
 *   - http://typekit.com/eulas/00000000000000007735bb33
 *   - http://typekit.com/eulas/00000000000000007735bb32
 *
 * © 2009-2022 Adobe Systems Incorporated. All Rights Reserved.
 */
// {"last_published":"2022-11-29 10:32:56 UTC"}

@font-face
  font-family neue-haas-grotesk-display
  src url("https://use.typekit.net/af/1ba16c/00000000000000007735bb5a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"), url("https://use.typekit.net/af/1ba16c/00000000000000007735bb5a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"), url("https://use.typekit.net/af/1ba16c/00000000000000007735bb5a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype")
  font-display auto
  font-style normal
  font-weight 500
  font-stretch normal


@font-face
  font-family neue-haas-grotesk-display
  src url("https://use.typekit.net/af/153042/00000000000000007735bb62/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"), url("https://use.typekit.net/af/153042/00000000000000007735bb62/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"), url("https://use.typekit.net/af/153042/00000000000000007735bb62/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype")
  font-display auto
  font-style normal
  font-weight 600
  font-stretch normal


@font-face
  font-family neue-haas-grotesk-text
  src url("https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"), url("https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"), url("https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype")
  font-display auto
  font-style normal
  font-weight 400
  font-stretch normal


@font-face
  font-family neue-haas-grotesk-text
  src url("https://use.typekit.net/af/160664/00000000000000007735bb32/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"), url("https://use.typekit.net/af/160664/00000000000000007735bb32/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"), url("https://use.typekit.net/af/160664/00000000000000007735bb32/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype")
  font-display auto
  font-style normal
  font-weight 500
  font-stretch normal


.tk-neue-haas-grotesk-display
  font-family neue-haas-grotesk-display, sans-serif

.tk-neue-haas-grotesk-text
  font-family neue-haas-grotesk-text, sans-serif

</style>
