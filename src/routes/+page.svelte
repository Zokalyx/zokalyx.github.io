<script lang="ts">
	import Main from '$lib/base/Main.svelte';
	import Profile from '$lib/tabs/Profile.svelte';
	import Engineer from '$lib/tabs/Engineer.svelte';
	import Artist from '$lib/tabs/Artist.svelte';
	import Musician from '$lib/tabs/Musician.svelte';
	import Contact from '$lib/tabs/Contact.svelte';
	import Developer from '$lib/tabs/Developer.svelte';
	import Designer from '$lib/tabs/Designer.svelte';
	import Geek from '$lib/tabs/Geek.svelte';

	const tabs = [
		{
			title: {
				EN: 'Profile',
				ES: 'Perfil'
			},
			font: 'Lora',
			color: '#d0d0d0',
			content: Profile
		},
		{
			title: {
				EN: 'Engineer',
				ES: 'Ingeniero'
			},
			font: 'Fjalla One',
			color: '#738cff',
			content: Engineer
		},
		{
			title: {
				EN: 'Developer',
				ES: 'Desarrollador'
			},
			font: 'Nanum Gothic Coding',
			color: '#fff176',
			content: Developer,
			rowGap: '2em',
			colGap: '4em'
		},
		{
			title: {
				EN: 'Designer',
				ES: 'Diseñador'
			},
			font: 'Josefin Sans',
			color: '#ff6161',
			content: Designer
		},
		{
			title: {
				EN: 'Artist',
				ES: 'Artista'
			},
			font: 'Comfortaa',
			color: '#76e5ff',
			content: Artist
		},
		{
			title: {
				EN: 'Musician',
				ES: 'Músico'
			},
			font: 'Pacifico',
			color: '#76ffa0',
			content: Musician
		},
		{
			title: {
				EN: 'Geek',
				ES: 'Geek'
			},
			font: 'Press Start 2P',
			color: '#ff86ea',
			content: Geek
		},
		{
			title: {
				EN: 'Contact',
				ES: 'Contacto'
			},
			font: 'Nunito Sans',
			color: '#d0d0d0',
			content: Contact,
			rowGap: '2em'
		}
	];
</script>

<Main {tabs} />
