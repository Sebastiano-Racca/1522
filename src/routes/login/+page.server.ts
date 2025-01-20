import { sign } from '$lib/server/jwt';
import { getUser } from '$lib/server/user.js';
import type { UserUndefinedPassword } from '$lib/types/user';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, cookies, url }) => {
		const formData = await request.formData();
		const username = formData.get('username')?.toString();
		const password = formData.get('password')?.toString();

		if (!username || !password) {
			return fail(400, { error: 'Devi specificare username e password' });
		}

		const user = (await getUser(username, password)) as UserUndefinedPassword;

		if (!user) {
			return fail(401, { error: 'Username o password incorretti' });
		}

		delete user.password;
		cookies.set('jwt', sign({ user }), { path: '/' });

		return redirect(303, url.searchParams.get('to') || '/');
	}
};
