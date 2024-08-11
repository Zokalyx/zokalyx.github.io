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

	export let language;
</script>

<Paragraph>
	{#if language === 'EN'}
		I love programming and it's certainly one of my stronger skills. For years I've been learning
		about a variety of concepts, algorithms, tools and programming languages on my own. <br /><br
		/>During my ongoing university studies, I've consolidated a big part of that knowledge in a more
		rigorous way. As a little bonus, I have fully completed Harvard's
		<HyperLink url="https://cs50.harvard.edu/x/2024/" text="CS50x" color="rgb(119, 117, 0)" />.
	{:else}
		Me encanta programar y considero que es una de mis habilidades más fuertes. Durante años estuve
		aprendiendo sobre una variedad de conceptos, algoritmos, herramientas y lenguajes de
		programación por mi cuenta. <br /><br />
		Durante mis estudios universitarios, pude consolidar una gran parte de ese conocimiento de una manera
		más rigurosa. Como pequeño detalle, también completé el curso <HyperLink
			url="https://cs50.harvard.edu/x/2024/"
			text="CS50x"
			color="rgb(119, 117, 0)"
		/> de Harvard.
	{/if}
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
	{#if language === 'EN'}
		I've built many types of programs before: Discord bots, web UIs, simple videogames and other
		specific tools. You can check some of them out on my Github or by clicking the images in this
		tab.
		<br /><br />
		I am quite familiar with C, Python, TypeScript, Git, Bash, Node, SQLite, and Svelte. I also want
		to deepen my experience with other programming languages, dev ops, game engines, mobile development,
		shaders, and more.
	{:else}
		Llegué a desarrollar varios tipos de programas: bots de Discord, interfaces web, juegos simples
		y algunas herramientas específicas. Podés encontrar algunos de esos proyectos en mi Github o
		clickeando en las imágenes de esta pestaña.
		<br /><br />
		Me siento bastante cómodo con C, Python, TypeScript, Git, Bash, Node, SQLite y Svelte. También quiero
		ampliar mi experiencia con otros lenguajes de programación, dev ops, motores de juegos, desarrolló
		para móviles, shaders y más.
	{/if}
</Paragraph>
<div style="width:100%;"></div>
<LinkImage
	src={hyperpaint}
	alt="Hyper Paint"
	url="https://editor.p5js.org/zokalyx/full/ESz3r4_Tu"
	width="20em"
/>
<LinkImage src={qsim} alt="Qsim" url="https://github.com/Zokalyx/qsim" width="38em" />
<LinkImage src={pokerush} alt="PokeRush" url="https://github.com/Zokalyx/PokeRush" width="34em" />
<Image src={juntaditas} alt="Juntaditas" width="8em" />
