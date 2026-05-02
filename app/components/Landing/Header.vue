<script setup lang="ts">
const { isMenuOpen } = useMenu();
</script>

<template>
    <header class="landing__header">
        <a
            href="#"
            class="landing__logo"
            :class="{'hide': isMenuOpen}">
            <img src="/imgs/logo-shyline.png" alt="shyline logo" />
        </a>

        <button
            :aria-expanded="isMenuOpen"
            aria-label="Toggle menu"
            class="landing__hamburger"
            :class="{'close': isMenuOpen}"
            @click="isMenuOpen = !isMenuOpen">
            <span />
            <span />
            <span />
        </button>
    </header>
</template>

<style scoped lang="scss">
.landing__header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--shl-ref-z-fix-header);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 12px;
    pointer-events: none;

    @media (min-width: 768px) {
        padding: 24px 80px;
    }

    >* {
        pointer-events: auto;
    }
}

.landing__logo {
    max-width: 108px;

    @media (min-width: 768px) {
        padding-top: 20px;
        max-width: 200px;
    }

    &.hide {
        opacity: 0;
        pointer-events: none;
    }
}

.landing__hamburger {
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    transition: gap .2s ease;

    &:not(.close):hover {
        gap: 12px;
    }
    
    span {
        display: block;
        width: 80px;
        height: 1px;
        background: var(--shl-ref-color-primary);
        transition: transform .3s ease-in-out;
    }

    &.close {
        --rotate-deg: 10deg;
        gap: 12px;

        span:nth-child(1) {
            transform-origin: left top;
            transform: rotate(var(--rotate-deg));
        }

        span:nth-child(2) {
            display: none;
        }

        span:nth-child(3) {
            transform-origin: left bottom;
            transform: rotate(calc(-1 * var(--rotate-deg)));
        }
    }
}

@media (max-width: 767px) {
    .landing__nav--open {
        display: flex;
        flex-direction: column;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.96);
        align-items: center;
        justify-content: center;
        gap: 32px;
        z-index: 99;

        .landing__nav-item {
            font-size: 20px;
            font-weight: 300;
            color: rgba(255, 255, 255, 0.7);
            letter-spacing: 0.06em;
        }
    }
}
</style>