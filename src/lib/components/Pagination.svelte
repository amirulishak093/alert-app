<script>
	import { Icon, ChevronLeft, ChevronRight } from 'svelte-hero-icons';
</script>

<div class="fixed bottom-0 left-0 w-full bg-white  py-4 border-t z-[1002]">
	<div class="mx-auto w-40 p-2 flex justify-between border rounded-full">
		<button><Icon class="w-5" src={ChevronLeft} /></button>
		<div>Page 1</div>
		<button><Icon class="w-5" src={ChevronRight} /></button>
	</div>
</div>
