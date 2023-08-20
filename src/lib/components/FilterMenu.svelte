<script>
	import { slide } from 'svelte/transition';
	import TimeframeDropdown from './TimeframeDropdown.svelte';

	export let open = true;
</script>

{#if open}
	<div class="box pt-4 pb-2" transition:slide={{ axis: 'y', duration: 150 }}>
		<span class="font-medium">Timeframe</span>

		<TimeframeDropdown />
	</div>
{/if}
