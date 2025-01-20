import { getOperator } from '$lib/server/user';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const operator = await getOperator(+params.id);

	if (!operator) {
		error(404, 'Operatore non trovato');
	}

	return { operator };
};
