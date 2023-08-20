<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { fly } from 'svelte/transition';
	import type { ActionData, SubmitFunction } from './$types';

	export let form: ActionData;

	const submit: SubmitFunction = ({ formElement, formData, action, cancel }) => {
		return async ({ result }) => {
			await applyAction(result);

			if (result.type === 'success') {
			}

			if (result.type === 'failure') {
			}

			if (result.type === 'redirect') {
			}

			if (result.type === 'error') {
			}
		};
	};
</script>

<div class="w-full flex justify-center items-center h-screen bg-[#f8f8f8]">
	<form
		method="POST"
		use:enhance={submit}
		class="flex flex-col items-center bg-white shadow-md rounded-md px-4 sm:px-8 pt-6 pb-8 mb-4 w-full sm:max-w-md"
	>
		<img alt="Medivest's logo" class="w-32 text-center mb-6" src="/images/logo.png" />

		<div class="w-full mb-4">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
			<input
				name="email"
				class="appearance-none border rounded w-full h-10 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 {form
					?.errors?.email && 'ring ring-red-400'}"
				placeholder="Enter your email"
				type="email"
			/>

			{#if form?.errors?.email}
				<span
					in:fly={{ y: 10, duration: 150 }}
					out:fly={{ y: -10, duration: 100 }}
					class="block mt-2 text-red-400">{form?.errors?.email}</span
				>
			{/if}
		</div>

		<div class="w-full mb-6">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
			<input
				name="password"
				class="appearance-none border rounded w-full h-10 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 {form
					?.errors?.password && 'ring ring-red-400'}"
				placeholder="Enter your password"
				type="password"
			/>
			{#if form?.errors?.password}
				<span
					in:fly={{ y: 10, duration: 150 }}
					out:fly={{ y: -10, duration: 100 }}
					class="block mt-2 text-red-400">{form?.errors?.password}</span
				>
			{/if}
		</div>

		<div class="w-full flex items-center justify-center">
			<button
				class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Login
			</button>
		</div>
	</form>
</div>
