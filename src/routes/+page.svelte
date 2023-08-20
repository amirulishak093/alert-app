<script>
	import Alert from '$lib/components/Alert.svelte';
	import FilterButton from '$lib/components/FilterButton.svelte';
	import FilterMenu from '$lib/components/FilterMenu.svelte';
	import Header from '$lib/components/Header.svelte';
	import Legends from '$lib/components/Legends.svelte';
	import Overview from '$lib/components/Overview.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import SortDropdown from '$lib/components/SortDropdown.svelte';
	import Toast from '$lib/components/Toast.svelte';

	import { onMount, setContext } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Icon, ArrowLongUp } from 'svelte-hero-icons';
	import Overlay from '$lib/components/Overlay.svelte';

	let isFilterMenuOpen = false;

	setContext('filterMenu', {
		toggleFilterMenu
	});

	function toggleFilterMenu() {
		isFilterMenuOpen = !isFilterMenuOpen;
	}

	let active = false;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleScroll() {
		active = window.scrollY > 300;
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<div class="relative min-h-screen bg-[#f8f8f8]">
	<Header />
	<Toast />
	<Overview />

	<div>
		<div class="flex justify-between box pt-4">
			<Legends />

			<div class="flex gap-x-2">
				<SortDropdown />
				<FilterButton />
			</div>
		</div>

		<FilterMenu open={isFilterMenuOpen} />

		<div class="box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap pt-4 pb-24">
			<Alert />
			<Alert />
			<Alert />
			<Alert />
			<Alert />
			<Alert />
		</div>
	</div>

	<Overlay>Hey</Overlay>

	{#if active}
		<button
			class="fixed bottom-8 right-4 p-3 bg-black text-white rounded opacity-30 z-[1003]"
			on:click={scrollToTop}
			transition:fade={{ duration: 150 }}
		>
			<Icon class="w-6" src={ArrowLongUp} />
		</button>
	{/if}

	<Pagination />
</div>
