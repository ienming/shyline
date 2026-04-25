<script setup lang="ts">
import CrossShape from './CrossShape.vue';

const preloadLinks = Array.from({ length: 125 }, (_, i) => {
  const padding = String(i).padStart(5, '0')
  return {
    rel: 'preload',
    as: 'image',
    href: `/imgs/sunset-ripple/sunset ripple_${padding}.jpg`,
  }
})

useHead({
  link: preloadLinks,
})
</script>

<template>
  <section class="manifesto">
    <div class="manifesto__sun-wrap">
      <h2 class="manifesto__heading manifesto__heading-desktop">Made for sunset</h2>
    </div>
    <h2 class="manifesto__heading manifesto__heading-mobile">Made for sunset</h2>
    <p class="manifesto__body text-body">
      shyline frames the moment when light softens, each detail too faint for
      ordinary eyes to catch. We meet you in the pause — just you and the lens,
      daring enough to keep on, striking enough to look back.
    </p>
    <div class="manifesto__image">
      <img src="/imgs/manifesto-pattern.jpg" alt="" />
    </div>
    <div class="manifesto__shape-container">
      <CrossShape />
    </div>
  </section>
</template>

<style scoped lang="scss">
.manifesto {
  padding: 0 12px;

  &__sun-wrap {
    width: min(80vw, 1260px);
    aspect-ratio: 1 / 1;
    margin: 0 auto;
    animation: sequence 12s infinite;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  &__heading {
    text-align: center;
    color: var(--shl-ref-color-primary);
    font-size: 28px;
    font-weight: 300;
    font-variation-settings: 'opsz' 0;
    margin-top: 3px;
  }

  &__heading-desktop {
    display: none;
  }

  &__heading-mobile {
    text-align-last: left;
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    &__heading-mobile {
      display: none;
    }

    &__heading-desktop {
      display: block;
    }
  }

  &__body {
    color: var(--shl-ref-color-secondary);
    max-width: 784px;
    margin: 0 auto;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 100px;
      left: 0;
      display: block;
      width: 100%;
      height: 200px;
      background-image: linear-gradient(
        to bottom,
        color-mix(in srgb, black, transparent 100%) 0%,
        black 100%,
      );
    }

    @media (min-width: 768px) {
      text-align: center;
    }
  }

  &__image {
    display: none;
    border: 1px solid blue;
    padding: 120px 0;

    &::after {
      content: '';
      display: block;
      border: 1px solid red;
      background-image: linear-gradient(
        to bottom,
        color-mix(in srgb black, transparent 100%) 0%,
        black 100%,
      );
    }

    @media (min-width: 768px) {
      display: block;
    }
  }

  &__shape-container {
    padding: 60px 0;
    margin: 0 auto;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}

@keyframes sequence {
  @for $i from 0 through 124 {
    $percent: percentage($i / 124);
    $padding: if($i < 10, '0000', if($i < 100, '000', if($i < 1000, '00', if($i < 10000, '0', ''))));
    
    #{$percent} {
      background-image: url('/imgs/sunset-ripple/sunset ripple_#{$padding}#{$i}.jpg');
    }
  }
}
</style>
