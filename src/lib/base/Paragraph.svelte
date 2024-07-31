<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<p transition:fade={{ duration: 400 }}>
	<slot />
</p>

<style>
	p {
		font-size: large;
		min-width: 10em;
		max-width: 25em;
		text-align: justify;
		margin: 0;
		padding: 0;
	}
</style>
