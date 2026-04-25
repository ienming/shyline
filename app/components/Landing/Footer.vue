<template>
  <footer class="footer">
    <div class="footer__cta">
      <h2 class="footer__headline">
        When daylight ends,<br>shyline begins
      </h2>
      <a href="#" class="footer__button">
        <span>Claim Your Distance</span>
        <img src="/imgs/footer-cta-icon.png" alt="" class="footer__arrow">
      </a>
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
        © 2026 Shyline
      </span>
    </nav>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 80px 24px 48px;

  @media (min-width: 768px) {
    padding: 120px 80px 56px;
  }

  &__cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-bottom: 80px;

    @media (min-width: 768px) {
      gap: 40px;
      margin-bottom: 120px;
    }
  }

  &__headline {
    font-size: clamp(28px, 5.5vw, 60px);
    line-height: 62px;
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

  &__button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    line-height: 32px;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    padding-bottom: 4px;
    transition: color 0.2s ease, border-color 0.2s ease, gap 0.2s ease;

    &:hover {
      color: var(--shl-ref-color-secondary);
      border-color: var(--shl-ref-color-secondary);
      gap: 14px;
    }
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
  }
  
  &__nav-links {
    display: flex;
    gap: 12px 24px;
  
    @media (min-width: 768px) {
      gap: 8px 32px;
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
    color: var(--shl-ref-color-primary);
  }
}
</style>
