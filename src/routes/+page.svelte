<script lang="ts">
	import { JudeAbout, JudeAsci, JudeAsciLong } from '$lib/assets/jude-asci';
	import BoxOutline from '$lib/BoxOutline.svelte';
	import { sideNavObj } from '$lib/SideNavObj';
	import { onMount, tick, type Component } from 'svelte';

	let inputList = [{ type: 'response', text: JudeAbout }];
	let typedValue = '';

	let endRef: HTMLDivElement;

	let selectedComponent: Component | undefined;

	onMount(() => {
		document.addEventListener('keypress', (event) => {
			if (event.key === 'Enter') {
				inputList = [...inputList, { type: 'command', text: typedValue }];
				const output: string = processCommands(typedValue);
				inputList = [...inputList, { type: 'response', text: output }];
				typedValue = '';
			}

			document.getElementById('terminalInput')?.focus();
		});
	});

	// Scroll to bottom whenever inputList changes
	// $: (async () => {
	// 	await tick(); // wait until DOM updates
	// 	if (endRef && inputList) {
	// 		endRef.scrollIntoView({ behavior: 'auto', block: 'end' });
	// 	}
	// })();

	function processCommands(command: string): string {
		const split = command.split(' ', 2);
		const firstCommand = split[0];
		const second = split[1];
		console.log('second', second === '');
		switch (firstCommand) {
			case 'aboutme':
				return JudeAsci + JudeAbout;
			case 'clear':
				inputList = [];
				return '';
			case 'echo':
				return second === '' ? ' ' : second;
			case '':
				return '';
			default:
				return command + ' is not a valid command please try again or type help.';
		}
	}
</script>

<div class="grid h-full grid-cols-[0.3fr_1fr] grid-rows-[min-content_1fr] gap-2 p-2">
	<BoxOutline
		extraTailwind="col-span-2 leading-none base-letter-spacing whitespace-pre text-secondary-600 text-[0.7rem]"
		>{JudeAsciLong}</BoxOutline
	>
	<BoxOutline>
		{#each sideNavObj as navObj}
			{console.log(navObj.name)}
			{#if navObj.type === 'header'}
				<div>{navObj.name}</div>
				<!-- svelte-ignore element_invalid_self_closing_tag -->
				<div class="h-0 border-1 border-secondary-600" />
			{:else}
				<button
					class="!m-0 cursor-pointer border-0 !p-0 transition hover:text-gray-400"
					on:click={() => {
						console.log('clicked', navObj.name);
						selectedComponent = navObj.details;
					}}
				>
					{navObj.name}
				</button>
			{/if}
		{/each}
	</BoxOutline>
	<BoxOutline extraTailwind="text-tertiary-600">
		{#if selectedComponent}
			<svelte:component this={selectedComponent} />
		{/if}

		<!-- <div class="flex flex-col">
			{#each inputList as prevInput}
				<div class="flex">
					{#if prevInput.type === 'command'}
						<div>~/Portfolio %</div>
					{/if}
					<div class="mt-1 ml-3 leading-none base-letter-spacing whitespace-pre text-secondary-600">
						{prevInput.text}
					</div>
				</div>
			{/each}
		</div>

		<div class="flex">
			<div class="text-nowrap">~/Portfolio %</div>
			<input
				id="terminalInput"
				class="m-0 mt-0.5 h-5 w-full border-0 bg-transparent leading-none base-letter-spacing text-secondary-600 focus:ring-0 focus:outline-none sm:text-[0.7rem] md:text-[1rem] lg:text-base"
				autofocus
				bind:value={typedValue}
			/>
		</div> 

		<div bind:this={endRef}></div> -->
	</BoxOutline>
</div>
