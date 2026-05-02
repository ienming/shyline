<script setup lang="ts">
import Hero from '~/components/Landing/Hero.vue'
import ProductList from '~/components/Landing/ProductList.vue'
import BrandingManifesto from '~/components/Landing/BrandingManifesto.vue'
import Seasoning from '~/components/Landing/Seasoning.vue'
import Card from '~/components/Landing/Card.vue'
import LandingFooter from '~/components/Landing/Footer.vue'
import Menu from '~/components/Landing/Menu.vue'
import Header from '~/components/Landing/Header.vue'

const lenisOptions = {
  smooth: true,
  duration: 0.5,
  autoRaf: true,
  direction: 'vertical',
};
</script>

<template>
  <!-- <Lenis :options="lenisOptions">
  </Lenis> -->
  <div class="landing">
    <Header />
    <!-- Page sections -->
    <Hero />
    <ProductList />
    <BrandingManifesto />
    <Seasoning />
    <Card />
    <LandingFooter />
    <!-- Menu -->
    <Menu />
  </div>
</template>

<style lang="scss">
html, body {
    margin: 0;
    padding: 0;
}

.text-body {
  font-size: clamp(20px, 1.4vw, 32px);
  line-height: 22px;
  font-weight: 400;
  font-variation-settings: 'opsz' 6;

  @media (min-width: 768px) {
    line-height: 28px;
  }
}

.shyline-link {
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  color: #fff;
  letter-spacing: 1px;
  padding-bottom: 3px;
  transition: color 0.2s ease, border-color 0.2s ease;
  background-image: url('/imgs/shape-border.png');
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: 100% 2px;
  transition: letter-spacing .2s ease;

  &:hover {
    letter-spacing: 2px;
  }
}
</style>

<style scoped lang="scss">
.landing {
  background: #000;
  min-height: 100vh;
  color: #fff;
  overflow: hidden;
}
</style>
