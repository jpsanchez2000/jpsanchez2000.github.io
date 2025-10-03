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

{@render children?.()}
