<script>
	import { Button, Input, Label, Modal } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';
	export let show = false;
	import { name } from '$lib/gun/localstore';

	const dispatch = createEventDispatcher();

	function submit() {
		dispatch('submit', {
			name: $name
		});
	}
</script>

<Modal title="Choose a name" bind:open={show}>
	<form class="flex flex-col space-y-6" on:submit|preventDefault={submit}>
		<Label class="space-y-2">
			<span>Your Name</span>
			<Input bind:value={$name} type="text" name="name" placeholder="Your name" required />
		</Label>
		<Button type="submit" class="w-full1">Submit</Button>
	</form>
</Modal>
