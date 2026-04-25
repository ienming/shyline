<script setup lang="ts">
</script>

<template>
  <section class="seasoning">
    <div class="seasoning__label mobile">
      <span class="seasoning__year">
        2026
        <span class="seasoning__icon" aria-hidden="true">
          <img src="/imgs/icon-shoppingbad.png" alt="" />
        </span>
      </span>
      <span class="seasoning__season">Spring</span>
    </div>
    <div class="seasoning__inner">
      <div class="col-left">
        <div class="seasoning__label desktop">
          <span class="seasoning__year">
            2026
            <span class="seasoning__icon" aria-hidden="true">
              <img src="/imgs/icon-shoppingbad.png" alt="" />
            </span>
          </span>
          <span class="seasoning__season">Spring</span>
        </div>
        <div class="seasoning__collage-photo seasoning__photo--1">
          <img src="/imgs/seasoning-1.jpg" alt="" />
        </div>
        <div class="seasoning__desc">
          <p class="text-body seasoning__desc-text desktop">
            Spring 2026 brings sunset-toned gradients and a cooler way to face the world. A subtle barrier, a lasting
            impression—even after the sun goes down.
          </p>
        </div>
      </div>
      <div class="col-mid">
        <div class="seasoning__collage-photo seasoning__photo--2">
          <img src="/imgs/seasoning-2.jpg" alt="" />
        </div>
        <div class="seasoning__collage-photo seasoning__photo--3">
          <img src="/imgs/seasoning-3.jpg" alt="" />
        </div>
      </div>
      <div class="col-right">
        <div class="seasoning__collage-photo seasoning__photo--4">
          <img src="/imgs/seasoning-4.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="seasoning__desc">
      <p class="text-body seasoning__desc-text mobile">
        Spring 2026 brings sunset-toned gradients and a cooler way to face the world. A subtle barrier, a lasting
        impression—even after the sun goes down.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.seasoning {
  position: relative;

  @media (min-width: 768px) {
    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: 0;
      bottom: 10%;
      left: 50%;
      opacity: 0.8;
      transform-origin: center;
      transform: translateX(-50%) rotate(35deg);
      width: min(100%, 1320px);
      height: 300px;
      background-image: url('/imgs/seasoning-bg-logo-pattern.png');
      background-position-y: bottom;
      background-position-x: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  &__inner {
    display: flex;
    
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding-top: 400px;
      max-width: min(90vw, 1360px);
      margin: 0 auto;
    }
  }

  &__label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 36px;
    padding: 0 12px;

    &.desktop {
      display: none;
    }

    @media (min-width: 768px) {
      &.mobile {
        display: none;
      }

      &.desktop {
        display: block;
      }
    }
  }

  &__year {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 300;
    color: #fff;
    line-height: 1;
    display: inline-flex;
    align-items: baseline;
    gap: 12px;
  }

  &__season {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 300;
    color: #fff;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }

  .col-mid {
    display: flex;

    @media (min-width: 768px) {
      display: block;
    }
  }

  &__collage-photo {
    --photo-collage-z-base: 0;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 36%;
      height: 100%;
      background-color: red;
      background: linear-gradient(
        to right,
        var(--shl-ref-color-primary) 0%,
        color-mix(in srgb, var(--shl-ref-color-secondary) 20%, transparent 80%) 80%,
        color-mix(in srgb, var(--shl-ref-color-secondary), transparent 100%) 100%
      );
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &__photo {
    position: relative;

    &--1 {
      z-index: calc(var(--photo-collage-z-base) + 1);
    }

    &--2 {
      --offset-x: 60px;

      @media (min-width: 768px) {
        top: -240px;
        left: calc(var(--offset-x) * -1);
        width: calc(100% + var(--offset-x));
      }
    }

    &--3 {
      @media (min-width: 768px) {
        z-index: calc(var(--photo-collage-z-base) + 2);
        width: 80%;
        top: -300px;
        right: -50%;
      }
    }

    &--4 {
      @media (min-width: 768px) {
        width: 70%;
      }
    }
  }

  &__desc-text {
    position: relative;
    z-index: 1;
    font-size: clamp(13px, 4vw, 36px);
    font-weight: 400;
    color: var(--shl-ref-color-primary);
    line-height: 1;
    margin-bottom: 80px;
    padding: 0 12px;
    
    &.desktop {
      display: none;
    }

    @media (min-width: 768px) {
      margin-top: 480px;

      &.mobile {
        display: none;
      }

      &.desktop {
        display: block;
      }
    }
  }
}
</style>
