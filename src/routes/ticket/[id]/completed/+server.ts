import rbac from '$lib/rbac/index.js';
import { updateTicketStatus } from '$lib/server/ticket.js';
import { TicketStatus } from '@prisma/client';
import { error, redirect } from '@sveltejs/kit';

export const GET = async ({ locals, url, params }) => {
	if (!rbac.isGranted(locals.jwt.user.role, 'ticket', 'update')) {
		error(403, 'Non puoi modificare questo ticket');
	}

	await updateTicketStatus(params.id, TicketStatus.COMPLETED);

	redirect(302, url.searchParams.get('to') || '/');
};
