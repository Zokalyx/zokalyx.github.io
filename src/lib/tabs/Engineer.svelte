<script lang="ts">
	import { fly } from 'svelte/transition';

	import fiuba from '$lib/assets/fiuba.jpg';
	import wave from '$lib/assets/wave.svelte';
	import formula from '$lib/assets/formula.svelte';
	import xor from '$lib/assets/xor.svelte';

	import Paragraph from '../base/Paragraph.svelte';
	import LinkImage from '../base/LinkImage.svelte';
</script>

<Paragraph>
	I'm an Electronics Engineering student at the University of Buenos Aires and I'm expecting to
	graduate by the end of 2025.
</Paragraph>
<LinkImage url="https://www.fi.uba.ar" src={fiuba} alt="Facultad de Ingeniería" />
<div style="width: 100%;"></div>
<Paragraph>
	I've learned many cool things during my studies! I have a solid understanding of signal analysis,
	digital and analog circuits, electromagnetic theory, the relationship between hardware and
	software, computer assisted design, and more.
</Paragraph>
<div style="width: 100%;"></div>
<div class="widgets" transition:fly={{ y: -40, duration: 400 }}>
	<div class="widget">
		<svelte:component this={wave} />
	</div>
	<div class="widget">
		<svelte:component this={formula} />
	</div>
	<div class="widget">
		<svelte:component this={xor} />
	</div>
</div>

<style>
	.widgets {
		max-width: 90%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1em;
	}

	.widget {
		box-shadow: 0 0.5em 0.5em rgba(0, 0, 0, 0.8) inset;
		height: 5em;
		width: 20em;
		background-color: #2c2c2c;
		border-radius: 1em;
		display: grid;
		place-items: center;
	}
</style>
