<template>
  <div class="landing">
    <!-- Minimal nav -->
    <header class="landing__header">
      <a href="#" class="landing__logo">
        <img src="/imgs/logo-shyline.png" alt="shyline logo" />
      </a>

      <button
        class="landing__hamburger"
        :aria-expanded="isNavOpen"
        aria-label="Toggle menu"
        @click="isNavOpen = !isNavOpen"
      >
        <span />
        <span />
        <span />
      </button>
    </header>

    <!-- Page sections -->
    <Hero />
    <ProductList />
    <BrandingManifesto />
    <Seasoning />
    <Card />
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
import Hero from '~/components/Landing/Hero.vue'
import ProductList from '~/components/Landing/ProductList.vue'
import BrandingManifesto from '~/components/Landing/BrandingManifesto.vue'
import Seasoning from '~/components/Landing/Seasoning.vue'
import Card from '~/components/Landing/Card.vue'
import LandingFooter from '~/components/Landing/Footer.vue'

const isNavOpen = ref(false);
</script>

<style lang="scss">
html, body {
    margin: 0;
    padding: 0;
    font-family: 'Degular', sans-serif;
}

.text-body {
  font-size: clamp(20px, 1.4vw, 32px);
  line-height: 22px;
  font-weight: 400;
  font-variation-settings: 'opsz' 0;

  @media (min-width: 768px) {
    line-height: 28px;
  }
}
</style>

<style scoped lang="scss">
@font-face {
  font-family: 'Degular';
  src: url('/shyline/font/fonnts.com-Degular_Variable.otf') format('opentype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

.landing {
  background: #000;
  min-height: 100vh;
  color: #fff;
}

// ── Header ──────────────────────────────────────────────────
.landing__header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  pointer-events: none;

  @media (min-width: 768px) {
    padding: 24px 80px;
  }

  > * {
    pointer-events: auto;
  }
}

.landing__logo {
  max-width: 108px;

  @media (min-width: 768px) {
    padding-top: 12px;
    max-width: 200px;
  }
}

.landing__hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  span {
    display: block;
    width: 80px;
    height: 1px;
    background: var(--shl-ref-color-primary);
  }
}

// Mobile nav overlay
@media (max-width: 767px) {
  .landing__nav--open {
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.96);
    align-items: center;
    justify-content: center;
    gap: 32px;
    z-index: 99;

    .landing__nav-item {
      font-size: 20px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.7);
      letter-spacing: 0.06em;
    }
  }
}
</style>
