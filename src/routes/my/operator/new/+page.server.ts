import { createUser } from '$lib/server/user';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, cookies, url }) => {
		const formData = await request.formData();
		const username = formData.get('username')?.toString();
		const password = formData.get('password')?.toString();
		const name = formData.get('name')?.toString();
		const surname = formData.get('surname')?.toString();

		if (!username || !password || !name || !surname) {
			return fail(400, { error: 'Devi specificare tutti i campi richiesti' });
		}

		const user = await createUser({
			username,
			password,
			name,
			surname,
			role: 'OPERATOR'
		});

		if (user === 409) {
			return fail(409, { error: "L'utente esiste già" });
		}

		return redirect(302, url.searchParams.get('to') || '/');
	}
};
