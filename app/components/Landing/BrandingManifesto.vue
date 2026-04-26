<script setup lang="ts">
import CrossShape from './CrossShape.vue';
import { breakpointsAntDesign } from '@vueuse/core';

const { $gsap } = useNuxtApp();
const manifestoRef = useTemplateRef('manifesto');
const breakpoints = useBreakpoints(breakpointsAntDesign);
let ctx: gsap.Context;

const preloadLinks = Array.from({ length: 125 }, (_, i) => {
  const padding = String(i).padStart(5, '0')
  return {
    rel: 'preload',
    as: 'image' as const,
    href: `/imgs/sunset-ripple/sunset ripple_${padding}.jpg`,
  }
});
const taglines = [
  'Made for sunset',
  'Born for golden hour',
  'Where light softens',
  'The pause before dark',
  'Dare to look back',
];
const currentTaglineIndex = ref(0);
const currentTagline = computed(() => taglines[currentTaglineIndex.value]);
let taglineInterval: ReturnType<typeof setInterval>;
const TAGLINE_INTERVAL = 3000;

useHead({
  link: preloadLinks,
});

onMounted(() => {
  taglineInterval = setInterval(() => {
    currentTaglineIndex.value = (currentTaglineIndex.value + 1) % taglines.length;
  }, TAGLINE_INTERVAL);

  if (breakpoints.smaller('md').value) return;
  if (!manifestoRef.value) return;

  ctx = $gsap.context(() => {
    const tl = $gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: '.manifesto__bg',
        markers: true,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: 'bottom top',
        // pinSpacing: false,
      },
    });

    tl
      .to('.manifesto__video', {
        scale: 1,
        duration: 1,
      })
      .to('.manifesto__overlay', {
        opacity: 1,
        duration: 2,
      });
  }, manifestoRef.value);
});

onUnmounted(() => {
  clearInterval(taglineInterval);
  ctx && ctx.revert();
});
</script>

<template>
  <section
    ref="manifesto"
    class="manifesto">
    <div class="manifesto__sun-wrap">
      <h2 class="manifesto__heading manifesto__heading-desktop">
        <span class="manifesto__tagline-wrap">
          <Transition name="tagline-flip">
            <span :key="currentTagline" class="manifesto__tagline">{{ currentTagline }}</span>
          </Transition>
        </span>
      </h2>
    </div>
    <h2 class="manifesto__heading manifesto__heading-mobile">Made for sunset</h2>
    <p class="manifesto__body text-body">
      shyline frames the moment when light softens, each detail too faint for
      ordinary eyes to catch. We meet you in the pause — just you and the lens,
      daring enough to keep on, striking enough to look back.
    </p>
    <div class="manifesto__bg">
      <div class="manifesto__video">
        <video
          src="/video/glasses&butterfly.webm"
          loop
          muted
          autoplay />
      </div>
      <div class="manifesto__overlay">
        <p class="text-body">
          Manifesto...
        </p>
      </div>
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
    width: min(100%, 1260px);
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

  &__tagline-wrap {
    display: block;
    position: relative;
    perspective: 600px;
    height: 1.4em;
  }

  &__tagline {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    display: block;
    white-space: nowrap;
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
    max-width: 940px;
    margin: 0 auto;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 100px;
      left: 0;
      width: 100%;
      height: 200px;
      background-image: linear-gradient(
        to bottom,
        color-mix(in srgb, black, transparent 100%) 0%,
        black 100%,
        );
      display: none;
      }
      
    @media (min-width: 768px) {
      text-align: center;

      &::after {
        display: block;
      }
    }
  }

  &__bg {
    --padding-bottom: 120px;
    display: none;
    padding: var(--padding-bottom) 0;
    height: 100vh;
    position: relative;
    // border: 2px solid blue;
    
    .manifesto__video {
      position: relative;
      transform-origin: center bottom;
      transform: scale(0);
      
      >video {
        width: 100%;
        height: 100%;
      }

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 200px;
        position: absolute;
        bottom: 0;
        background-image: linear-gradient(
          to top,
          black 0%,
          color-mix(in srgb, black, transparent 100%) 100%,
        );
      }
    }


    @media (min-width: 768px) {
      display: block;
    }
  }

  &__overlay {
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.35);
    height: 100vh;
    width: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(3px);
    // border: 2px solid purple;
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

.tagline-flip-enter-active,
.tagline-flip-leave-active {
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
  transform-origin: center top;
}

.tagline-flip-enter-from {
  transform: rotateX(90deg) translateX(-50%);
  opacity: 0;
}

.tagline-flip-enter-to {
  transform: rotateX(0deg) translateX(-50%);
  opacity: 1;
}

.tagline-flip-leave-from {
  transform: rotateX(0deg) translateX(-50%);
  opacity: 1;
}

.tagline-flip-leave-to {
  transform: rotateX(-90deg) translateX(-50%);
  opacity: 0;
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
