<template>
  <section class="card-section">
    <div class="card">
      <div class="card__content">
        <h2 class="card__title">See softly<br>Feel freely</h2>
        <p class="card__sub">Brings a clean touch to everyday shades</p>
      </div>
      <div class="card__media">
        <img src="/imgs/logo-chains.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.card-section {
  padding: 0 12px;
  display: inline-flex;
  width: 100%;
  justify-content: center;
}

.card {
  position: relative;
  width: 100%;
  height: 680px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  overflow: hidden;
  background-image: url('/imgs/card-model-mobile.png');
  background-size: cover;
  
  @media (min-width: 768px) {
    max-width: min(90vw, 1360px);
    overflow: visible;
    background-image: url('/imgs/card-model-desktop.png');
    background-position-x: 110%;
  }

  &__content {
    position: relative;
    z-index: 1;
    padding: 20px 0 0 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: white;
    
    @media (min-width: 768px) {
      padding: 170px 0 0 62px;
      justify-content: flex-start;
      max-width: 480px;
      color: var(--shl-ref-color-tertiary);
    }
  }

  &__title {
    font-weight: 400;
    font-variation-settings: 'opsz' 14;
    font-size: clamp(48px, 6vw, 90px);
    line-height: 48px;
    letter-spacing: -1px;

    @media (min-width: 768px) {
      line-height: 84px;
    }
  }

  &__sub {
    font-weight: 400;
    font-variation-settings: 'opsz' 14;
    font-size: clamp(16px, 1.4vw, 28px);
    line-height: 32px;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 30%;
    background: linear-gradient(
      to bottom,
      #E44400 0%,
      color-mix(in srgb, #96FF6D 20%, transparent 80%) 80%,
      color-mix(in srgb, #96FF6D, transparent 100%) 100%
    );
    position: absolute;
    top: 0;
    left: 0;

    @media (min-width: 768px) {
      height: 50%;
      top: unset;
      bottom: 0;
      border-radius: 0 0 30px 30px;
      background: linear-gradient(
        to top,
        #E44400 0%,
        color-mix(in srgb, #96FF6D 20%, transparent 80%) 80%,
        color-mix(in srgb, #96FF6D, transparent 100%) 100%
      );
    }
  }

  &__media {
    padding-bottom: 40px;

    @media (min-width: 768px) {
      position: absolute;
      width: 100vw;
      bottom: 0;
      left: -60px;
      padding-bottom: 0;
    }
  }
}
</style>
