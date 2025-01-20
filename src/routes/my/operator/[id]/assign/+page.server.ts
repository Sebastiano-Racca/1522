import rbac from '$lib/rbac/index.js';
import { getPendingTickets, updateTicketsStatus } from '$lib/server/ticket';
import { TicketStatus } from '@prisma/client';
import { redirect } from '@sveltejs/kit';
import { error } from 'console';

export const load = async ({ locals }) => {
	if (!rbac.isGranted(locals.jwt.user.role, 'operator', 'update')) {
		error(403, 'Non hai accesso a questa risorsa');
	}

	return {
		tickets: await getPendingTickets()
	};
};

export const actions = {
	default: async ({ request, params, url }) => {
		const formData = await request.formData();
		const selectedTickets = formData.getAll('tickets').map((t) => t.toString());
		const availableTickets: string[] = JSON.parse(
			formData.get('availableTickets')?.toString() || '[]'
		);

		await Promise.all([
			updateTicketsStatus(selectedTickets, TicketStatus.ASSIGNED, +params.id),
			updateTicketsStatus(
				availableTickets.filter((ticket) => !selectedTickets.includes(ticket)),
				TicketStatus.PENDING
			)
		]);

		redirect(302, url.searchParams.get('to') || '/');
	}
};
