<script>
	import { Icon, LightBulb, WrenchScrewdriver } from 'svelte-hero-icons';
</script>


<div class="w-full bg-white border-b">
	<div class="box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
		<div class="cols-span-1 bg-[#7DA5CF] flex w-full p-4 rounded-md">
			<div class="flex-1">
				<span class="text-xl font-medium text-white">1 </span><span class="text-white">alert</span><br
				/><span class="text-white">Energy Consumption</span>
			</div>
			<div><Icon class="w-6 text-white" solid src={LightBulb} /></div>
		</div>
	
		<div class="cols-span-1 bg-[#DF695B] flex w-full p-4 rounded-md">
			<div class="flex-1">
				<span class="text-xl font-medium text-white">1 </span><span class="text-white">alert</span><br
				/><span class="text-white">Lift</span>
			</div>
			<div><Icon class="w-6 text-white" solid src={WrenchScrewdriver} /></div>
		</div>
	
		<div class="cols-span-1 bg-[#DF695B] flex w-full p-4 rounded-md">
			<div class="flex-1">
				<span class="text-xl font-medium text-white">1 </span><span class="text-white">alert</span><br
				/><span class="text-white">Lift</span>
			</div>
			<div><Icon class="w-6 text-white" solid src={WrenchScrewdriver} /></div>
		</div>
	</div>
	
</div>
