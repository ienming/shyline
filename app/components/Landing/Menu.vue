<script lang="ts">
</script>

<template>
    <section class="menu">
        <div class="menu__container">
            <div class="menu__search">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    class="menu__search-input">
                <div class="menu__ad">
                    <div class="ad__product-card">
                        <div class="ad__product-info">
                            <div class="ad__product-header">
                                <h4 class="ad__product-title">AMPHIBIANS</h4>
                                <h5 class="ad__product-price">$5,980</h5>
                            </div>
                            <button class="ad__product-cta">Detail</button>
                        </div>
                        <div class="ad__product-image-container">
                            <img src="/imgs/glass-amphibians.png" alt="" />
                        </div>
                    </div>
                    <div class="menu__ad-time-indicator"></div>
                </div>
            </div>
            <div class="menu__nav">
                <nav>
                    <a href="" class="menu__nav-item">2026 Spring collection</a>
                    <a href="" class="menu__nav-item">On Sale</a>
                    <a href="" class="menu__nav-item">Bestseller</a>
                </nav>
                <div class="menu__story">
                    <div class="menu__story-header">
                        <a
                            href=""
                            class="menu__story-title">Story</a>
                        <span class="menu__story-subtitle">
                            about Shyline
                        </span>
                    </div>
                    <div class="menu__story-body"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.menu {
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--shl-ref-color-black);
    width: 100vw;
    height: 100vh;
    z-index: var(--shl-ref-z-fix);
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;

    .menu__container {
        // border: 1px solid red;
        width: 100%;
        max-width: 1300px;
        display: flex;
        gap: 52px;
        padding: 12px;
    }

    .menu__search {
        flex: 3;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .menu__search-input {
        padding: 16px 20px 16px 24px;
        border-radius: 999px;
        background-color: color-mix(in srgb, white 10%, transparent 90%);
        border: 1px solid color-mix(in srgb, white 12%, transparent 88%);
        outline: none;
        color: white;
    }

    .menu__ad {
        // border: 1px solid blue;
        position: relative;
        border-radius: 16px;
        aspect-ratio: 1 / 0.8;
        background-image: url('/imgs/menu-model-amphibians.png');
        background-position-x: center;
        background-size: cover;
    }

    .ad__product-card {
        // border: 1px solid purple;
        position: absolute;
        left: 50%;
        bottom: 36px;
        transform: translateX(-50%);
        border-radius: 8px;
        background-color: color-mix(in srgb, var(--shl-ref-color-black) 50%, transparent 50%);
        border: 1px solid color-mix(in srgb, white 20%, transparent 80%);
        backdrop-filter: blur(10px);
        display: flex;
        gap: 24px;
        padding: 20px;
        width: 545px;
    }

    .ad__product-info {
        display: flex;
        flex-direction: column;
        gap: 24px;
        flex: 1;
    }

    .ad__product-header {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .ad__product-title {
            font-variation-settings: 'wght' 400;
        }

        .ad__product-price {
            opacity: 0.6;
        }
    }

    .ad__product-cta {
        width: 100%;
        max-width: 138px;
        border-radius: 8px;
        background-color: var(--shl-ref-color-primary);
        color: var(--shl-ref-color-white);
        font-size: 16px;
        letter-spacing: -5%;
        padding: 8px 12px;
        transition: .3s background-color ease;
        cursor: pointer;

        &:hover {
            background-color: color-mix(in srgb, var(--shl-ref-color-primary) 90%, white 10%);
        }
    }

    .ad__product-image-container {
        max-width: 240px;
    }

    .menu__nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 2;
    }

    .menu__nav > nav {
        display: flex;
        flex-direction: column;
        gap: 36px;
    }

    .menu__nav-item, .menu__story-title {
        font-size: 44px;
        letter-spacing: -5%;
        line-height: 40px;
        transition: opacity .3s;

        &:hover {
            opacity: 0.5;
        }
    }

    .menu__story {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .menu__story-header {
        display: flex;
        align-items: end;
        justify-content: space-between;
    }

    .menu__story-body {
        border-radius: 12px;
        height: 120px;
        background: linear-gradient(to bottom, var(--shl-ref-color-secondary) 0%, var(--shl-ref-color-primary) 100%);
    }
}
</style>