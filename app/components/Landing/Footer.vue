<script setup lang="ts">
import FlipLink from './FlipLink.vue';
import SunglassIcon from './SunglassIcon.vue';

</script>

<template>
  <footer class="footer">
    <div class="footer__cta">
      <h2 class="footer__headline">
        When daylight ends,<br>shyline begins
      </h2>
      <div class="footer__button">
        <FlipLink>
          <span class="footer__button-slot">
            Claim Your Distance
            <SunglassIcon />
          </span>
        </FlipLink>
      </div>
    </div>

    <nav class="footer__nav" aria-label="Footer navigation">
      <ul class="footer__nav-links">
        <li>
          <a href="#" class="footer__nav-link">contact</a>
        </li>
        <li>
          <a href="#" class="footer__nav-link">terms &amp; conditions</a>
        </li>
        <li>
          <a href="#" class="footer__nav-link">social media</a>
        </li>
      </ul>
      <span class="footer__nav-copyright">
        © 2026 Shyline all rights reserved
      </span>
    </nav>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 80px 12px 48px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  background-image: url('/imgs/footer-bg-pattern.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
    padding: 120px 80px 80px 80px;
    min-height: 100vh;
  }

  &__cta {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    margin-bottom: 80px;

    @media (min-width: 768px) {
      gap: 40px;
      margin-bottom: 120px;
    }
  }

  &__headline {
    font-size: clamp(28px, 5.5vw, 60px);
    line-height: 1.1;
    letter-spacing: -1px;
    font-weight: 400;
    font-variation-settings: 'opsz' 6;
    background: linear-gradient(135deg,
        #E44400 0%,
        #F257CA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
  }

  &__button-slot {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  &__icon {
    flex-shrink: 0;
    transition: transform 0.2s ease;

    .footer__button:hover & {
      transform: rotate(15deg);
    }
  }

  &__nav {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  
  &__nav-links {
    display: flex;
    flex-direction: column;
    gap: 8px;
    opacity: 0.5;
  
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  &__nav-link {
    font-size: 14px;
    color: white;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  &__nav-copyright {
    max-width: 105px;
    text-align: right;
    color: var(--shl-ref-color-primary);

    @media (min-width: 768px) {
      max-width: unset;
    }
  }
}
</style>
