<script lang="ts">
	import { cubicOut } from 'svelte/easing';

	export let src: string;
	export let alt: string;
	export let height: string = '18em';
	export let preloadOpacity = 0;

	let imgLoaded = false;

	function rollFade(node: Element, { duration }: { duration: number }) {
		return {
			duration,
			css: (t: number) => {
				let eased = cubicOut(t);
				return `transform: rotate(${20 * (1 - eased)}deg);
						opacity: ${t};`;
			}
		};
	}
</script>

<div style="--heightValue: {height};">
	<img
		{src}
		{alt}
		style="--preloadOpacity: {preloadOpacity};"
		transition:rollFade={{ duration: 400 }}
		on:load={() => (imgLoaded = true)}
		class:visible={imgLoaded}
	/>
</div>

<style>
	div {
		display: -ms-grid;
		display: grid;
		box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.5);
		border-radius: 50%;
	}

	img {
		border-radius: 50%;
		max-width: 70vw;
		max-height: 70vw;
		width: var(--heightValue);
		height: var(--heightValue);

		transition:
			transform 200ms,
			opacity 0.2s;
		opacity: var(--preloadOpacity);
	}

	.visible {
		opacity: 1;
	}

	img:hover {
		-webkit-transform: rotate(-7deg);
		-ms-transform: rotate(-7deg);
		transform: rotate(-7deg);
	}
</style>
