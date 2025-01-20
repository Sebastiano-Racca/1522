<script lang="ts">
	import type { Ticket } from '@prisma/client';
	import ModularTable from './ModularTable.svelte';
	import TicketInTable from './TicketInTable.svelte';

	export let tickets: Ticket[];
</script>

<ModularTable
	caption="Ticket Assegnati"
	headers={['ID', 'Titolo', 'Descrizione', 'Status', 'Azioni']}
>
	{#each tickets as ticket, indx}
		<TicketInTable {ticket} actions />
	{/each}
</ModularTable>
