<script lang="ts">
	import Orbit from '$lib/assets/orbit.svelte';
	import Paragraph from '../base/Paragraph.svelte';

	export let language;
</script>

<Paragraph>
	{#if language == 'EN'}
		I grew up with computers and really learned their ins and outs. For example, video games have
		indirectly taught me a lot about computer hardware. I've needed office programs like PowerPoint,
		Word, and Excel for my school assignments, and my artistic endeavors have led me to learn audio,
		image, and video editing. Still, there's always more to learn and improve.
	{:else}
		Crecí con computadoras y entiendo muy bien cómo funcionan. Por ejemplo, los juegos me enseñaron
		mucho, de manera indirecta, sobre hardware. Necesité usar muchos programas de oficina como
		PowerPoint, Word y Excel para mis tareas escolares, y mis ambiciones artísticas me obligaron a
		aprender edición de audio, imagen y video. Aún así, tengo mucho para aprender y mejorar.
	{/if}
</Paragraph>
<Paragraph>
	{#if language == 'EN'}
		A big "side passion" of mine is math and physics. I've studied those subjects as an Engineering
		major, but only when they're directly applicable to my area of expertise. Over the years, I've
		studied a few other subjects on my own, and I plan to steadily continue that journey. I'm really
		curious about the universe and the fancy mathematical tools some people have come up with to
		understand it.
	{:else}
		Una "pasión secundaria" que tengo es la matemática y la física. Es verdad que esos temas son
		parte de mis estudios universitarios, pero solo cuando tienen una aplicación directa a mi
		carrera. Así que estuve estudiando otros temas yo solo, y planeo continuar eso lentamente.
		Simplemente tengo mucha curiosidad sobre el universo y las herramientas matemáticas que algunas
		personas inventaron para poder entenderlo.
	{/if}
</Paragraph>
<div style="width: 100%"></div>
<Orbit />
