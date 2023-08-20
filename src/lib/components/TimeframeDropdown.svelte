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

<div class="relative" bind:this={dropdown}>
	<button
		class="flex bg-white justify-between w-full gap-x-2 items-center border px-4 h-10 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
		on:click={toggleDropdown}
	>
		<span>Select a Timeframe</span>
		<Icon class="w-3" src={ChevronDown} />
	</button>

	{#if isOpen}
		<div class="absolute w-full mt-2 py-2 bg-white border rounded-md shadow-md">
			<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-[#F8F8F9]"> Last 30 minutes </a>
			<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-[#F8F8F9]"> Last 1 hours </a>
			<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-[#F8F8F9]"> Last 12 hours </a>
			<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-[#F8F8F9]"> Last 24 hours </a>
			<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-[#F8F8F9]"> Last 2 days </a>
		</div>
	{/if}
</div>
