<script>
	import { getContext } from 'svelte';
	import { Icon, Funnel } from 'svelte-hero-icons';

	const { toggleFilterMenu } = getContext('filterMenu');
</script>

<!-- Dropdown -->

<button
	class="flex gap-x-2 items-center border px-4 h-10 bg-white rounded-md focus:outline-none focus:ring focus:ring-blue-300"
	on:click={toggleFilterMenu}
>
	<Icon class="w-5" src={Funnel} />
	<span>Filter</span>
</button>
