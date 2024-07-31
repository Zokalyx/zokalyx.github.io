<script lang="ts">
	import { fly } from 'svelte/transition';

	export let src: string;
	export let alt: string;
	export let url: string;

	export let height: string = '18em';
</script>

<a transition:fly={{ y: -40, duration: 400 }} href={url} style="--heightValue: {height};">
	<img {src} {alt} />
	<div></div>
</a>

<style>
	a {
		--borderRadiusValue: 2em;
		--transitionDuration: 200ms;

		display: grid;

		border-radius: var(--borderRadiusValue);
		transition:
			transform var(--transitionDuration),
			border-radius var(--transitionDuration);

		box-shadow: 0 0.5em 0.8em rgba(0, 0, 0, 0.4);

		max-width: 70vw;
		width: auto;
		height: var(--heightValue);
	}

	a > * {
		grid-area: 1 / 1;
	}

	a:hover {
		-webkit-transform: scale(1.05);
		transform: scale(1.05);
		border-radius: calc(var(--borderRadiusValue) / 2);
	}

	a:hover img {
		border-radius: calc(var(--borderRadiusValue) / 2);
	}

	a:hover div {
		border-radius: calc(var(--borderRadiusValue) / 2);
		border-color: white;
	}

	div {
		width: 100%;
		height: 100%;

		border-radius: var(--borderRadiusValue);
		transition:
			border-radius var(--transitionDuration),
			border-color var(--transitionDuration);

		box-sizing: border-box;

		border: 0.25em solid transparent;
	}

	img {
		max-width: 70vw;
		width: auto;
		height: calc(var(--heightValue));

		border-radius: var(--borderRadiusValue);

		transition: border-radius var(--transitionDuration);

		object-fit: cover;
	}
</style>
