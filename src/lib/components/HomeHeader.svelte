<script lang="ts">
	import type { UserWithoutPassword } from '$lib/types/user';
	import {
		Dropdown,
		DropdownItem,
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	export let user: UserWithoutPassword | undefined;
</script>

<header>
	<Navbar let:hidden let:toggle rounded color="form">
		<NavBrand href="https://www.1522.eu/" target="_blank">
			<img src="/logo_official.png" class="me-3 h-6 sm:h-9" alt="Logo" />
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden} class="ms-3 pt-6">
			<NavLi href="/">Home</NavLi>
			<NavLi href="/ticket/new">Nuovo Ticket</NavLi>
			<NavLi href="#info">Informazioni</NavLi>
			<NavLi href="#features">Features</NavLi>
			<NavLi href="#credits">Crediti</NavLi>
			{#if user}
				<NavLi class="cursor-pointer">
					{user.info?.name}
					{user.info?.surname}
					<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />
				</NavLi>
				<Dropdown>
					<DropdownItem href="/my">Area Personale</DropdownItem>
					<DropdownItem slot="footer" href="/signout?to=/">Sign out</DropdownItem>
				</Dropdown>
			{:else}
				<NavLi href="/login?to=/" class="self-center">Login</NavLi>
			{/if}
		</NavUl>
	</Navbar>
</header>
