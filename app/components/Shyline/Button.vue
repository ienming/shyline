<template>
    <button
        :class="['shyline-button', `shyline-button--${variant}`, `shyline-button--${size}`, type === 'group' ? 'shyline-button--group' : '']"
        :disabled="disabled">
        <slot />
    </button>
</template>

<script setup lang="ts">
const { variant, size, disabled } = defineProps({
    variant: {
        type: String,
        default: 'primary', // primary, secondary, tertiary
        validator: (value: string) => ['primary', 'secondary', 'tertiary'].includes(value),
    },
    size: {
        type: String,
        default: 'medium', // small, medium, large
        validator: (value: string) => ['small', 'medium', 'large'].includes(value),
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'single',
        validator: (value: string) => ['single', 'group'].includes(value),
    }
});
</script>

<style lang="scss" scoped>
.shyline-button {
    --button-radius: 4px;
    border: none;
    border-radius: var(--button-radius);
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    user-select: none;
    padding: 0 16px;
    font-size: 14px;
    line-height: 36px;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
    &--small {
        height: 30px;
        font-size: 12px;
        padding: 0 12px;
        line-height: 30px;
    }
    &--large {
        height: 44px;
        font-size: 16px;
        padding: 0 20px;
        line-height: 44px;
    }
    &--primary {
        background-color: #444;
        color: #fff;
        &:hover:not(:disabled) {
            background-color: #222;
        }
    }
    &--secondary {
        background-color: #6c757d;
        color: #fff;
        &:hover:not(:disabled) {
            background-color: darken(#6c757d, 10%);
        }
    }
    &--tertiary {
        background-color: transparent;
        color: #007bff;
        border: 2px solid #007bff;
        &:hover:not(:disabled) {
            background-color: #007bff;
            color: #fff;
        }
    }
    &--group {
        border-radius: var(--button-radius) 0 0 var(--button-radius);
        border-right: 1px solid #666;
    }
}
</style>
