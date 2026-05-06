<template>
	<div
		class="group-tab"
		:style="{ '--count': options.length }">
		<div
			class="tab-highlight"
			:style="{ transform: `translateX(${selectedIndex * 100}%)` }" />
		<button
			v-for="option in options"
			:key="option.value"
			class="tab-btn"
			:class="{ active: modelValue === option.value }"
			@click="select(option.value)">
			{{ option.label }}
		</button>
	</div>
</template>

<script setup>
const props = defineProps({
	options: {
		type: Array,
		required: true,
	},
});

const emit = defineEmits(['update:modelValue', 'change']);
const modelValue = defineModel();

const selectedIndex = computed(() =>
	props.options.findIndex(o => o.value === modelValue.value),
);

function select(value) {
	modelValue.value = value;
	emit('change', value);
}
</script>

<style scoped lang="scss">
.group-tab {
	position: relative;
	display: flex;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 6px;
	padding: 2px;

	.tab-highlight {
		position: absolute;
		top: 2px;
		bottom: 2px;
		left: 2px;
		width: calc((100% - 4px) / var(--count));
		background: rgba(255, 255, 255, 0.15);
		border-radius: 4px;
		transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		pointer-events: none;
	}

	.tab-btn {
		flex: 1;
		position: relative;
		z-index: 1;
		border: none;
		background: none;
		color: #555;
		font-size: 14px;
		padding: 4px 10px;
		cursor: pointer;
		transition: color 0.2s;
		font-family: inherit;

		&.active {
			color: #fff;
		}

		&:hover:not(.active) {
			color: #999;
		}
	}
}
</style>
