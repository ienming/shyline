<template>
	<div class="shyline">
		<div
			ref="canvasContainer"
			class="canvas-container" />
		<button
			class="toggle-ui-btn"
			@click="isUIShow = !isUIShow">
			{{ isUIShow ? 'Close' : 'Open' }} UI
		</button>
		<div
			class="ui-container"
			:class="{ open: isUIShow }">
			<div
				class="close"
				@click="isUIShow = false">
				<span>CLOSE</span>
			</div>
			<div class="controller-container">
				<div class="mode-container">
					<InputRadio
						v-model="mode"
						:fieldName="MODE.TEXT"
						fieldLabel="Text"
						:value="MODE.TEXT"
						@change="clearVideo(); refreshBuffer();" />
					<InputRadio
						v-model="mode"
						:fieldName="MODE.IMAGE"
						fieldLabel="Image"
						:value="MODE.IMAGE"
						@change="clearVideo(); refreshBuffer();" />
					<InputRadio
						v-model="mode"
						:fieldName="MODE.VIDEO"
						fieldLabel="Video"
						:value="MODE.VIDEO"
						@change="clearVideo(); refreshBuffer();" />
				</div>
				<div class="input-container">
					<InputTextarea
						v-if="mode === MODE.TEXT"
						v-model="inputText"
						fieldName="text"
						:rows="4"
						@update:modelValue="refreshBuffer" />
					<InputFile
						v-else-if="mode === MODE.IMAGE"
						fieldName="image"
						accept="image/png, image/jpeg, image/webp, image/avif"
						@update:file="handleImgUpdate" />
					<InputFile
						v-else-if="mode === MODE.VIDEO"
						fieldName="video"
						accpet="video/mp4, video/webm"
						@update:file="handleVideoUpdate" />
				</div>
				<InputSlider
					v-if="mode === MODE.TEXT"
					v-model="textSize"
					fieldName="textSize"
					:min="80"
					:max="400"
					:step="1"
					@update:modelValue="refreshBuffer" />
				<InputSlider
					v-if="mode === MODE.TEXT"
					v-model="inputLineHeight"
					fieldName="lineHeight"
					:min="0"
					:max="2"
					:step="0.1"
					@update:modelValue="refreshBuffer" />
				<InputSlider
					v-if="mode === MODE.IMAGE || mode === MODE.VIDEO"
					v-model="mediaScale"
					fieldName="mediaScale"
					fieldLabel="imageSize"
					:min="0.1"
					:max="2"
					:step="0.1"
					@update:modelValue="refreshBuffer" />
				<InputSlider
					v-model="sampling"
					fieldName="sampling"
					fieldLabel="samplingInterval"
					:min="8"
					:max="20"
					:step="1"
					@update:modelValue="refreshBuffer" />
				<InputSlider
					v-model="maxThickness"
					fieldName="maxThickness"
					:min="3"
					:max="18"
					:step="1" />
				<InputSlider
					v-model="amp"
					fieldName="amp"
					:min="0"
					:max="40"
					:step="1" />
				<InputSlider
					v-model="freq"
					fieldName="freq"
					:min="0"
					:max="0.05"
					:step="0.01" />
				<InputSlider
					v-model="speed"
					fieldName="speed"
					:min="0.01"
					:max="0.1"
					:step="0.01" />
				<InputSlider
					v-model="waveAngle"
					fieldName="waveAngle"
					:min="0"
					:max="360"
					:step="1" />
				<InputCheckbox
					v-model="showWave"
					fieldName="showWave" />
				<ClientOnly>
					<div class="bg-color-container">
						bgColor
						<ColorPicker v-model:color="bgColor" />
					</div>
				</ClientOnly>
				<ClientOnly>
					<div class="recommend-colors">
						<div class="combinations">
							<div
								v-for="c of colorRecommends"
								:key="c.id"
								class="recommend-color-combination"
								:data-start="rgbToString(c.start)"
								:data-end="rgbToString(c.end)"
								@click="updateColorCombination(c)" />
						</div>
						<span
							class="random-btn"
							@click="randomColor">Random</span>
					</div>
					<div class="color-container">
						<ColorPicker v-model:color="colorStart" />
						<ColorPicker v-model:color="colorEnd" />
					</div>
				</ClientOnly>
			</div>
			<div class="recording-container">
				<Button @click="startRecord">
					{{ isRecording ? 'Recording...' : 'Start Record' }}
				</Button>
			</div>
			<div class="save-container">
				<Button
					type="group"
					@click="saveCanvas">
					{{ isCanvasSaving ? 'Saving...' : 'Save Image' }}
				</Button>
				<InputSelect
					v-model="saveResolution"
					fieldName="resolution"
					type="group"
					:options="Array.from({ length: maxResolution }, (_, i) => ({ label: `${i + 1}x`, value: i + 1 }))" />
			</div>
		</div>
	</div>
</template>

<script setup>
import ColorPicker from './ColorPicker.vue';
import Button from './Button.vue';
import InputCheckbox from './InputCheckbox.vue';
import InputRadio from './InputRadio.vue';
import InputSlider from './InputSlider.vue';
import InputTextarea from './InputTextarea.vue';
import InputFile from './InputFile.vue';
import InputSelect from './InputSelect.vue';

const { $p5 } = useNuxtApp();
const canvasContainerRef = useTemplateRef('canvasContainer');
let canvasEl;
let p5Instance;
const MODE = {
	TEXT: 'TEXT',
	IMAGE: 'IMAGE',
	VIDEO: 'VIDEO',
};

const mode = ref(MODE.TEXT);
const inputText = ref(`This is\nShyline 👓`);
const img = ref(null);
const video = ref(null);
const isCanvasSaving = ref(false);
let recorder;
const videoChunks = [];
const videoConfig = {
	mimeType: 'video/webm;codecs=av1',
	videoBitsPerSecond: 10_000_000,
};
const frameRate = 30;

const colorRecommends = [
	{
		id: 0,
		start: { r: 245, g: 69, b: 0 },
		end: { r: 252, g: 164, b: 227 },
	}, {
		id: 1,
		start: { r: 3, g: 255, b: 92 },
		end: { r: 255, g: 102, b: 248 },
	}, {
		id: 2,
		start: { r: 0, g: 81, b: 255 },
		end: { r: 234, g: 255, b: 128 },
	}, {
		id: 3,
		start: { r: 79, g: 190, b: 255 },
		end: { r: 8, g: 39, b: 105 },
	},
];

// UI
const isUIShow = ref(false);
const isRecording = ref(false);
const bgColor = ref({ r: 0, g: 0, b: 0 });
const mediaScale = ref(1);
const textSize = ref(200);
const inputLineHeight = ref(0.9);
const sampling = ref(10);
const maxThickness = ref(6);
const amp = ref(20);
const freq = ref(0.01);
const speed = ref(0.02);
const waveAngle = ref(360);
const showWave = ref(true);
const colorStart = ref(colorRecommends[0].start);
const colorEnd = ref(colorRecommends[0].end);
const maxResolution = 4;
const saveResolution = ref(2);
let font = 'Helvetica';

function refreshBuffer() {
	p5Instance.refreshSourceBuffer();
}

function clearVideo() {
	if (video.value) {
		video.value.remove();
		video.value = null;
	}
}

function handleImgUpdate(file) {
	if (!file) return;

	const url = URL.createObjectURL(file);
	p5Instance.loadImage(url, loadedImg => {
		img.value = loadedImg;
		p5Instance.refreshSourceBuffer();
		URL.revokeObjectURL(url);
	}, (err) => {
		console.error('圖片載入失敗', err);
	});
}

function handleVideoUpdate(file) {
	if (!file) return;

	const blob = URL.createObjectURL(file);
	video.value = p5Instance.createVideo(blob, () => {
		video.value.loop();
		video.value.hide();
		URL.revokeObjectURL(blob);
	});
}

function startRecord() {
	if (isRecording.value) {
		isRecording.value = false;
		recorder.stop();
		return;
	}

	videoChunks.length = 0;
	let stream = canvasEl.captureStream(frameRate);
	recorder = new MediaRecorder(stream, videoConfig);

	recorder.ondataavailable = e => {
		if (e.data.size) {
			videoChunks.push(e.data);
		}
	};
	recorder.onstop = saveVideo;
	recorder.start(1000);

	isRecording.value = true;
}

function saveVideo() {
	const blob = new Blob(videoChunks,
		{
			'type': 'video/webm',
		},
	);

	// Download the video 
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	document.body.appendChild(a);
	a.style = 'display: none';
	a.href = url;
	a.download = 'newVid.webm';
	a.click();
	window.URL.revokeObjectURL(url);
}

function saveCanvas() {
	p5Instance.saveHighResImg(saveResolution.value);
}

function updateColorCombination(c) {
	colorStart.value = c.start;
	colorEnd.value = c.end;
}

function rgbToString(color) {
	return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

function randomColor() {
	colorStart.value = {
		r: Math.floor(Math.random() * 256),
		g: Math.floor(Math.random() * 256),
		b: Math.floor(Math.random() * 256),
	};
	colorEnd.value = {
		r: Math.floor(Math.random() * 256),
		g: Math.floor(Math.random() * 256),
		b: Math.floor(Math.random() * 256),
	};
}

onMounted(() => {
	p5Instance = new $p5(p => {
		let pg;
		let txtLines = [];

		const canvasW = parseFloat(getComputedStyle(canvasContainerRef.value).width);
		const canvasH = window.innerHeight;
		const brightnessThreshold = 200;
		let segments = [];
		let saveSegments = [];

		p.setup = async () => {
			font = await p.loadFont('/font/fonnts.com-Degular_Variable.otf');
			p.frameRate(frameRate);
			canvasEl = p.createCanvas(canvasW, canvasH).canvas;
			p.pixelDensity(1);
			pg = p.createGraphics(canvasW, canvasH);
			pg.pixelDensity(1);
			p.refreshSourceBuffer();
		}

		p.draw = () => {
			p.background(rgbToString(bgColor.value));
			if (showWave.value) {
				drawWave();
			}
			if (mode.value === MODE.VIDEO && video.value) {
				p.refreshSourceBuffer();
			}
			drawFromSource();
		}

		// 刷新 buffer (source graphic) → 畫文字或圖片
		p.refreshSourceBuffer = (buffer = pg, resolution = 1, isSave = false) => {
			const step = sampling.value * resolution;
			const textSizeScaled = textSize.value * resolution;
			const mediaScaled = mediaScale.value * resolution;

			let parts;
			if (!isSave) {
				segments = [];
				parts = segments;
			} else {
				saveSegments = [];
				parts = saveSegments;
			}

			buffer.background(255);

			if (mode.value === MODE.TEXT) {
				txtLines = inputText.value.split("\n");
				const lineHeight = textSizeScaled * inputLineHeight.value;
				const totalHeight = txtLines.length * lineHeight;
				const startY = (buffer.height - totalHeight) / 2 + textSizeScaled * 0.7;

				buffer.textAlign(p.CENTER, p.BASELINE);
				buffer.textFont(font);
				buffer.textSize(textSizeScaled);
				buffer.fill(0);
				for (let i = 0; i < txtLines.length; i++) {
					buffer.text(txtLines[i], buffer.width / 2, startY + i * lineHeight);
				}
			} else if (mode.value === MODE.IMAGE) {
				if (img.value) {
					buffer.imageMode(p.CENTER);
					const w = img.value.width * mediaScaled;
					const h = img.value.height * mediaScaled;
					buffer.image(img.value, buffer.width / 2, buffer.height / 2, w, h);
				}
			} else if (mode.value === MODE.VIDEO) {
				if (video.value?.loadedmetadata) {
					const w = video.value.width * mediaScaled;
					const h = video.value.height * mediaScaled;
					buffer.imageMode(p.CENTER);
					buffer.image(video.value, buffer.width / 2, buffer.height / 2, w, h);
				}
			}

			buffer.loadPixels();

			// Scan all pixels in the buffer
			for (let y = 0; y < buffer.height; y += step) {
				let runStart = null;

				for (let x = 0; x < buffer.width; x += 4) {
					const i = (x + y * buffer.width) * 4;
					const bright = (buffer.pixels[i] + buffer.pixels[i + 1] + buffer.pixels[i + 2]) / 3;
					const isInside = bright < brightnessThreshold;

					if (isInside && runStart === null) {
						runStart = x;
					} else if (!isInside && runStart !== null) {
						parts.push({
							x: runStart,
							y,
							len: x - runStart,
						});
						runStart = null;
					}
				}
			}
		}

		function drawWave(target, resolution = 1) {
			const ctx = target ? target : p;
			const [h, w] = target ? [target.height, target.width] : [canvasH, canvasW];
			const step = sampling.value * resolution;

			ctx.noFill();
			for (let y = 0; y < h; y += step) {
				const wY = p.sin(p.map(y, 0, h, 0, p.PI)) * 10;
				const color = getGradientColor(ctx, y);
				ctx.stroke(color);

				ctx.beginShape();
				for (let x = 0; x < w; x += 10) {
					const weight = wY * 0.5;
					ctx.strokeWeight(weight / 5);

					const waveY = y + waveOffset(x, y, p.frameCount, resolution);
					ctx.vertex(x, waveY);
				}
				ctx.endShape();
			}
		}

		function drawFromSource(target = p, resolution = 1, isSave = false) {
			const maxThick = maxThickness.value * resolution;
			const ctx = target;
			const parts = isSave ? saveSegments : segments;

			ctx.noStroke();
			for (let i = 0; i < parts.length; i++) {
				const seg = parts[i];
				const color = getGradientColor(ctx, seg.y);
				ctx.fill(color);
				drawFatLine(ctx, seg.x, seg.y, seg.len, maxThick, 0.2, resolution);
			}
		}

		// 畫胖線
		function drawFatLine(ctx, x0, yBase, len, maxH, chamfer = 1, resolution = 1) {
			if (len <= 0) return;

			ctx.beginShape();
			for (let i = 0; i <= len; i += 2) {
				let t;
				if (i < chamfer * len) {
					t = p.map(i, 0, chamfer * len, 0, p.PI / 2); // 前倒角
				} else if (i > (1 - chamfer) * len) {
					t = p.map(i, (1 - chamfer) * len, len, p.PI / 2, 0); // 後倒角
				} else {
					t = p.PI / 2; // 中間最寬
				}
				const halfH = p.sin(t) * (maxH / 2);
				const waveY = yBase + waveOffset(x0 + i, yBase, p.frameCount, resolution);
				ctx.vertex(x0 + i, waveY - halfH);
			}
			for (let i = len; i >= 0; i -= 2) {
				let t;
				if (i < chamfer * len) {
					t = p.map(i, 0, chamfer * len, 0, p.PI / 2); // 前倒角
				} else if (i > (1 - chamfer) * len) {
					t = p.map(i, (1 - chamfer) * len, len, p.PI / 2, 0); // 後倒角
				} else {
					t = p.PI / 2; // 中間最寬
				}
				const halfH = p.sin(t) * (maxH / 2);
				const waveY = yBase + waveOffset(x0 + i, yBase, p.frameCount, resolution);
				ctx.vertex(x0 + i, waveY + halfH);
			}
			ctx.endShape(p.CLOSE);
		}

		// 波浪函數
		function waveOffset(x, y, t, resolution = 1) {
			const angle = p.radians(waveAngle.value);
			const u = (x * p.cos(angle) + y * p.sin(angle)) / resolution;
			return p.sin(u * freq.value + t * speed.value) * amp.value;
		}

		function getGradientColor(drawContext, val) {
			const inter = p.map(val, 0, drawContext.height, 0, 1);
			const gradientRgb = {
				r: p.lerp(colorStart.value.r, colorEnd.value.r, inter),
				g: p.lerp(colorStart.value.g, colorEnd.value.g, inter),
				b: p.lerp(colorStart.value.b, colorEnd.value.b, inter),
			};
			return p.color(gradientRgb.r, gradientRgb.g, gradientRgb.b);
		}

		p.saveHighResImg = (resolution) => {
			const highResCanvas = p.createGraphics(canvasW * resolution, canvasH * resolution);
			const highResBuffer = p.createGraphics(canvasW * resolution, canvasH * resolution);
			highResCanvas.pixelDensity(1);
			highResBuffer.pixelDensity(1);
			p.refreshSourceBuffer(highResBuffer, resolution, true);

			if (showWave.value) {
				drawWave(highResCanvas, resolution);
			}
			drawFromSource(highResCanvas, resolution, true);

			p.save(highResCanvas, 'shyline.jpg');
		}
	}, canvasContainerRef.value);
})
</script>

<style scoped lang="scss">
.shyline {
	display: grid;
	grid-template-columns: 1fr;

	.ui-container {
		--ui-conatiner-padding: 20px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform-origin: center;
		transform: translate(-50%, 30%) scale(0);
		opacity: 0;
		width: 320px;
		max-height: 400px;
		overflow-y: scroll;
		padding: var(--ui-conatiner-padding);
		border-radius: 8px;
		border: 1px solid #333;
		background-color: rgba(0, 0, 0, 0.75);
		backdrop-filter: blur(8px);
		color: #999;
		z-index: 1;
		transition: transform .5s, opacity .4s;

		&.open {
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
		}

		.close {
			position: sticky;
			top: calc(-1 * var(--ui-conatiner-padding));
			background-color: rgba(0, 0, 0, 1);
			cursor: pointer;
			padding: 16px var(--ui-conatiner-padding) 8px 0;
			margin-top: calc(-1 * var(--ui-conatiner-padding));
			margin-left: calc(-1 * var(--ui-conatiner-padding));
			margin-bottom: 12px;
			margin-right: calc(-1 * var(--ui-conatiner-padding));
			z-index: 1;
			font-size: 12px;
			text-align: right;
			transition: color .3s ease;

			&:hover {
				color: white;
			}
		}

		.mode-container {
			display: flex;
			gap: 12px;
		}

		.input-container {
			margin-top: 8px;
		}

		.controller-container {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}

		.recommend-colors {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.combinations {
				display: flex;
				gap: 8px;
			}

			.random-btn {
				cursor: pointer;
				font-size: 12px;
				color: #666;
				transition: color 0.2s;

				&:hover {
					color: #999;
				}
			}

			.recommend-color-combination {
				--start-color: attr(data-start type(<color>));
				--end-color: attr(data-end type(<color>));
				width: 32px;
				height: 32px;
				border-radius: 50%;
				background: linear-gradient(to bottom, var(--start-color), var(--end-color));
				cursor: pointer;
				transition: transform 0.2s;

				&:hover {
					transform: scale(1.2);
				}
			}
		}

		.color-container {
			display: flex;
			flex-direction: column;
			gap: 8px;
			margin: 8px 0;
		}

		.save-container {
			margin-top: 12px;
			display: grid;
			grid-template-columns: 3fr 1fr;
		}
	}

	.toggle-ui-btn {
		position: fixed;
		bottom: 24px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 20;
		background: #222;
		color: #fff;
		border: none;
		border-radius: 4px;
		padding: 8px 12px;
		cursor: pointer;
		transition: background 0.2s;

		&:hover {
			background: #444;
		}
	}

	.canvas-container {
		width: 100vw;
		height: 100vh;

		canvas {
			width: 100%;
			height: 100vh;
			display: block;
		}
	}
}
</style>
