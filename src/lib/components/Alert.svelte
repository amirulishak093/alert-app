<script>
	import { Icon, LightBulb, ExclamationTriangle } from 'svelte-hero-icons';
</script>

<div class="bg-white overflow-auto flex w-full rounded-md border">
	<div class="bg-red-600 h-full w-1" />

	<div class="flex-1 col-span-1 flex flex-col gap-y-2 p-4">
		<div class="flex justify-between">
			<div class="flex gap-x-2">
				<div class="bg-[#7DA5CF] rounded-md p-2">
					<Icon class="w-6 text-white" solid src={LightBulb} />
				</div>
				<div>
					<span class="font-medium text-base">Energy Consumption</span>
					<br />
					<span class="font-medium text-gray-500">HSA-OTROOM2</span>
				</div>
			</div>

			<div>
				<Icon class="w-7 text-red-600" solid src={ExclamationTriangle} />
			</div>
		</div>

		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, accusamus?</p>

		<span class="text-end text-xs text-gray-400">25 August 2023 9:15PM</span>

		<div class="flex gap-x-2 pt-2">
			<button class="flex-1 h-10 rounded-md bg-gray-300">Dismiss</button>
			<a
				href="https://www.google.com"
				class="flex items-center justify-center flex-1 rounded-md bg-blue-500 text-white py-"
				>Respond</a
			>
		</div>
	</div>
</div>
