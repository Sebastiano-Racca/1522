<script lang="ts">
	import AdminView from '$lib/components/AdminView.svelte';
	import OperatorView from '$lib/components/OperatorView.svelte';
	import UserView from '$lib/components/UserView.svelte';

	export let data;

	const userRole = data.jwt.user.role;
</script>

<main>
	{#if userRole === 'USER' && data.tickets}
		<UserView tickets={data.tickets} />
	{:else if userRole === 'OPERATOR'}
		<OperatorView tickets={data.tickets || []} />
	{:else if userRole === 'ADMIN'}
		<AdminView operators={data.operators || []} />
	{/if}
</main>
