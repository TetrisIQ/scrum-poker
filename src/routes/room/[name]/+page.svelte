<script lang="ts">
	import {
		Button,
		Card,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { name } from '$lib/gun/localstore';
	import Name from '$lib/components/modals/Name.svelte';
	import { gun } from '$lib/gun/gunStore';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data: PageData;
	let showNameModal = false;
	let cartValues = ['?', '0', '0.5', '1', '2', '3', '5', '8', '13', '20', '40', '100'];
	function handleClick(value) {
		// poker.room.name.alice.value
		gun.get('poker').get('room').get($page.params.name).get('p').get($name).put({ value });
	}
	let results;
	onMount(async () => {
		if ($name === '') {
			showNameModal = true;
		}
		await gun
			.get('poker')
			.get('room')
			.get($page.params.name)
			.open((res) => (results = res));
	});
	function toggleShowResults() {
		// poker.room.name.show
		const state = results.show;
		gun
			.get('poker')
			.get('room')
			.get($page.params.name)
			.put({ show: state === undefined ? false : !state });
	}

	function deleteEstimation() {
		Object.keys(results.p).forEach((element) => {
			gun.get('poker').get('room').get($page.params.name).get('p').get(element).put({ value: '' });
		});
		toggleShowResults();
	}
</script>

<h2 class="text-2xl">Hi <span class="font-bold">{$name}</span></h2>
<Name
	show={showNameModal}
	on:submit={(e) => {
		name.set(e.detail.name);
		showNameModal = false;
	}}
/>
<div class="flex flex-wrap space-x-2 justify-center mt-8">
	{#each cartValues as value}
		<Card on:click={() => handleClick(value)} class="w-[90px] mb-4">
			<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{value}</h5>
		</Card>
	{/each}
</div>

<h3 class="text-xl font-bold mt-12 mb-6">Results:</h3>
<div class="my-2 flex justify-between">
	<Button on:click={deleteEstimation}>Delete estimations</Button>
	<Button on:click={toggleShowResults} color="light">Show</Button>
</div>
<Table>
	<TableHead>
		<TableHeadCell>Name</TableHeadCell>
		<TableHeadCell>Story Points</TableHeadCell>
	</TableHead>
	<TableBody>
		{#if results !== undefined}
			{#each Object.values(results.p) as v, i}
				<TableBodyRow>
					<TableBodyCell>{Object.keys(results.p)[i]}</TableBodyCell>
					<TableBodyCell>
						{#if results.show}
							{v.value}
						{:else}
							-
						{/if}
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		{/if}
	</TableBody>
</Table>
