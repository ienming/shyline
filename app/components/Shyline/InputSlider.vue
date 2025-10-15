<template>
	<label
		:for="fieldName"
		class="input-slider">
		<div class="field-name">
			<span class="label">{{ fieldLabel || fieldName }}</span>
			<span class="value">{{ modelValue }}</span>
		</div>
		<input
			ref="range"
			v-model.number="modelValue"
			type="range"
			class="w-full"
			:id="fieldName"
			:min="min"
			:max="max"
			:step="step"
			@input="onInput" />
	</label>
</template>

<script setup lang="ts">
const modelValue = defineModel<number>();
const { fieldName, min, max, step } = defineProps({
	fieldName: {
		type: String,
		required: true,
	},
	fieldLabel: {
		type: String,
		default: '',
	},
	min: {
		type: Number,
		default: 0,
	},
	max: {
		type: Number,
		default: 2,
	},
	step: {
		type: Number,
		default: 0.1,
	},
});
const emit = defineEmits(['update:modelValue']);
const rangeRef = useTemplateRef<HTMLInputElement>('range');

const rangeTrackColor = '#999';
const rangeBackgroundColor = '#333';

onMounted(() => {
	updateProgress();
})

function updateProgress() {
	if (!rangeRef.value) return;
	const value = (((modelValue.value ?? min) - min) / (max - min)) * 100;
	rangeRef.value.style.background = `linear-gradient(to right, ${rangeTrackColor} 0%, ${rangeTrackColor} ${value}%, ${rangeBackgroundColor} ${value}%, ${rangeBackgroundColor} 100%)`;
}

function onInput(event: Event) {
	const target = event.target as HTMLInputElement | null;
	if (!target) return;
	updateProgress();
	emit('update:modelValue', target.valueAsNumber);
}
</script>

<style lang="scss" scoped>
@use 'input-range-scss' with (
	$track-color: transparent,
	$track-height: 6px,
	$track-border-width: 0px,
	$thumb-color: #999,
	$thumb-height: 14px,
	$thumb-width: 14px,
	$thumb-border-width: 0px,
);

.input-slider {
	.field-name {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 4px;

		.label {
			font-size: 14px;
		}

		.value {
			display: inline-block;
			background-color: #333;
			color: #ccc;
			padding: 2px 6px;
			border-radius: 4px;
			font-size: 12px;
		}
	}

	input[type='range'] {
		&::-webkit-slider-thumb, &::-webkit-slider-runnable-track {
			cursor: pointer;
		}
	}
}
</style>