<template>
	<div class="color-picker">
		<div
			v-show="!isPickerShow"
			class="color-swatch"
			:style="{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }"
			@click="isPickerShow = !isPickerShow" />
		<ChromePicker
			ref="colorPicker"
			v-model="color"
			class="picker"
			:class="{show: isPickerShow}" />
	</div>
</template>

<script setup lang="ts">
import { ChromePicker } from 'vue-color';
import { onClickOutside } from '@vueuse/core';

interface RGB {
	r: number;
	g: number;
	b: number;
	a: number;
}

const colorPickerRef = useTemplateRef<InstanceType<typeof ChromePicker>>('colorPicker');
const color = defineModel<RGB>('color', {
	default: () => ({r: 0, g:0, b: 0, a: 1}),
});
const isPickerShow = ref(false);

onClickOutside(colorPickerRef, () => {
	isPickerShow.value = false;
});
</script>

<style lang="scss" scoped>
.color-picker {
	.picker {
		width: 100%;
		display: none;
		pointer-events: none;

		&.show {
			display: block;
			pointer-events: auto;
		}
	}

	.color-swatch {
		height: 30px;
		border-radius: 4px;
		cursor: pointer;
	}
}
</style>
