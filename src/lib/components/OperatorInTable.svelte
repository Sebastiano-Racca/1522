<script lang="ts">
	import type { Ticket, User } from '@prisma/client';
	import { TableBodyCell, TableBodyRow } from 'flowbite-svelte';

	export let operator: User & { assignedTickets: Ticket[] };
</script>

<TableBodyRow>
	<TableBodyCell>{operator.id}</TableBodyCell>
	<TableBodyCell>{operator.username}</TableBodyCell>
	<TableBodyCell class="assignedTickets">
		{#each operator.assignedTickets as ticket}
			<a href="/ticket/{ticket.id}">{ticket.id}</a>
		{/each}
	</TableBodyCell>
	<TableBodyCell>
		<a
			href="/my/operator/{operator.id}/assign?to=/my"
			class="font-medium text-primary-600 hover:underline dark:text-primary-500"
		>
			Assegna Ticket
		</a>
		<a
			href="/my/operator/{operator.id}/delete?to=/my"
			class="font-medium text-red-600 hover:underline dark:text-red-500"
		>
			Rimuovi
		</a>
	</TableBodyCell>
</TableBodyRow>

<style lang="scss">
	:global(.assignedTickets) {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;

		a {
			background-color: rgba(0, 0, 0, 0.09);
			padding: 3px;
			border-radius: 5px;
		}
	}
</style>
