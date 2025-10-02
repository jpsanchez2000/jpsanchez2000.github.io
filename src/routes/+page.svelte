<script>
	import { JudeAbout, JudeAsci } from '$lib/assets/jude-asci';

	/**
	 * @type {any[]}
	 */
	let inputList = [{ type: 'response', text: JudeAsci + JudeAbout }];
	let typedValue = '';

	$: console.log(typedValue, inputList);

	// 	let`
	//     _____                  __                   ______                                 __
	//    |     \                |  \                 /      \                               |  \
	//     \$$$$$ __    __   ____| $$  ______        |  $$$$$$\  ______   _______    _______ | $$____    ______   ________
	//       | $$|  \  |  \ /      $$ /      \       | $$___\$$ |      \ |       \  /       \| $$    \  /      \ |        \
	//  __   | $$| $$  | $$|  $$$$$$$|  $$$$$$\       \$$    \   \$$$$$$\| $$$$$$$\|  $$$$$$$| $$$$$$$\|  $$$$$$\ \$$$$$$$$
	// |  \  | $$| $$  | $$| $$  | $$| $$    $$       _\$$$$$$\ /      $$| $$  | $$| $$      | $$  | $$| $$    $$  /    $$
	// | $$__| $$| $$__/ $$| $$__| $$| $$$$$$$$      |  \__| $$|  $$$$$$$| $$  | $$| $$_____ | $$  | $$| $$$$$$$$ /  $$$$_
	//  \$$    $$ \$$    $$ \$$    $$ \$$     \       \$$    $$ \$$    $$| $$  | $$ \$$     \| $$  | $$ \$$     \|  $$    \
	//   \$$$$$$   \$$$$$$   \$$$$$$$  \$$$$$$$        \$$$$$$   \$$$$$$$ \$$   \$$  \$$$$$$$ \$$   \$$  \$$$$$$$ \$$$$$$$$

	// 	`;

	// 	`
	//  ▖   ▌    ▄▖      ▌
	//  ▌▌▌▛▌█▌  ▚ ▀▌▛▌▛▘▛▌█▌▀▌
	// ▙▌▙▌▙▌▙▖  ▄▌█▌▌▌▙▖▌▌▙▖▙▖

	// 	`

	// 	`
	//     ░█████                   ░██                 ░██████                                    ░██
	//       ░██                    ░██                ░██   ░██                                   ░██
	//       ░██  ░██    ░██  ░████████  ░███████     ░██          ░██████   ░████████   ░███████  ░████████   ░███████  ░█████████
	//       ░██  ░██    ░██ ░██    ░██ ░██    ░██     ░████████        ░██  ░██    ░██ ░██    ░██ ░██    ░██ ░██    ░██      ░███
	// ░██   ░██  ░██    ░██ ░██    ░██ ░█████████            ░██  ░███████  ░██    ░██ ░██        ░██    ░██ ░█████████    ░███
	// ░██   ░██  ░██   ░███ ░██   ░███ ░██            ░██   ░██  ░██   ░██  ░██    ░██ ░██    ░██ ░██    ░██ ░██         ░███
	//  ░██████    ░█████░██  ░█████░██  ░███████       ░██████    ░█████░██ ░██    ░██  ░███████  ░██    ░██  ░███████  ░█████████

	// 	`
</script>

<div
	class="relative h-full w-full bg-[url('/coastal-landscape-fantasy-style.jpg')] bg-cover bg-center p-2"
>
	<!-- background overlay -->
	<div class="absolute inset-0 bg-black/50"></div>

	<!-- content -->
	<div
		class="relative z-10 m-0.5 flex h-full w-full flex-col rounded-2xl border-2 border-secondary-600 p-2 text-tertiary-600"
	>
		<div class="flex flex-col">
			{#each inputList as prevInput}
				<div class="flex">
					{#if prevInput.type === 'command'}
						<div>~/Portfolio %</div>
					{/if}
					<div
						class="ml-3 text-base leading-none base-letter-spacing whitespace-pre text-secondary-600"
					>
						{prevInput.text}
					</div>
				</div>
			{/each}
		</div>

		<div class="flex">
			<div>~/Portfolio %</div>
			<input
				class="m-0 h-5 border-0 bg-transparent text-base leading-none base-letter-spacing text-secondary-600 focus:ring-0 focus:outline-none"
				autofocus
				bind:value={typedValue}
				on:keypress={(key) => {
					if (key.key === 'Enter') {
						inputList = [...inputList, { type: 'command', text: typedValue }];
						typedValue = '';
					}
				}}
			/>
		</div>
	</div>
</div>
