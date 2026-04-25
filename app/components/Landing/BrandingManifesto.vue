<script setup lang="ts">
import CrossShape from './CrossShape.vue';

</script>

<template>
  <section class="manifesto">
    <div class="manifesto__sun-wrap">
      <div class="manifesto__sun" />
      <h2 class="manifesto__heading">Made for after the run.</h2>
    </div>
    <p class="manifesto__body text-body">
      shyline frames the moment when light softens, each detail too faint for
      ordinary eyes to catch. We meet you in the pause — just you and the lens,
      daring enough to keep on, striking enough to look back.
    </p>
    <!-- Manifesto image -->
    <div class="manifesto__image">
    </div>
    <div class="manifesto__shape-container">
      <CrossShape />
    </div>
  </section>
</template>

<style scoped lang="scss">
.manifesto {
  background: #000;
  overflow: hidden;

  &__sun-wrap {
    position: relative;
    width: 100%;
    height: 280px;
    overflow: hidden;

    @media (min-width: 768px) {
      height: 480px;
    }
  }

  &__sun {
    position: absolute;
    left: 50%;
    bottom: -10%;
    transform: translateX(-50%);
    width: min(100vw, 640px);
    height: min(100vw, 640px);
    border-radius: 50%;
    background: radial-gradient(
      circle at 50% 60%,
      rgba(255, 255, 255, 0.9) 0%,
      #FC618E 8%,
      #E44604 20%,
      rgba(228, 70, 4, 0.55) 36%,
      rgba(180, 40, 0, 0.25) 52%,
      rgba(100, 15, 0, 0.08) 68%,
      transparent 80%
    );
    filter: blur(1px);

    @media (min-width: 768px) {
      width: min(90vw, 900px);
      height: min(90vw, 900px);
    }
  }

  &__heading {
    text-align: center;
    color: var(--shl-ref-color-primary);
    font-size: 28px;
    font-weight: 300;
    font-variation-settings: 'opsz' 0;;
  }

  &__body {
    text-align: center;
    color: var(--shl-ref-color-secondary);
    max-width: 784px;
    margin: 0 auto;
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
</style>
