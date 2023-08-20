<script>
	import IntervalDropdown from './IntervalDropdown.svelte';
	import UserButton from './UserButton.svelte';
</script>

<header class="w-full border-b bg-white shadow-md">
	<div class="box py-3 flex items-center justify-between">
		<img alt="Medivest's logo" class="w-32" src="/images/logo.png" />

		<div class="flex gap-x-2 items-center">
			<IntervalDropdown />
			<UserButton />
		</div>
	</div>
</header>
