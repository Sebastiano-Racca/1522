<script lang="ts">
	import ModularForm from '$lib/components/ModularForm.svelte';
	import type { Input } from '$lib/types/input';
	import type { Ticket } from '@prisma/client';

	export let data;

	const transformTicket = (ticket: Ticket, checked: boolean = false): Input => ({
		label: { text: ticket.title, link: `/ticket/${ticket.id}` },
		id: ticket.id,
		name: 'tickets',
		placeholder: '',
		type: 'checkbox',
		description: `${ticket.description.substring(0, 16)}...`,
		required: false,
		attributes: {
			checked,
			value: ticket.id
		}
	});

	const inputs: Input[] = [
		...data.tickets.map((ticket) => transformTicket(ticket)),
		...data.operator.assignedTickets.map((ticket) => transformTicket(ticket, true))
	];

	inputs.push({
		label: '',
		name: 'availableTickets',
		placeholder: '',
		type: 'hidden',
		attributes: {
			value: JSON.stringify(inputs.map((input) => input.id || ''))
		}
	});
</script>

<ModularForm
	title="Assegna/Rimuovi ticket a {data.operator.username}"
	{inputs}
	submit="Salva"
	error={undefined}
	center
/>
