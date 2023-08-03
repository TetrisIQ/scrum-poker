<script>
	import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import '../app.css';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src="/favicon.png" class="mr-3 h-6 sm:h-9" alt="Scrum Poker" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Scrum Poker
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/">Enter Room input</NavLi>
		<NavLi href="/">Sign up</NavLi>
		<NavLi href="/">Login</NavLi>
		<!-- <NavLi href="/contact">Language</NavLi> -->
	</NavUl>
</Navbar>
<div class="w-2/3 mx-auto text-center">
	<slot />
</div>
