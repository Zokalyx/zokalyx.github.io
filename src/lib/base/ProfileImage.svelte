<script lang="ts">
	import { cubicOut } from 'svelte/easing';

	export let src: string;
	export let alt: string;
	export let height: string = '18em';

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

<img {src} {alt} style="--heightValue: {height}" transition:rollFade={{ duration: 400 }} />

<style>
	img {
		border-radius: 50%;
		max-height: 70vw;
		width: auto;
		height: var(--heightValue);
		box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.5);

		transition: transform 200ms;
	}

	img:hover {
		-webkit-transform: rotate(-7deg);
		transform: rotate(-7deg);
	}
</style>
