<script setup lang="ts">
const products = [
  { id: 'amphibians', name: 'AMPHIBIANS', price: '$200' },
  { id: 'apple-eye', name: 'APPLE EYE', price: '$200' },
  { id: 'golden-leaf', name: 'GOLDEN LEAF', price: '$200' },
  { id: 'praying-mantis', name: 'PRAYING MANTIS', price: '$200' },
  { id: 'squid', name: 'SQUID', price: '$200' },
  { id: 'hawksbill', name: 'HAWKSBILL', price: '$200' },
]
</script>

<template>
  <section class="product-list">
    <div class="product-list__grid">
      <article
        v-for="product in products"
        :key="product.id"
        class="product-card">
        <div class="product-card__image-wrap">
          <img
            :src="`/imgs/glass-${product.id}-pattern.png`"
            alt=""
            class="product-card__image">
          <img
            :src="`/imgs/glass-${product.id}.png`"
            alt=""
            class="product-card__image-hover">
        </div>
        <div class="product-card__info">
          <h3 class="product-card__name">{{ product.name }}</h3>
          <p class="product-card__price">{{ product.price }}</p>
        </div>
      </article>
    </div>

    <div class="product-list__cta">
      <a href="#" class="product-list__link">List all shades</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-list {
  padding: 64px 24px 72px;

  @media (min-width: 768px) {
    padding: 96px 80px 96px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 32px 20px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 56px 48px;
    }
  }

  &__cta {
    display: flex;
    justify-content: center;
    margin-top: 48px;

    @media (min-width: 768px) {
      margin-top: 64px;
    }
  }

  &__link {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.08em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    padding-bottom: 3px;
    transition: color 0.2s ease, border-color 0.2s ease;

    &:hover {
      color: #fff;
      border-color: rgba(255, 255, 255, 0.7);
    }
  }
}

.product-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  cursor: pointer;

  &__image-wrap {
    position: relative;
    width: 100%;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    height: 170px;

    @media (min-width: 768px) {
      height: 250px;
    }
  }

  &__image, &__image-hover {
    position: absolute;;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }

  &__image-hover {
    opacity: 0;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  &__name {
    font-size: 20px;
    line-height: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: white;
  }

  &__price {
    font-size: 20px;
    line-height: 16px;
    font-weight: 300;
    color: white;
    filter: blur(3px);
  }

  &:hover .product-card__image {
    opacity: 0;
  }

  &:hover .product-card__image-hover {
    opacity: 1;
  }

  &:hover .product-card__price {
    filter: blur(0);
  }
}
</style>
