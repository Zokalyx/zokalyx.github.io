<script lang="ts">
	export let color: string;
	export let url: string;
	export let text: string;
</script>

<a href={url} style="--color: {color}">{text}</a>

<style>
	a {
		color: var(--color);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
