<script lang="ts">
	import hiragana from '$lib/assets/Hiragana.jpg';
	import katakana from '$lib/assets/Katakana.jpg';
	import unity from '$lib/assets/unity.jpg';
	import schedule from '$lib/assets/Schedule.jpg';
	import logos from '$lib/assets/logos.jpg';

	import Paragraph from '../base/Paragraph.svelte';
	import Image from '../base/Image.svelte';
	import LinkImage from '../base/LinkImage.svelte';
	import MultiImage from '../base/MultiImage.svelte';

	const imageHeight = '15em';

	export let language;
</script>

<Paragraph>
	{#if language === 'EN'}
		I haven't really studied graphic design on its own. However, whenever I work on any project I
		make sure it looks as good as possible, while keeping it functional and easy to understand. A
		big part of my experience involves UI and logo design.
	{:else}
		Realmente, nunca estudié diseño gráfico por su propia cuenta. Aun así, siempre que trabajo en
		algún proyecto me aseguro de que se vea lo mejor posible, manteniendo su funcionalidad y
		facilidad de uso. Una gran parte de mi experiencia tiene que ver con diseño de UIs y logos.
	{/if}
</Paragraph>
<LinkImage src={unity} alt="Unity calculator" url="https://zokalyx.github.io/unity/" width="32em" />
<div style="width: 100%"></div>
<MultiImage
	images={[
		{ src: hiragana, alt: 'Hiragana' },
		{ src: katakana, alt: 'Katakana' }
	]}
	width="12em"
/>
<Image src={schedule} alt="Metaball team Argentium schedule" height={imageHeight} width="30em" />
<Image src={logos} alt="University subject logos" height={imageHeight} width="20em" />
