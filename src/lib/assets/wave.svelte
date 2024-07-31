<script lang="ts">
	import { onMount } from 'svelte';
	import { backOut, cubicInOut, cubicOut, expoOut, linear, sineOut } from 'svelte/easing';
	import { tweened, type Tweened } from 'svelte/motion';

	const low_speed = 0.0005;
	const high_wavelength = 100;
	const factor = 1.75;
	const low_wavelength = high_wavelength / factor;
	const high_speed = low_speed * factor;

	let speed = tweened(low_speed, { duration: 300, easing: cubicInOut });
	let l = tweened(high_wavelength, { duration: 300, easing: cubicInOut });

	let f = 1;
	let A = 25;

	let t = 0;
	let startTime: number | null = null;
	let animationFrame: number | null = null;
	let path: SVGPathElement;
	function animate(timestamp: number) {
		if (!startTime) {
			startTime = timestamp;
		}
		t += (timestamp - startTime) * $speed;
		startTime = timestamp;

		const dx = $l / 11;
		const a = A * Math.sin(-2 * Math.PI * f * t);
		const b = A * Math.sin(2 * Math.PI * (0.25 - f * t));
		const c = ((A * 2 * Math.PI) / $l) * Math.cos(-2 * Math.PI * f * t);
		const d = ((A * 2 * Math.PI) / $l) * Math.cos(2 * Math.PI * (0.25 - f * t));

		path.setAttribute(
			'd',
			`m 0 ${a}

            C ${dx} ${a + c * dx} ${$l / 4 - dx} ${b - d * dx} ${$l / 4} ${b}
            C ${$l / 4 + dx} ${b + d * dx} ${$l / 2 - dx} ${-a + c * dx} ${$l / 2} ${-a}
            C ${$l / 2 + dx} ${-a - c * dx} ${($l * 3) / 4 - dx} ${-b + d * dx} ${($l * 3) / 4} ${-b}
            C ${($l * 3) / 4 + dx} ${-b - d * dx} ${$l - dx} ${a - c * dx} ${$l} ${a}

            C ${$l + dx} ${a + c * dx} ${($l * 5) / 4 - dx} ${b - d * dx} ${($l * 5) / 4} ${b}
            C ${($l * 5) / 4 + dx} ${b + d * dx} ${($l * 3) / 2 - dx} ${-a + c * dx} ${($l * 3) / 2} ${-a}
            C ${($l * 3) / 2 + dx} ${-a - c * dx} ${($l * 7) / 4 - dx} ${-b + d * dx} ${($l * 7) / 4} ${-b}
            C ${($l * 7) / 4 + dx} ${-b - d * dx} ${2 * $l - dx} ${a - c * dx} ${2 * $l} ${a}
            `
		);

		// Request the next frame
		animationFrame = requestAnimationFrame(animate);
	}

	onMount(() => {
		animationFrame = requestAnimationFrame(animate);

		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	});
</script>

<svg
	class="container"
	on:mouseenter={() => {
		l.set(low_wavelength);
		speed.set(high_speed);
	}}
	on:mouseleave={() => {
		l.set(high_wavelength);
		speed.set(low_speed);
	}}
	width={2 * high_wavelength}
	height={2 * A}
	viewBox="{0} {-A * 1.1} {2 * $l} {2 * A * 1.11}"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path
		bind:this={path}
		d="m 0 0"
		fill="none"
		stroke="hsl(var(--hue), var(--saturation), var(--lightness))"
		stroke-width="5"
		stroke-linecap="round"
		class="path"
	/>
</svg>

<style>
	.path {
		transition: stroke 0.3s ease;
		--hue: 150;
		--lightness: 80%;
		--saturation: 40%;
	}
	.container:hover .path {
		--hue: 200;
		--lightness: 70%;
		--saturation: 70%;
	}
</style>
