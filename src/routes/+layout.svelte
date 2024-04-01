<script>
	// @ts-nocheck
	import {
		Button,
		Input,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar,
		Toast,
		DarkMode,
		P,
		Alert
	} from 'flowbite-svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Logo from '$lib/components/Logo.svelte';
	// import { handleError } from '../hooks.client';
	import { onMount } from 'svelte';
	import { testConnection } from '$lib/gun/gunStore';
	$: showRoomShare = $page.params?.name !== undefined;
	let share = false;
	let value = '';
	let showConnectionFailed = false;
	function shareRoom() {
		share = true;
		setTimeout(() => (share = false), 3000);
		navigator.clipboard.writeText(location.href);
	}
	function openRoom() {
		if (value !== '') {
			goto(`/room/${value}`);
		}
	}
	onMount(() => {
		testConnection().onerror = function (event) {
			showConnectionFailed = true;
		};
	});
	function catchConnectionFailed(event, souce, lineno, colon, error) {
		console.log(event, event);
		//@ts-ignore
		return { error, event };
	}
</script>

<svelte:window on:error={handleError} />

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<Logo backgroundClass="fill-primary-600" />
		<span class="self-center whitespace-nowrap text-xl font-semibold ml-4 dark:text-white">
			Poddle Poker
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl
		ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center"
		{hidden}
	>
		{#if showRoomShare}
			<NavLi on:click={shareRoom} class="inline-flex text-center ml-auto cursor-pointer">
				<P class="">Room {$page.params.name}</P>
				<svg
					aria-hidden="true"
					class="w-4 h-4 m-auto ml-1"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
					></path>
				</svg>
			</NavLi>
		{:else}
			<NavLi>
				<div class=" inline-flex">
					<Input bind:value id="small-input" size="sm" placeholder="Room name" />
					<Button on:click={openRoom} class="ml-2">Enter</Button>
				</div>
			</NavLi>
		{/if}
		<NavLi><DarkMode /></NavLi>
		<!-- <NavLi href="/">Sign up</NavLi>
		<NavLi href="/">Login</NavLi> -->
		<!-- <NavLi href="/contact">Language</NavLi> -->
	</NavUl>
</Navbar>
<Alert class="{showConnectionFailed ? 'block' : 'hidden'} text-center" color="red">
	<span class="font-bold">Connection failed!</span>
	Connection was not possible, maybe try to turn off your vpn or disable your proxy.
</Alert>
<div class="w-1/2 mx-auto text-center mb-16">
	<slot />
</div>
<Toast open={share} color="green" position="top-right">
	<svelte:fragment slot="icon">
		<svg
			aria-hidden="true"
			class="w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
				clip-rule="evenodd"
			></path></svg
		>
		<span class="sr-only">Check icon</span>
	</svelte:fragment>
	Copyed to clipboad
</Toast>
