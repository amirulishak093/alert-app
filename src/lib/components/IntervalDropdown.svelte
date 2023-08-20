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

<div class="relative z-[1000]" bind:this={dropdown}>
	<button
		class="flex bg-white gap-x-2 items-center border px-3 h-10 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
		on:click={toggleDropdown}
	>
		<span>5s</span>
		<Icon class="w-3" src={ChevronDown} />
	</button>

	{#if isOpen}
		<div class="absolute right-0 mt-2 py-2 w-20 bg-white border rounded-md shadow-md">
			<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-[#F8F8F9]">Off</a>
			<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-[#F8F8F9]">5s</a>
			<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-[#F8F8F9]">10s</a>
			<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-[#F8F8F9]">30s</a>
			<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-[#F8F8F9]">1m</a>
			<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-[#F8F8F9]">5m</a>
		</div>
	{/if}
</div>
