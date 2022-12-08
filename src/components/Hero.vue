<template>
  <div class="hero">
    <video width="100%" autoplay loop muted class="hero__desktop">
      <source src="defi-prague-hero-desktop.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <video width="100%" autoplay loop muted class="hero__mobile">
      <source src="defi-prague-hero-mobile.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="hero__content">
      <div class="hero__buttons">
        <!-- target="_blank" -->
        <a href="#" class="hero__button-link">
          <button class="hero__button">Apply as a speaker</button>
        </a>

        <!-- target="_blank" -->
        <a href="#" class="hero__button-link">
          <button class="hero__button">Sponsor DeFi Prague</button>
        </a>
      </div>

      <a href="mailto:contact@defiprague.com" class="hero__email-link">
        contact@defiprague.com
      </a>
    </div>

    <!-- Testing contentful connection -->
    <!-- <img v-if="useContentful().contentfulData.value" :src="useContentful().contentfulData.value?.[0].profileImage.url"> -->
  </div>
</template>

<script setup lang="ts">
// import useContentful from '~/api/useContentful'
</script>

<style scoped lang="stylus">
mobile-breakpoint = 650px

.hero
  display flex
  flex-direction column
  width 100%
  background-color black
  height 100vh
  padding clamp(0.5rem, 5vw, 1.5rem)
  max-width 1500px
  margin auto

.hero__desktop
  display none

  @media (min-width mobile-breakpoint)
    display block

.hero__mobile
  display flex

  @media (min-width mobile-breakpoint)
    display none

.hero__content
  display flex
  justify-content space-between
  flex-direction column
  flex 1
  margin-top 1.5rem
  gap 1.5rem

.hero__buttons
  display flex
  gap 1.5rem
  flex-direction column


.hero__button
  border-radius 50em
  border 1px solid white
  padding 0.5rem 1.5rem
  background-color black
  cursor pointer
  font-size clamp(1.5rem, 5vw, 2rem)
  font-weight 600


.hero__button-link
  text-decoration none
  width fit-content

.hero__email-link
  font-size 1.5rem
  text-decoration none
</style>
