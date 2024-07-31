<script lang="ts">
	import { cubicOut } from 'svelte/easing';

	export let src: string;
	export let alt: string;
	export let height: string = '18em';

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

<div>
	<img
		{src}
		{alt}
		style="--heightValue: {height}"
		transition:rollFade={{ duration: 400 }}
		on:load={() => (imgLoaded = true)}
		class:visible={imgLoaded}
	/>
</div>

<style>
	div {
		display: grid;
		box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.5);
		border-radius: 50%;
	}

	img {
		border-radius: 50%;
		max-height: 70vw;
		width: auto;
		height: var(--heightValue);

		transition:
			transform 200ms,
			opacity 0.2s;
		opacity: 0;
	}

	.visible {
		opacity: 1;
	}

	img:hover {
		-webkit-transform: rotate(-7deg);
		transform: rotate(-7deg);
	}
</style>
