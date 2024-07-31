<script lang="ts">
	import messi from '$lib/assets/messi.jpg';
	import lappland from '$lib/assets/lapplandlow.jpg';
	import metaball from '$lib/assets/gonza.jpg';

	import Image from '../base/Image.svelte';
	import Paragraph from '../base/Paragraph.svelte';
	import LinkIcon from '../base/LinkIcon.svelte';

	const imageHeight = '20em';
</script>

<Image src={messi} alt="Messi artwork" height={imageHeight} width={imageHeight} />
<Image src={lappland} alt="Lappland artwork" height={imageHeight} width={imageHeight} />
<Image src={metaball} alt="Metaball artwork" height={imageHeight} width="11em" />

<div style="width: 100%;"></div>
<Paragraph>
	Although I don't have any formal education in art, drawing has been an important hobby of mine for
	a long time. In recent years I've spent more time on digital art rather than traditional media. <br
	/><br />Some of my artworks are posted on my Instagram page.
</Paragraph>
<LinkIcon
	src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
	url="https://www.instagram.com/franrusso001"
	alt="Instagram logo"
	text="/franrusso001"
	color="#D03B9A"
/>
