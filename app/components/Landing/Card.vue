<script setup lang="ts">
</script>

<template>
  <section class="card-section">
    <div class="card">
      <div class="card__content">
        <p class="card__eyebrow">see softly</p>
        <h2 class="card__title">Feel freely</h2>
        <p class="card__sub">brings a linen touch to everyday shades.</p>
      </div>
      <div class="card__media">
        <div class="card__placeholder" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.card-section {
  background: #000;
  padding: 0 16px 80px;

  @media (min-width: 768px) {
    padding: 0 80px 120px;
  }
}

.card {
  position: relative;
  width: 100%;
  min-height: 320px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(
    130deg,
    #c74000 0%,
    #e05020 20%,
    #e06030 50%,
    #c85030 75%,
    #7a2800 100%
  );
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 400px;
    border-radius: 20px;
  }

  &__content {
    position: relative;
    z-index: 2;
    padding: 40px 32px 32px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (min-width: 768px) {
      padding: 64px 56px;
      justify-content: center;
      max-width: 480px;
    }
  }

  &__eyebrow {
    font-family: 'Degular', sans-serif;
    font-size: clamp(22px, 4vw, 36px);
    font-weight: 300;
    font-style: italic;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 4px;
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  &__title {
    font-family: 'Degular', sans-serif;
    font-size: clamp(38px, 6vw, 72px);
    font-weight: 600;
    font-style: italic;
    color: #fff;
    margin: 0 0 20px;
    letter-spacing: -0.03em;
    line-height: 1.0;
  }

  &__sub {
    font-family: 'Degular', sans-serif;
    font-size: clamp(12px, 1.4vw, 14px);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    letter-spacing: 0.03em;
    line-height: 1.6;
  }

  &__media {
    position: relative;
    flex-shrink: 0;
    height: 260px;

    @media (min-width: 768px) {
      width: 42%;
      height: auto;
    }
  }

  &__placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      160deg,
      rgba(255, 150, 80, 0.3) 0%,
      rgba(180, 60, 20, 0.5) 50%,
      rgba(80, 20, 0, 0.7) 100%
    );
    border-left: 1px solid rgba(255, 255, 255, 0.06);
  }
}
</style>
