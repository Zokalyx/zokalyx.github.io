<script lang="ts">
	import { fly } from 'svelte/transition';

	export let src: string;
	export let alt: string;

	export let height: string = '18em';
	export let width: string = 'auto';

	let imgLoaded = false;
</script>

<div
	style="--heightValue: {height}; --widthValue: {width};"
	transition:fly={{ y: -40, duration: 400 }}
>
	<img {src} {alt} on:load={() => (imgLoaded = true)} class:visible={imgLoaded} />
</div>

<style>
	div {
		display: grid;

		--transitionDuration: 200ms;
		--borderRadiusValue: 2em;

		border-radius: var(--borderRadiusValue);
		max-width: 70vw;
		width: var(--widthValue);
		height: var(--heightValue);

		box-shadow: 0 0.5em 0.8em rgba(0, 0, 0, 0.4);
		transition:
			border-radius var(--transitionDuration),
			transform var(--transitionDuration);
	}

	img {
		--transitionDuration: 200ms;
		--borderRadiusValue: 2em;

		border-radius: var(--borderRadiusValue);
		max-width: 70vw;
		width: var(--widthValue);
		height: var(--heightValue);

		transition:
			border-radius var(--transitionDuration),
			transform var(--transitionDuration),
			opacity 0.6s;

		-o-object-fit: cover;
		object-fit: cover;

		opacity: 0;
	}

	div:hover {
		-webkit-transform: scale(1.05);
		-ms-transform: scale(1.05);
		transform: scale(1.05);
		border-radius: calc(var(--borderRadiusValue) / 2);
	}

	div:hover img {
		border-radius: calc(var(--borderRadiusValue) / 2);
	}

	.visible {
		opacity: 1;
	}
</style>
