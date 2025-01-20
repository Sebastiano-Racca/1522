import { getTicket } from '$lib/server/ticket';
import rbac from '$lib/rbac';
import { error } from '@sveltejs/kit';

export const load = async ({ params, locals }) => {
	const ticket = await getTicket(params.id);

	if (!ticket) {
		return error(404, 'Ticket non trovato');
	}

	if (!rbac.isGranted(locals.jwt?.user.role || 'GUEST', 'ticket', 'read')) {
		return error(403, 'Non hai accesso a questa risorsa');
	}

	return { ticket };
};
