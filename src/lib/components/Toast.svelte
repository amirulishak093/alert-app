<script lang="ts">
	import { Icon, XMark, ExclamationTriangle } from 'svelte-hero-icons';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	let isToastVisible = true;

	function closeToast() {
		isToastVisible = false;
		dispatch('toastClosed');
	}
</script>

{#if isToastVisible}
	<div
		class="w-full bg-red-600 sticky top-0 shadow-md z-[999]"
		in:fly={{ y: 10, duration: 150 }}
		out:fly={{ y: -10, duration: 100 }}
	>
		<div class="box flex justify-between py-4 text-white">
			<div class="w-full items-center flex gap-x-2">
				<div><Icon class="w-5 text-white" src={ExclamationTriangle} /></div>

				<div class="flex-1">
					<span>Server Outage Detected!</span>
				</div>
			</div>
			<button on:click={closeToast}><Icon class="w-5 text-white" src={XMark} /></button>
		</div>
	</div>
{/if}

<style>
</style>
