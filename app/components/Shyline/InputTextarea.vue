<template>
	<textarea
		v-model="modelValue"
		:id="fieldName"
		:name="fieldName"
		:rows="rows"
		class="w-full input-textarea"
		@input="onInput" />
</template>

<script setup lang="ts">
const modelValue = defineModel<string>();
const {fieldName, rows} = defineProps({
	fieldName: {
		type: String,
		required: true,
	},
	rows: {
		type: Number,
		default: 3,
	},
});
const emit = defineEmits(['update:modelValue']);

function onInput(event: Event) {
	const target = event.target as HTMLTextAreaElement | null;
	if (!target) return;
	emit('update:modelValue', target.value);
}
</script>

<style lang="scss" scoped>
.input-textarea {
	background-color: #333;
	color: white;
	border-radius: 4px;
	padding: 8px;
	
	&:focus {
		outline: none;
		border-color: #aaa;
	}
}
</style>