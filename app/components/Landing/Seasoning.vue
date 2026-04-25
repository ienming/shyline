<script setup lang="ts">
</script>

<template>
  <section class="seasoning">
    <div class="seasoning__inner">
      <!-- Year label -->
      <div class="seasoning__label">
        <span class="seasoning__year">2026</span>
        <span class="seasoning__icon" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="2.5" width="12" height="10.5" rx="1" stroke="white" stroke-width="1" fill="none" />
            <line x1="1" y1="5.5" x2="13" y2="5.5" stroke="white" stroke-width="1" />
            <line x1="4" y1="1" x2="4" y2="4" stroke="white" stroke-width="1" stroke-linecap="round" />
            <line x1="10" y1="1" x2="10" y2="4" stroke="white" stroke-width="1" stroke-linecap="round" />
          </svg>
        </span>
        <span class="seasoning__season">Spring</span>
      </div>

      <!-- Photo collage -->
      <div class="seasoning__collage">
        <div class="seasoning__photo seasoning__photo--1">
          <div class="seasoning__placeholder" />
        </div>
        <div class="seasoning__photo seasoning__photo--2">
          <div class="seasoning__placeholder" />
        </div>
        <div class="seasoning__photo seasoning__photo--3">
          <div class="seasoning__placeholder" />
        </div>
      </div>
    </div>

    <!-- Description -->
    <div class="seasoning__desc">
      <p class="seasoning__desc-text">
        Spring 2026 brings sunset-toned gradients and a cooler way to face the world.
        A subtle frame, a lasting impression — even after the sun goes down.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.seasoning {
  background: #000;
  padding: 0 0 80px;

  @media (min-width: 768px) {
    padding: 0 0 120px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 24px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
      gap: 0;
      padding: 0 80px;
    }
  }

  // ── Label block ───────────────────────────────────────────
  &__label {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      min-width: 140px;
      padding-top: 12px;
    }
  }

  &__year {
    font-family: 'Degular', sans-serif;
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 300;
    color: #fff;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    opacity: 0.55;
    position: relative;
    top: -2px;

    @media (min-width: 768px) {
      display: none;
    }
  }

  &__season {
    font-family: 'Degular', sans-serif;
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 300;
    color: #fff;
    letter-spacing: -0.02em;
    line-height: 1;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 6px;

      &::after {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        border: 1px solid rgba(255, 255, 255, 0.45);
        border-radius: 2px;
        background:
          linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px) 0 3px / 100% 3px no-repeat,
          linear-gradient(90deg, transparent 3px, rgba(255,255,255,0.2) 3px, rgba(255,255,255,0.2) 4px, transparent 4px) 0 0 / 4px 100% no-repeat;
      }
    }
  }

  // ── Collage ───────────────────────────────────────────────
  &__collage {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 768px) {
      flex: 1;
      height: 560px;
    }
  }

  &__photo {
    overflow: hidden;
    background: #111;
    border: 1px solid #1e1e1e;

    // Mobile: stacked photos
    &--1 {
      width: 100%;
      aspect-ratio: 3 / 4;

      @media (min-width: 768px) {
        position: absolute;
        width: 42%;
        height: 72%;
        top: 0;
        left: 22%;
        aspect-ratio: unset;
        z-index: 2;
      }
    }

    &--2 {
      width: 70%;
      aspect-ratio: 3 / 4;

      @media (min-width: 768px) {
        position: absolute;
        width: 32%;
        height: 60%;
        bottom: 0;
        left: 0;
        aspect-ratio: unset;
        z-index: 3;
        transform: rotate(-2deg);
      }
    }

    &--3 {
      width: 55%;
      align-self: flex-end;
      aspect-ratio: 3 / 4;

      @media (min-width: 768px) {
        position: absolute;
        width: 30%;
        height: 55%;
        top: 10%;
        right: 0;
        aspect-ratio: unset;
        z-index: 1;
        transform: rotate(1.5deg);
      }
    }
  }

  &__placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%);
    min-height: 200px;

    @media (min-width: 768px) {
      min-height: unset;
    }
  }

  // ── Description ───────────────────────────────────────────
  &__desc {
    padding: 40px 24px 0;

    @media (min-width: 768px) {
      padding: 48px 80px 0;
      max-width: 560px;
    }
  }

  &__desc-text {
    font-family: 'Degular', sans-serif;
    font-size: clamp(13px, 1.4vw, 15px);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.55);
    margin: 0;
    line-height: 1.8;
    letter-spacing: 0.02em;
  }
}
</style>
