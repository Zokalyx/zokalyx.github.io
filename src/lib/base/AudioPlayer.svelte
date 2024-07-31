<script lang="ts">
	import { fly } from 'svelte/transition';

	export let src: string;
	export let text: string;

	function fadeAudio(node: HTMLAudioElement, { delay = 0, duration = 800 } = {}) {
		let originalVolume: number | null = null;
		return {
			delay,
			duration,
			tick: (t: number) => {
				if (!originalVolume) originalVolume = node.volume;
				node.volume = originalVolume * t;
			}
		};
	}
</script>

<div class="audio-container" transition:fly={{ y: -40, duration: 400 }}>
	<div style="margin-left: 1.5em; color: rgb(50, 50, 50);">{text}</div>
	<audio controls out:fadeAudio>
		<source {src} type="audio/mpeg" />
	</audio>
</div>

<style>
	.audio-container {
		width: max(80%, calc(75% + 5em));
	}

	audio {
		width: 100%;
		-webkit-filter: drop-shadow(0 0.5em 0.5em rgba(0, 0, 0, 0.5));
		filter: drop-shadow(0 0.5em 0.5em rgba(0, 0, 0, 0.5));
	}
</style>
