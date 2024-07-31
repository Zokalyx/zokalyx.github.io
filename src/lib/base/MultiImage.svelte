<script lang="ts">
	import { fly } from 'svelte/transition';

	export let height: string = '14em';
	export let width: string = 'auto';
	export let sideMargin: string = '1.5em';

	export let images: { src: string; alt: string }[];
	$: imagesLoaded = Array(images.length).fill(false) as boolean[];

	// Angle between consecutive images.
	export let baseAngle = 20;
	// Extra angle when hovering over an image.
	const hoverAngle = '5deg';
</script>

<div
	class="container"
	transition:fly={{ y: -40, duration: 400 }}
	style="
        --heightValue: {height};
        --hoverAngle: {hoverAngle};
        --sideMargin: {sideMargin};
		--widthValue: {width};
    "
>
	{#each images as image, i}
		<div class="img-wrapper" style="--baseAngle: {baseAngle * ((images.length - 1) / 2 - i)}deg">
			<img
				src={image.src}
				alt={image.alt}
				on:load={() => (imagesLoaded[i] = true)}
				class:visible={imagesLoaded[i]}
			/>
		</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		place-items: center;
		margin-left: var(--sideMargin);
		margin-right: var(--sideMargin);

		-webkit-transform: translateY(-0.75em);
		transform: translateY(-0.25em);

		width: var(--widthValue);
	}

	.container > * {
		grid-area: 1 / 1;
	}

	.img-wrapper {
		--transitionDuration: 200ms;
		--borderRadiusValue: 2em;

		border-radius: var(--borderRadiusValue);

		display: grid;
		box-shadow: 0 0.5em 0.8em rgba(0, 0, 0, 0.4);

		transform-origin: bottom;

		-webkit-transform: rotate(var(--baseAngle));
		transform: rotate(var(--baseAngle));

		transition:
			border-radius var(--transitionDuration),
			transform var(--transitionDuration);
	}

	img {
		max-width: 40vw;
		width: auto;
		height: var(--heightValue);

		border-radius: var(--borderRadiusValue);

		transition:
			border-radius var(--transitionDuration),
			opacity 0.6s;

		object-fit: cover;

		opacity: 0;
	}

	.visible {
		opacity: 1;
	}

	.img-wrapper:hover {
		-webkit-transform: rotate(calc(var(--baseAngle) + var(--hoverAngle))) scale(1.05);
		transform: rotate(calc(var(--baseAngle) + var(--hoverAngle))) scale(1.05);
		border-radius: calc(var(--borderRadiusValue) / 2);
	}

	.img-wrapper:hover img {
		border-radius: calc(var(--borderRadiusValue) / 2);
	}
</style>
