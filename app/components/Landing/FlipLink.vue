<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  href?: string
}>(), {
  href: '#',
})
</script>

<template>
  <a :href="href" class="flip-link">
    <span class="flip-link__wrap">
      <span class="flip-link__text flip-link__text--out">{{ label }}</span>
      <span class="flip-link__text flip-link__text--in">{{ label }}</span>
    </span>
  </a>
</template>

<style scoped lang="scss">
.flip-link {
  display: inline-block;
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  color: #fff;
  letter-spacing: 1px;
  padding-bottom: 3px;
  text-decoration: none;
  background-image: url('/imgs/shape-border.png');
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: 100% 2px;

  &__wrap {
    display: block;
    position: relative;
    perspective: 600px;
    height: 32px;
    width: 160px;
    // overflow: hidden;
  }

  &__text {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    white-space: nowrap;
    backface-visibility: hidden;
    transform-origin: center top;
    transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity .7s ease;
  }

  &__text--out {
    transform: rotateX(0deg) translateX(-50%);
    opacity: 1;
  }

  &__text--in {
    transform: rotateX(90deg) translateX(-50%);
    opacity: 0;
  }

  &:hover {
    .flip-link__text--out {
      transform: rotateX(-90deg) translateX(-50%);
      opacity: 0;
    }

    .flip-link__text--in {
      transform: rotateX(0deg) translateX(-50%);
      opacity: 1;
    }
  }
}
</style>
