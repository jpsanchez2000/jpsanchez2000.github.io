<script lang="ts">
	import { JudeAbout, JudeAsci } from '$lib/assets/jude-asci';
	import { onMount, tick } from 'svelte';

	let inputList = [{ type: 'response', text: JudeAsci + JudeAbout }];
	let typedValue = '';

	let endRef: HTMLDivElement;

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
	$: (async () => {
		await tick(); // wait until DOM updates
		if (endRef && inputList) {
			endRef.scrollIntoView({ behavior: 'auto', block: 'end' });
		}
	})();

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

<div
	class="relative h-full w-full bg-[url('/coastal-landscape-fantasy-style.jpg')] bg-cover bg-center p-2"
>
	<div
		class="z-10 flex h-full w-full flex-col overflow-y-auto rounded-2xl border-4 border-secondary-600 bg-black/50 p-2 text-[0.4rem] text-tertiary-600 sm:text-[0.7rem] md:text-[1rem] lg:text-base"
	>
		<div class="flex flex-col">
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

		<!-- Input row -->
		<div class="flex">
			<div class="text-nowrap">~/Portfolio %</div>
			<input
				id="terminalInput"
				class="m-0 mt-0.5 h-5 w-full border-0 bg-transparent leading-none base-letter-spacing text-secondary-600 focus:ring-0 focus:outline-none sm:text-[0.7rem] md:text-[1rem] lg:text-base"
				autofocus
				bind:value={typedValue}
			/>
		</div>

		<!-- Anchor for auto-scroll -->
		<div bind:this={endRef}></div>
	</div>
</div>
