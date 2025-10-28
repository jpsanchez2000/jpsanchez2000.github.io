<script lang="ts">
	export let extraTailwind: string = '';
</script>

<div
	class={`flex h-full w-full flex-col overflow-y-auto rounded-2xl border-3 border-secondary-600 bg-black/50 p-2 ${extraTailwind}`}
>
	<slot></slot>
</div>
