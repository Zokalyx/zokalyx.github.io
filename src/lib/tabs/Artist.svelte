<script lang="ts">
	import messi from '$lib/assets/messi.jpg';
	import lappland from '$lib/assets/lapplandlow.jpg';
	import metaball from '$lib/assets/gonza.jpg';

	import Image from '../base/Image.svelte';
	import Paragraph from '../base/Paragraph.svelte';
	import LinkIcon from '../base/LinkIcon.svelte';

	const imageHeight = '20em';

	export let language: string;
</script>

<Image src={messi} alt="Messi artwork" height={imageHeight} width={imageHeight} />
<Image src={lappland} alt="Lappland artwork" height={imageHeight} width={imageHeight} />
<Image src={metaball} alt="Metaball artwork" height={imageHeight} width="11em" />

<div style="width: 100%;"></div>
<Paragraph>
	{#if language === 'EN'}
		Although I don't have any formal education in art, drawing has been an important hobby of mine
		for a long time. In recent years I've spent more time on digital art rather than traditional
		media. <br /><br />Some of my artworks are posted on my Instagram page.
	{:else}
		A pesar de que no tengo educación formal en el arte, el dibujo es un hobby importante para mí
		desde hace mucho tiempo. En los últimos años estuve trabajando más en el área de arte digital en
		vez del tradicional. <br /><br />
		Algunas de mis obras están publicadas en mi página de Instagram.
	{/if}
</Paragraph>
<LinkIcon
	src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
	url="https://www.instagram.com/franrusso001"
	alt="Instagram logo"
	text="/franrusso001"
	color="#D03B9A"
/>
