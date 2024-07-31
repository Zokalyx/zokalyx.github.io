<script>
	import { fly } from 'svelte/transition';
</script>

<div class="container" transition:fly={{ y: -40, duration: 400 }}>
	<div class="sun astro"></div>
	<div class="earth astro"></div>
	{#each { length: 20 } as starIndex}
		<div
			class="star"
			style="--randomX: {(Math.random() - 0.5) * 30}em; --randomY: {(Math.random() - 0.5) * 30}em;"
		></div>
	{/each}
</div>

<style>
	.container {
		box-shadow: 0 0.5em 0.5em rgba(0, 0, 0, 0.8) inset;
		height: 15em;
		width: 30em;
		background-color: #2c2c2c;
		border-radius: 1em;
		display: grid;
		place-items: center;
		overflow: hidden;
	}

	.container > * {
		grid-area: 1 / 1;
	}

	.star {
		background-color: white;
		border-radius: 50%;
		z-index: 0;
		width: 0.25em;
		height: 0.25em;
		transform: translate(var(--randomX), var(--randomY));
	}

	.sun {
		--semi-major-axis: 0.2em;
		--semi-minor-axis: 0.0375em;
		--base-angle: 165deg;

		background-color: yellow;
		width: 3em;
		height: 3em;
		border-radius: 50%;
		box-shadow: 0 0em 1em rgba(0, 0, 0, 0.502);
		z-index: 2;

		animation: 16s orbit linear infinite;

		transform: rotate(var(--base-angle))
			translate(
				calc(var(--semi-major-axis) * cos(var(--angle))),
				calc(var(--semi-minor-axis) * sin(var(--angle)))
			)
			scale(var(--scale-factor));
	}

	.sun:hover {
		box-shadow: 0 0em 2em rgba(255, 229, 84, 0.7);
	}

	@property --angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}

	@property --scale-factor {
		syntax: '<number>';
		initial-value: 1;
		inherits: false;
	}

	@keyframes orbit {
		100% {
			--angle: 360deg;
		}
	}

	@keyframes earthPerspective {
		100% {
			z-index: 3;
		}
	}

	.earth {
		--semi-major-axis: 8em;
		--semi-minor-axis: 1.5em;
		--base-angle: -15deg;

		background-color: rgb(108, 158, 233);
		width: 1em;
		height: 1em;
		border-radius: 50%;
		box-shadow: 0 0em 0.75em rgba(0, 0, 0, 0.8);
		animation:
			16s orbit linear infinite,
			16s earthPerspective linear infinite;

		transform: rotate(var(--base-angle))
			translate(
				calc(var(--semi-major-axis) * cos(var(--angle))),
				calc(var(--semi-minor-axis) * sin(var(--angle)))
			)
			scale(var(--scale-factor));
	}

	.astro {
		--scale-factor: 1;
		transition:
			--scale-factor 0.2s,
			box-shadow 0.3s;
	}

	.astro:hover {
		--scale-factor: 1.1;
	}
</style>
