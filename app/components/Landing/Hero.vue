<template>
  <section class="hero">
    <div class="hero__media">
      <div class="hero__image-placeholder" />
      <div class="hero__gradient-overlay" />
      <img
        src="/imgs/hero-logo-pattern.png"
        alt="Logo pattern"
        class="hero__pattern-overlay desktop" />
      <img
        src="/imgs/hero-logo-mobile.png"
        alt="Logo pattern"
        class="hero__pattern-overlay mobile" />
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
    mix-blend-mode: plus-lighter;
    
    &.mobile {
      top: 0;
      z-index: 1;
    }

    &.desktop {
      display: none;
    }
    
    @media (min-width: 768px) {
      &.mobile {
        display: none;
      }

      &.desktop {
        display: block;
        top: 50%;
      }
    }
  }

  &__content {
    position: absolute;
    z-index: 2;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    top: 80%;
    
    @media (min-width: 768px) {
      top: 50%;
      padding-left: 80px;
      max-width: 720px;
    }
  }

  &__title {
    font-size: clamp(36px, 6vw, 60px);
    font-weight: 400;
    font-variation-settings: 'opsz' 72;
    line-height: 1;
    color: var(--shl-ref-color-white);
  }

  &__subtitle {
    font-size: clamp(24px, 4vw, 32px);
    font-weight: 400;
    font-variation-settings: 'opsz' 72;
    line-height: 1;
    color: var(--shl-ref-color-white);
  }
}
</style>
