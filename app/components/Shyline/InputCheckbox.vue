<template>
	<div class="input-group">
		<input
			v-model.number="modelValue"
			:id="fieldName"
			type="checkbox" />
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
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/input-group.scss';
</style>