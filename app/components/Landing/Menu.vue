<script setup lang="ts">
const { $gsap } = useNuxtApp();
const { isMenuOpen } = useMenu();

let ctx: gsap.Context;
const ads = [
    {
        id: 'amphibiams',
        model: '/imgs/menu-model-amphibians.png',
        title: 'amphibiams',
        price: '5,980',
        product_img: '/imgs/glass-amphibians.png',
    },
    {
        id: 'amphibiams',
        model: '/imgs/menu-model-amphibians.png',
        title: 'amphibiams',
        price: '5,980',
        product_img: '/imgs/glass-amphibians.png',
    },
    {
        id: 'amphibiams',
        model: '/imgs/menu-model-amphibians.png',
        title: 'amphibiams',
        price: '5,980',
        product_img: '/imgs/glass-amphibians.png',
    },
];
const adIndex = ref(0);
let adTimer: ReturnType<typeof setInterval>;

onMounted(() => {
    ctx = $gsap.context(() => {
        $gsap.from('.fly-in', {
            y: 30,
            stagger: 0.04,
        });
    });

    adTimer = setInterval(() => {
        if (adIndex.value < ads.length - 1) {
            adIndex.value += 1;
        } else {
            adIndex.value = 0;
        }
    }, 5000);
})

onUnmounted(() => {
    ctx && ctx.revert();
    clearInterval(adTimer);
})
</script>

<template>
    <section
        v-if="isMenuOpen"
        class="menu">
        <div class="menu__container">
            <div class="menu__search fly-in">
                <div class="menu__search-input-container">
                    <input
                        id="query"
                        type="text"
                        placeholder="What are you looking for?"
                        class="menu__search-input" />
                    <span class="material-symbols-outlined search-icon">search</span>
                </div>
                <div class="menu__ad-container">
                    <div
                        v-for="(ad, index) of ads"
                        class="menu__ad"
                        :class="{'active': index === adIndex}"
                        :style="`--bg-image: url('${ad.model}')`">
                        <div class="ad__product-card">
                            <div class="ad__product-info">
                                <div class="ad__product-header">
                                    <h4 class="ad__product-title">{{ ad.title }}</h4>
                                    <h5 class="ad__product-price">${{ ad.price }}</h5>
                                </div>
                                <button class="ad__product-cta">Detail</button>
                            </div>
                            <div class="ad__product-image-container">
                                <img :src="ad.product_img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu__nav">
                <nav>
                    <a href="" class="menu__nav-item">2026 Spring collection</a>
                    <a href="" class="menu__nav-item">On Sale</a>
                    <a href="" class="menu__nav-item">Bestseller</a>
                </nav>
                <a
                    href=""
                    class="menu__story">
                    <div class="menu__story-header">
                        <span class="menu__story-title">Story</span>
                        <span class="menu__story-subtitle">
                            about Shyline
                            <span class="material-symbols-outlined">arrow_right_alt</span>
                        </span>
                    </div>
                    <div class="menu__story-body"></div>
                </a>
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
    padding: 80px 60px;

    .menu__container {
        // border: 1px solid red;
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        display: flex;
        gap: 52px;
        transition: transform .3s ease;
    }

    .menu__search {
        flex: 3;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    
    .menu__search-input-container {
        padding: 16px 20px 16px 24px;
        border-radius: 999px;
        background-color: color-mix(in srgb, white 10%, transparent 90%);
        border: 1px solid color-mix(in srgb, white 12%, transparent 88%);
        display: flex;
        align-items: center;
        gap: 8px;

        .search-icon {
            opacity: 0.5;
        }
    }
    
    .menu__search-input {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        color: white;
        font-size: 20px;
    }

    .menu__ad-container {
        position: relative;
        width: 100%;
        height: 70vh;
        // aspect-ratio: 1 / 0.75;
    }

    .menu__ad {
        // border: 1px solid blue;
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        background-image: var(--bg-image);
        background-position-x: center;
        background-size: cover;
        overflow: hidden;
        opacity: 0;
        transition: .6s opacity ease-in-out;

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 4px;
            background-color: var(--shl-ref-color-primary);
            transition: width 5s linear;
        }

        &.active {
            opacity: 1;

            &::after {
                width: 100%;
            }

            .ad__product-card {
                bottom: 36px;
                opacity: 1;
            }
        }
    }

    .ad__product-card {
        // border: 1px solid purple;
        position: absolute;
        left: 50%;
        bottom: 0px;
        transform: translateX(-50%);
        border-radius: 8px;
        background-color: color-mix(in srgb, var(--shl-ref-color-black) 50%, transparent 50%);
        border: 1px solid color-mix(in srgb, white 20%, transparent 80%);
        backdrop-filter: blur(10px);
        display: flex;
        gap: 24px;
        padding: 20px;
        width: 545px;
        opacity: 0;
        transition: all .6s ease-in;
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
            text-transform: uppercase;
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

    .menu__nav-item {
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
        cursor: pointer;

        &:hover {
            .menu__story-title, .menu__story-body {
                opacity: 0.5;
            }

            .menu__story-body {
                background-size: 103%;
            }
        }
    }

    .menu__story-header {
        display: flex;
        align-items: end;
        justify-content: space-between;
    }

    .menu__story-title {
        font-size: 44px;
        letter-spacing: -5%;
        line-height: 40px;
        transition: opacity .3s;
    }

    .menu__story-subtitle {
        opacity: 0.75;
        display: flex;
        gap: 4px;
        align-items: center;
    }

    .menu__story-body {
        border-radius: 12px;
        height: 120px;
        background-image: url('/imgs/menu-pattern.png');
        background-size: 100%;
        background-origin: center center;
        transition: background-size .5s ease-in-out, opacity .3s;;
    }
}
</style>