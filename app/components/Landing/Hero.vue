<template>
  <section class="hero">
    <div class="hero__media">
      <div class="hero__image-placeholder" />
      <div class="hero__gradient-overlay" />
      <img
        src="/imgs/hero-logo-pattern.png"
        alt="Hero pattern"
        class="hero__pattern-overlay" />
    </div>

    <div class="hero__content">
      <h1 class="hero__title">Seen, but never exposed.</h1>
      <h2 class="hero__subtitle"> let them look, let them wonder</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  background: #000;

  &__media {
    position: absolute;
    inset: 0;
  }

  &__image-placeholder {
    width: 100%;
    height: 100%;
    background-image: url('/imgs/hero-mobile.jpg');
    background-size: cover;

    @media (min-width: 768px) {
      background-image: url('/imgs/hero-desktop.jpg');
    }
  }

  &__gradient-overlay {
    position: absolute;
    z-index: 1;
    inset: 0;
    width: 80%;
    background: linear-gradient(
      to right,
      var(--shl-ref-color-primary) 0%,
      color-mix(in srgb, var(--shl-ref-color-secondary) 20%, transparent 80%) 80%,
      color-mix(in srgb, var(--shl-ref-color-secondary), transparent 100%) 100%
    );

    @media (min-width: 768px) {
      width: 60%;
    }
  }

  &__pattern-overlay {
    position: absolute;
    top: 50%;
    mix-blend-mode: plus-lighter;

    @media (min-width: 768px) {
      
    }
  }

  &__content {
    position: absolute;
    top: 50%;
    z-index: 2;

    @media (min-width: 768px) {
      padding-left: 80px;
      max-width: 720px;
    }
  }

  &__title {
    font-family: 'Degular', sans-serif;
    font-size: 60px;
    font-weight: 400;
    font-variation-settings: 'opsz' 72;
    line-height: 52px;
    margin: 0 0 18px;
    color: var(--shl-ref-color-white);
  }

  &__subtitle {
    font-family: 'Degular', sans-serif;
    font-size: 32px;
    font-weight: 400;
    font-variation-settings: 'opsz' 72;
    line-height: 32px;
    color: var(--shl-ref-color-white);
  }
}
</style>
