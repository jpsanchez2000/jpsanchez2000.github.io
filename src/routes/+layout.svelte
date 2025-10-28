<script lang="ts">
	import '../app.css';
	import jslogo from '$lib/assets/jslogo.png';

	let { children } = $props();

	export const prerender = true;
	export const trailingSlash = 'always'; // or 'always' or 'ignore'
</script>

<svelte:head>
	<title>Jude Sanchez</title>
	<link rel="icon" href={jslogo} />
</svelte:head>
<div class="h-full w-full bg-[url('/coastal-landscape-fantasy-style.jpg')] bg-cover bg-center">
	{@render children?.()}
</div>
