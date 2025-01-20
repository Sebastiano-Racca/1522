<script lang="ts">
	import type { Ticket } from '@prisma/client';

	export let tickets: Ticket[];
	import TicketInTable from './TicketInTable.svelte';
	import ModularTable from './ModularTable.svelte';
</script>

<ModularTable caption="I Miei Ticket" headers={['ID', 'Titolo', 'Descrizione', 'Status']}>
	{#each tickets as ticket, indx}
		<TicketInTable {ticket} />
	{/each}
</ModularTable>
