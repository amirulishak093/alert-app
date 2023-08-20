<script lang="ts">
	import { onMount } from 'svelte';
	import { Icon, ChevronDown } from 'svelte-hero-icons';

	let isOpen = false;
	let dropdown: any;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function handleOutsideClick(event: MouseEvent) {
		if (dropdown && !dropdown.contains(event.target)) {
			isOpen = false;
		}
	}

	onMount(() => {
		window.addEventListener('click', handleOutsideClick);
		return () => {
			window.removeEventListener('click', handleOutsideClick);
		};
	});
</script>

<div class="relative z-50" bind:this={dropdown}>
	<button
		class="flex bg-white gap-x-2 items-center border px-4 h-10 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
		on:click={toggleDropdown}
	>
		<span>Legends</span>
		<Icon class="w-3" src={ChevronDown} />
	</button>

	{#if isOpen}
		<div class="absolute mt-2 py-2 w-40 bg-white border rounded-md shadow-md">
			<div class="w-full flex justify-between items-center px-4 py-2 hover:bg-[#F8F8F9]">
				<div>Critical</div>
				<div class="rounded-[2px] bg-red-600 w-3 h-3" />
			</div>
			<div class="w-full flex justify-between items-center px-4 py-2 hover:bg-[#F8F8F9]">
				<div>Normal</div>
				<div class="rounded-[2px] bg-blue-400 w-3 h-3" />
			</div>
		</div>
	{/if}
</div>
