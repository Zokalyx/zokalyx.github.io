<script lang="ts">
	import LinkIcon from '../base/LinkIcon.svelte';
	import Paragraph from '../base/Paragraph.svelte';

	const linkWidth = '15em';
</script>

<Paragraph>Feel free to reach out via LinkedIn, email, or Discord.</Paragraph>
<div style="width: 100%;"></div>
<LinkIcon
	url="https://www.linkedin.com/in/fran-russo"
	src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
	alt="LinkedIn icon"
	text="/in/fran-russo"
	color="#007EBB"
	width={linkWidth}
/>
<LinkIcon
	url="mailto:frrusso@fi.uba.ar"
	src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
	alt="Gmail icon"
	text="frrusso@fi.uba.ar"
	color="#34A853"
	width={linkWidth}
/>
<LinkIcon
	url=""
	src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
	alt="LinkedIn icon"
	text="zokalyx"
	color="#5865F2"
	width={linkWidth}
/>
