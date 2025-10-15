<template>
	<label
		:for="fieldName"
		class="w-full input-select"
		:class="[`input-select--${type}`]">
		<select
			v-model="modelValue"
			:id="fieldName"
			:name="fieldName">
			<option
				v-for="opt of options"
				:key="opt.value"
				:value="opt.value">
				{{ opt.label }}
			</option>
		</select>
	</label>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

interface Option {
	value: string | number;
	label: string;
}

const modelValue = defineModel();
const {fieldName, options} = defineProps({
	fieldName: {
		type: String,
		required: true,
	},
	options: {
		type: Array as PropType<Array<Option>>,
		default:() => [],
	},
	type: {
		type: String,
		default: 'single',
		validator: (value: string) => ['single', 'group'].includes(value),
	},
});
</script>

<style lang="scss" scoped>
.input-select {
	--select-radius: 4px;
	align-self: stretch;

	select {
		cursor: pointer;
		width: 100%;
		height: 100%;
		padding: 0 8px;
		border-radius: 4px;
		border: none;
		background-color: #444;
        color: #fff;
		transition: background-color 0.3s, color 0.3s;

        &:hover:not(:disabled) {
            background-color: #222;
        }

		&:focus {
			outline: none;
		}
	}

	&--group {
		select {
			border-radius: 0 var(--select-radius) var(--select-radius) 0;
		}
	}
}
</style>