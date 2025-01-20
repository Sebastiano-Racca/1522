import rbac from '$lib/rbac/';
import { deleteOperator } from '$lib/server/user';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { error, redirect } from '@sveltejs/kit';

export const GET = async ({ locals, params, url }) => {
	if (!rbac.isGranted(locals.jwt.user.role, 'operator', 'delete')) {
		error(403, 'Non puoi eliminare operatori');
	}

	try {
		await deleteOperator(+params.id);
	} catch (err) {
		if (!(err instanceof PrismaClientKnownRequestError)) {
			// the record is already deleted
			throw err;
		}
	}

	redirect(302, url.searchParams.get('to') || '/');
};
