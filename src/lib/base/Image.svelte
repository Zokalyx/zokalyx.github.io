<script lang="ts">
	import { fly } from 'svelte/transition';

	export let src: string;
	export let alt: string;

	export let height: string = '18em';
</script>

<img {src} {alt} transition:fly={{ y: -40, duration: 400 }} style="--heightValue: {height};" />

<style>
	img {
		--transitionDuration: 200ms;
		--borderRadiusValue: 2em;

		border-radius: var(--borderRadiusValue);
		max-width: 70vw;
		width: auto;
		height: var(--heightValue);

		box-shadow: 0 0.5em 0.8em rgba(0, 0, 0, 0.4);
		transition:
			border-radius var(--transitionDuration),
			transform var(--transitionDuration);

		object-fit: cover;
	}

	img:hover {
		-webkit-transform: scale(1.05);
		transform: scale(1.05);
		border-radius: calc(var(--borderRadiusValue) / 2);
	}
</style>
