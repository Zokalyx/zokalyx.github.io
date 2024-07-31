<script lang="ts">
	import Paragraph from '../base/Paragraph.svelte';
	import ProfileImage from '../base/ProfileImage.svelte';
	import profilePhoto from '$lib/assets/bio_pfp.jpg';
</script>

<ProfileImage src={profilePhoto} alt="profile" height="20em" />
<Paragraph>
	Hi! I'm Francisco, a 22-year-old from Buenos Aires, Argentina. You will find many of my projects
	and information about me on this site. Hope you like it!<br /><br />I'm a guy with a diverse set
	of skills and interests and a generalist at heart. I'm mostly interested in technical and artistic
	areas, with varying levels of experience in each of them.<br /><br />Click on the different tabs
	to know more!
</Paragraph>
