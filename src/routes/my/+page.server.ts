import { getTicketsFromOperator, getTicketsFromUser } from '$lib/server/ticket';
import { getOperators } from '$lib/server/user';

export const load = async ({ locals }) => {
	if (locals.jwt.user.role === 'USER') {
		return {
			tickets: await getTicketsFromUser(locals.jwt.user.id)
		};
	}

	if (locals.jwt.user.role === 'OPERATOR') {
		return {
			tickets: await getTicketsFromOperator(locals.jwt.user.id)
		};
	}

	if (locals.jwt.user.role === 'ADMIN') {
		return {
			operators: await getOperators()
		};
	}
};
