<script lang="ts">
	import type { Ticket, User } from '@prisma/client';
	import ModularTable from './ModularTable.svelte';
	import OperatorInTable from './OperatorInTable.svelte';
	export let operators: (User & { assignedTickets: Ticket[] })[];
</script>

<ModularTable caption="Lista Operatori" headers={['ID', 'Username', 'Ticket Assegnati', 'Actions']}>
	<svelte:fragment>
		{#each operators as operator}
			<OperatorInTable {operator} />
		{/each}
	</svelte:fragment>

	<svelte:fragment slot="cta">
		<a href="/my/operator/new?to=/my">+</a>
	</svelte:fragment>
</ModularTable>
