<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let languages: { name: string; flag: string }[];
	export let language: string;
	let selection = tweened(0, { easing: cubicOut });
</script>

<div class="container">
	{#each languages as lang, i}
		<button
			class="flag"
			style="--number: {i - $selection};"
			on:click={() => {
				let target_selection = (i + 1) % languages.length;
				selection.set(target_selection);
				language = languages[target_selection].name;
			}}
		>
			<img src={lang.flag} alt="{lang.name} language flag" />
		</button>
	{/each}
</div>

<style>
	.container {
		display: grid;
		overflow: hidden;
		place-items: center;
		width: 3em;
		height: 1.5em;
		perspective: 100px;
	}

	.container > * {
		grid-area: 1 / 1;
	}

	button {
		transform: translateY(calc(var(--number) * 2em)) rotateY(-20deg);
		border: 0em solid white;
		padding: 0;
		margin: 0;
		background: none;
		display: grid;
		place-items: center;
		cursor: pointer;
		transition: border 0.05s;
		border-radius: 0.5em;
		box-sizing: border-box;
		object-fit: contain;
	}

	button:hover {
		border: 0.15em solid white;
	}

	img {
		height: 1.5em;
		border-radius: 0.5em;
	}
</style>
