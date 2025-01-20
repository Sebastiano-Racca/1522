import rbac from '$lib/rbac';
import { createTicket } from '$lib/server/ticket.js';
import { error, fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!rbac.isGranted(locals.jwt?.user.role || 'GUEST', 'ticket', 'create')) {
		return error(403, 'Non hai accesso a questa risorsa');
	}
};

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();

		let formTicket = {
			name:
				formData.get('name')?.toString() ??
				new Error('Devi specificare il nome di chi sta richiedendo aiuto'),
			surname:
				formData.get('surname')?.toString() ??
				new Error('Devi specificare il cognome di chi sta richiedendo aiuto'),
			title:
				formData.get('title')?.toString() ??
				new Error('Devi specificare la breve descrizione del problema'),
			description:
				formData.get('description')?.toString() ??
				new Error('Devi specificare la descrizione del problema'),
			email: formData.get('email')?.toString(),
			phone_number: formData.get('phone_number')?.toString()
		};

		for (const val of Object.values(formTicket)) {
			if (val instanceof Error) {
				return fail(400, { error: val.message });
			}
		}

		const ticket = await createTicket(
			formTicket.title as string,
			formTicket.description as string,
			formTicket.name as string,
			formTicket.surname as string,
			formTicket.email as string,
			formTicket.phone_number as string,
			locals.jwt?.user.id
		);

		redirect(301, `/ticket/${ticket.id}`);
	}
};
