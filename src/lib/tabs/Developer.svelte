<script lang="ts">
	import hyperpaint from '$lib/assets/hyperpaintjpg.jpg';
	import pokerush from '$lib/assets/pokerush.jpg';
	import qsim from '$lib/assets/qsim.jpg';
	import juntaditas from '$lib/assets/juntaditas.jfif';
	import github from '$lib/assets/github-mark.svg';

	import Paragraph from '../base/Paragraph.svelte';
	import LinkIcon from '../base/LinkIcon.svelte';
	import LinkImage from '../base/LinkImage.svelte';
	import Image from '../base/Image.svelte';
	import HyperLink from '$lib/base/HyperLink.svelte';
</script>

<Paragraph>
	I love programming and it's certainly one of my stronger skills. For years I've been learning
	about a variety of concepts, algorithms, tools and programming languages on my own. <br /><br
	/>During my ongoing university studies, I've consolidated a big part of that knowledge in a more
	rigorous way. As a little bonus, I have fully completed Harvard's
	<HyperLink url="https://cs50.harvard.edu/x/2024/" text="CS50x" color="rgb(119, 117, 0)" />.
</Paragraph>
<LinkIcon
	src={github}
	alt="Github icon"
	text="/Zokalyx"
	url="https://www.github.com/zokalyx"
	color="#24292F"
	width="10em"
/>
<Paragraph>
	I've built many types of programs before: Discord bots, web UIs, simple videogames and other
	specific tools. You can check some of them out on my Github or by clicking the images in this tab.
	<br /><br />
	I am quite familiar with C, Python, TypeScript, Git, Bash, Node, SQLite, and Svelte. I also want to
	deepen my experience with other programming languages, dev ops, game engines, mobile development, shaders,
	and more.
</Paragraph>
<div style="width:100%;"></div>
<LinkImage
	src={hyperpaint}
	alt="Hyper Paint"
	url="https://editor.p5js.org/zokalyx/full/ESz3r4_Tu"
/>
<LinkImage src={qsim} alt="Qsim" url="https://github.com/Zokalyx/qsim" />
<LinkImage src={pokerush} alt="PokeRush" url="https://github.com/Zokalyx/PokeRush" />
<Image src={juntaditas} alt="Juntaditas" />
