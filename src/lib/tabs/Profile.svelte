<script lang="ts">
	import Paragraph from '../base/Paragraph.svelte';
	import ProfileImage from '../base/ProfileImage.svelte';
	import profilePhoto from '$lib/assets/bio_pfp.jpg';
</script>

<!-- We need a preload opacity of 1 because this is the "home page", and onload doesn't work as expected. -->
<ProfileImage src={profilePhoto} alt="profile" height="20em" preloadOpacity={1} />
<Paragraph>
	Hi! I'm Francisco, a 22-year-old from Buenos Aires, Argentina. You will find many of my projects
	and information about me on this site. Hope you like it!<br /><br />I'm a guy with a diverse set
	of skills and interests and a generalist at heart. I'm mostly interested in technical and artistic
	areas, with varying levels of experience in each of them.<br /><br />Click on the different tabs
	to know more!
</Paragraph>
