<script setup lang="ts">
const { isMenuOpen } = useMenu();

const ads = [
    {
        id: 'amphibiams',
        model: '/imgs/menu-model-amphibians.png',
        title: 'amphibiams',
        price: '5,900',
        product_img: '/imgs/glass-amphibians.png',
    },
    {
        id: 'hawksbill',
        model: '/imgs/menu-model-hawksbill.png',
        title: 'hawksbill',
        price: '3,880',
        product_img: '/imgs/glass-hawksbill.png',
    },
    {
        id: 'golden-leaf',
        model: '/imgs/menu-model-golden-leaf.png',
        title: 'golden leaf',
        price: '5,980',
        product_img: '/imgs/glass-golden-leaf.png',
    },
];
const adIndex = ref(0);
let adTimer: ReturnType<typeof setInterval>;

onMounted(() => {
    adTimer = setInterval(() => {
        if (adIndex.value < ads.length - 1) {
            adIndex.value += 1;
        } else {
            adIndex.value = 0;
        }
    }, 5000);
})

onUnmounted(() => {
    clearInterval(adTimer);
})
</script>

<template>
    <Transition name="fade">
        <section
            v-if="isMenuOpen"
            class="menu">
            <div class="menu__container">
                <div class="menu__search">
                    <div class="menu__search-input-container">
                        <input
                            id="query"
                            type="text"
                            placeholder="Keyword or any style you want"
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
    </Transition>
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
    padding: 80px 20px;
    
    @media (min-width: 768px) {
        padding: 80px 60px;
    }

    .menu__container {
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 52px;
        transition: transform .3s ease;

        @media (min-width: 768px) {
            flex-direction: row;
        }
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
    }

    .menu__ad {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        background-image: var(--bg-image);
        background-position: center center;
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
            z-index: 1;

            &::after {
                width: 100%;
            }

            .ad__product-card {
                opacity: 1;
            }
        }
    }

    .ad__product-card {
        position: absolute;
        left: 50%;
        bottom: 0px;
        transform: translateX(-50%);
        border-radius: 20px 20px 0 0;
        background-color: color-mix(in srgb, var(--shl-ref-color-black) 50%, transparent 50%);
        border: 1px solid color-mix(in srgb, white 20%, transparent 80%);
        backdrop-filter: blur(10px);
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        opacity: 0;
        padding: 8px;
        transition: all .6s ease-in;
        
        @media (min-width: 768px) {
            width: 80%;
            max-width: 545px;
            border-radius: 8px;
            flex-direction: row;
            gap: 24px;
            margin-bottom: 36px;
            padding: 20px;
        }
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
        align-items: center;
        gap: 4px;

        @media (min-width: 768px) {
            align-items: start;
        }

        .ad__product-title {
            text-transform: uppercase;
            font-variation-settings: 'wght' 400;
            font-size: 18px;
        }

        .ad__product-price {
            opacity: 0.6;
        }
    }

    .ad__product-cta {
        width: 100%;
        border-radius: 8px;
        background-color: var(--shl-ref-color-primary);
        color: var(--shl-ref-color-white);
        font-size: 16px;
        letter-spacing: -5%;
        padding: 8px 12px;
        transition: .3s background-color ease;
        cursor: pointer;

        @media (min-width: 768px) {
            max-width: 152px;
        }

        &:hover {
            background-color: color-mix(in srgb, var(--shl-ref-color-primary) 90%, white 10%);
        }
    }

    .ad__product-image-container {
        max-width: 240px;
    }

    .menu__nav {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 36px;
        justify-content: space-between;
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