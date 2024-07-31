<script lang="ts">
	import { fly } from 'svelte/transition';

	export let height: string = '14em';
	export let width: string = 'auto';
	export let sideMargin: string = '1.5em';

	export let images: { src: string; alt: string }[];

	// Angle between consecutive images.
	export let baseAngle = 20;
	// Extra angle when hovering over an image.
	const hoverAngle = '5deg';
</script>

<div
	transition:fly={{ y: -40, duration: 400 }}
	style="
        --heightValue: {height};
        --hoverAngle: {hoverAngle};
        --sideMargin: {sideMargin};
		--widthValue: {width};
    "
>
	{#each images as image, i}
		<img
			src={image.src}
			alt={image.alt}
			style="--baseAngle: {baseAngle * ((images.length - 1) / 2 - i)}deg"
		/>
	{/each}
</div>

<style>
	div {
		display: grid;
		place-items: center;
		margin-left: var(--sideMargin);
		margin-right: var(--sideMargin);

		-webkit-transform: translateY(-0.75em);
		transform: translateY(-0.25em);

		width: var(--widthValue);
	}

	div > * {
		grid-area: 1 / 1;
	}

	img {
		--transitionDuration: 200ms;
		--borderRadiusValue: 2em;

		max-width: 40vw;
		width: auto;
		height: var(--heightValue);

		border-radius: var(--borderRadiusValue);

		box-shadow: 0 0.5em 0.8em rgba(0, 0, 0, 0.4);
		transition:
			border-radius var(--transitionDuration),
			transform var(--transitionDuration);

		transform-origin: bottom;

		-webkit-transform: rotate(var(--baseAngle));
		transform: rotate(var(--baseAngle));

		object-fit: cover;
	}

	img:hover {
		-webkit-transform: rotate(calc(var(--baseAngle) + var(--hoverAngle))) scale(1.05);
		transform: rotate(calc(var(--baseAngle) + var(--hoverAngle))) scale(1.05);
		border-radius: calc(var(--borderRadiusValue) / 2);
	}
</style>
