<script>
	/**
	 * @type {any[]}
	 */
	let inputList = [];
	let typedValue = '';

	$: console.log(typedValue, inputList);
</script>

<div class="h-full w-full bg-surface-900 p-2">
	<div class="m-0.5 flex h-full w-full flex-col-reverse rounded-2xl border border-primary-600 p-2">
		<div class="flex">
			<div>~/Portfolio %</div>
			<input
				class="h-6 border-0 bg-surface-900 text-base focus:ring-0 focus:outline-none"
				autofocus
				bind:value={typedValue}
				on:keypress={(key) => {
					console.log(key.key);
					if (key.key === 'Enter') {
						inputList = [...inputList, typedValue];
						typedValue = '';
					}
				}}
			/>
		</div>
		{#each inputList as prevInput}
			<div>{prevInput}</div>
		{/each}
	</div>
</div>
