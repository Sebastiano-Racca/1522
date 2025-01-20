import { sign } from '$lib/server/jwt';
import { createUser } from '$lib/server/user';
import type { UserUndefinedPassword } from '$lib/types/user';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, cookies, url }) => {
		const formData = await request.formData();
		const username = formData.get('username')?.toString();
		const password = formData.get('password')?.toString();
		const name = formData.get('name')?.toString();
		const surname = formData.get('surname')?.toString();
		const phone_number = formData.get('phone_number')?.toString();
		const email = formData.get('email')?.toString();

		if (!username || !password || !name || !surname) {
			return fail(400, { error: 'Devi specificare tutti i campi richiesti' });
		}

		const user = await createUser({
			username,
			password,
			name,
			surname,
			phone_number,
			email
		});

		if (user === 409) {
			return fail(409, { error: "L'utente esiste già" });
		}

		delete (user as UserUndefinedPassword).password;
		cookies.set('jwt', sign({ user }), { path: '/' });

		return redirect(302, url.searchParams.get('to') || '/');
	}
};
