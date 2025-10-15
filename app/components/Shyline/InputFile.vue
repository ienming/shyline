<template>
	<label
		class="input-file"
		:for="fieldName">
		<div class="upload-area">
			<p class="title">{{ file ? fileName : 'Upload' }}</p>
			<img
				v-if="thumbnail"
				alt="Upload"
				class="thumbnail"
				:src="thumbnail" />
		</div>
		<input
			hidden
			:id="fieldName"
			:name="fieldName"
			:accept="accept"
			type="file"
			@change="change" />
	</label>
</template>

<script setup lang="ts">
const {fieldName, accept} = defineProps({
	fieldName: {
		type: String,
		required: true,
	},
	accept: {
		type: String,
		default: '*/*',
	},
});
const emit = defineEmits(['update:file']);
const file = ref<File | null>(null);
const thumbnail = ref<string>('');

const fileName = computed(() => file.value?.name || '');

function change(event: Event) {
	const target = event.target as HTMLInputElement;
	file.value = target.files?.[0] || null;
	emit('update:file', file.value);

	if (!file.value) return;
	if (file.value.type.startsWith('image/')) {
		thumbnail.value = URL.createObjectURL(file.value);
	} else if (file.value.type.startsWith('video/')) {
		const videoPlayer = document.createElement('video');
        videoPlayer.setAttribute('src', URL.createObjectURL(file.value));
		videoPlayer.load();
		videoPlayer.currentTime = 0.1;
		videoPlayer.addEventListener('seeked', () => {
			const canvas = document.createElement('canvas');
			canvas.width = videoPlayer.videoWidth;
			canvas.height = videoPlayer.videoHeight;
			const ctx = canvas.getContext('2d');
			if (ctx) {
				ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
				thumbnail.value = canvas.toDataURL('image/jpeg');
			}
			URL.revokeObjectURL(videoPlayer.src);
		});
	}
}
</script>

<style lang="scss" scoped>
.input-file {
	.upload-area {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 8px;
		border: 1px solid #666;
		border-radius: 4px;
		background-color: #333;
		cursor: pointer;
		transition: background 0.5s ease-out;
		margin: 8px 0;

		&:hover {
			border-color: #aaa;

			.title {
				color: #fff;
			}
		}

		.title {
			flex: 1;
			margin: 0;
			font-size: 14px;
			color: #aaa;
		}
	}
	.thumbnail {
		width: 50px;
		border-radius: 2px;
	}
}
</style>