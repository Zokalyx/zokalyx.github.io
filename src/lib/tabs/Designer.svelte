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
</script>

<Paragraph>
	I haven't really studied graphic design on its own. However, whenever I work on any project I make
	sure it looks as good as possible, while making sure it's still functional and easy to understand.
	A big part of my experience involves UI and logo design.
</Paragraph>
<LinkImage src={unity} alt="Unity calculator" url="https://zokalyx.github.io/unity/" />
<div style="width: 100%"></div>
<MultiImage
	images={[
		{ src: hiragana, alt: 'Hiragana' },
		{ src: katakana, alt: 'Katakana' }
	]}
/>
<Image src={schedule} alt="Metaball team Argentium schedule" height={imageHeight} />
<Image src={logos} alt="University subject logos" height={imageHeight} />
