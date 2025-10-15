<template>
	<div class="input-group">
		<input
			v-model.number="modelValue"
			:id="fieldName"
			type="radio"
			:value="value" />
		<label :for="fieldName">{{ fieldLabel || fieldName }}</label>
	</div>
</template>

<script setup lang="ts">
const modelValue = defineModel();
const {fieldName} = defineProps({
	fieldName: {
		type: String,
		required: true,
	},
	fieldLabel: {
		type: String,
		default: '',
	},
	value: {
		type: [String, Number, Boolean],
		required: true,
	},
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/input-group.scss';
</style>