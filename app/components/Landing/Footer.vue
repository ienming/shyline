<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <!-- Glow backdrop -->
    <div class="footer__glow" aria-hidden="true" />
    <div class="footer__scanlines" aria-hidden="true" />

    <div class="footer__cta">
      <h2 class="footer__headline">
        When daylight ends,<br>shyline begins
      </h2>
      <a href="#" class="footer__button">
        <span>Claim Your Distance</span>
        <svg class="footer__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="8" x2="14" y2="8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
          <polyline points="9,3 14,8 9,13" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </div>

    <nav class="footer__nav" aria-label="Footer navigation">
      <a href="#" class="footer__nav-link">home</a>
      <a href="#" class="footer__nav-link">terms &amp; conditions</a>
      <a href="#" class="footer__nav-link">about shyline</a>
    </nav>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  background: #000;
  overflow: hidden;
  padding: 80px 24px 48px;

  @media (min-width: 768px) {
    padding: 120px 80px 56px;
  }

  // ── Glow ──────────────────────────────────────────────────
  &__glow {
    position: absolute;
    left: 50%;
    bottom: -20%;
    transform: translateX(-50%);
    width: min(120vw, 900px);
    height: min(120vw, 900px);
    border-radius: 50%;
    background: radial-gradient(
      circle at 50% 70%,
      rgba(228, 70, 4, 0.35) 0%,
      rgba(228, 70, 4, 0.15) 30%,
      rgba(252, 97, 142, 0.06) 55%,
      transparent 70%
    );
    pointer-events: none;
  }

  &__scanlines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.45) 0px,
      rgba(0, 0, 0, 0.45) 3px,
      transparent 3px,
      transparent 7px
    );
    pointer-events: none;
    opacity: 0.4;
  }

  // ── CTA block ─────────────────────────────────────────────
  &__cta {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    margin-bottom: 80px;

    @media (min-width: 768px) {
      gap: 40px;
      margin-bottom: 120px;
    }
  }

  &__headline {
    font-family: 'Degular', sans-serif;
    font-size: clamp(28px, 5.5vw, 72px);
    font-weight: 500;
    font-style: italic;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0;
    background: linear-gradient(135deg, #E44604 0%, #FC618E 55%, rgba(255, 255, 255, 0.9) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'Degular', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: #fff;
    text-decoration: none;
    letter-spacing: 0.08em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    padding-bottom: 4px;
    transition: color 0.2s ease, border-color 0.2s ease, gap 0.2s ease;

    &:hover {
      color: #FC618E;
      border-color: #FC618E;
      gap: 14px;
    }
  }

  &__arrow {
    flex-shrink: 0;
    transition: transform 0.2s ease;

    .footer__button:hover & {
      transform: translateX(3px);
    }
  }

  // ── Nav ───────────────────────────────────────────────────
  &__nav {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;

    @media (min-width: 768px) {
      gap: 8px 32px;
    }
  }

  &__nav-link {
    font-family: 'Degular', sans-serif;
    font-size: 11px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.35);
    text-decoration: none;
    letter-spacing: 0.06em;
    transition: color 0.2s ease;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>
