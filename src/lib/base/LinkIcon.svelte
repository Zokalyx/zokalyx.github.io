<script lang="ts">
	import { slide, fly } from 'svelte/transition';

	export let src: string;
	export let alt: string;
	export let url: string;
	export let text: string;

	export let height: string = '4em';
	export let width: string = '13em';
	export let color: string = 'black';

	let showlink = false;
	let imgLoaded = false;
</script>

<div transition:fly={{ y: -40, duration: 400 }}>
	{#if url != ''}
		<a
			href={url}
			on:mouseenter={() => (showlink = true)}
			on:mouseleave={() => (showlink = false)}
			style="--widthValue: {width};"
		>
			<img
				{src}
				{alt}
				style="--heightValue: {height};"
				on:load={() => (imgLoaded = true)}
				class:visible={imgLoaded}
			/>
			{#if showlink}
				<div transition:slide={{ axis: 'x', duration: 300 }}>
					<p transition:fly={{ x: -200 }} style="--colorValue: {color};">
						{text}
					</p>
				</div>
			{/if}
		</a>
	{:else}
		<div
			class="anchor-replacement"
			aria-hidden="true"
			on:mouseenter={() => (showlink = true)}
			on:mouseleave={() => (showlink = false)}
			style="--widthValue: {width};"
		>
			<img
				{src}
				{alt}
				style="--heightValue: {height};"
				on:load={() => (imgLoaded = true)}
				class:visible={imgLoaded}
			/>
			{#if showlink}
				<div transition:slide={{ axis: 'x', duration: 300 }}>
					<p transition:fly={{ x: -200 }} style="--colorValue: {color};">
						{text}
					</p>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	a,
	.anchor-replacement {
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--widthValue);
		text-decoration: none;
		overflow-x: visible;
	}

	a:hover img {
		-webkit-filter: none;
		filter: none;
	}

	.anchor-replacement:hover img {
		-webkit-filter: none;
		filter: none;
	}

	img {
		transition:
			filter 300ms,
			opacity 0.6s;
		height: var(--heightValue);

		-wekbit-filter: drop-shadow(0 0.25em 0.25em rgba(0, 0, 0, 0.4));
		filter: drop-shadow(0 0.25em 0.25em rgba(0, 0, 0, 0.4));

		opacity: 0;
	}

	.visible {
		opacity: 1;
	}

	p {
		padding-left: 0.15em;
		font-size: larger;
		color: var(--colorValue);
		font-weight: bold;
		white-space: nowrap;
	}
</style>
