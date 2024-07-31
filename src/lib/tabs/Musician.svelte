<script lang="ts">
	import show from '$lib/assets/show.jpg';
	import song from '$lib/assets/midnight daydream.mp3';

	import Paragraph from '../base/Paragraph.svelte';
	import LinkImage from '../base/LinkImage.svelte';
	import LinkIcon from '../base/LinkIcon.svelte';
	import AudioPlayer from '../base/AudioPlayer.svelte';
</script>

<Paragraph>
	Apart from being a huge music fan, I consider myself a musician. The guitar has been my main
	instrument for over a decade and I have experience composing and producing music. You can hear
	some of it on my Youtube channel.
	<br /><br />I was also part of a band named Fire Garden, where I got to play song covers live. Fun
	times!
</Paragraph>
<LinkImage
	src={show}
	alt="Fire garden live show"
	url="https://www.instagram.com/byfiregarden/"
	height="22em"
	width="14em"
/>
<LinkIcon
	src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
	alt="Youtube icon"
	url="https://www.youtube.com/@franr."
	text="/@franr."
	color="#FF0000"
	height="3.5em"
/>
<AudioPlayer src={song} text="midnight_daydream.mp3" />
