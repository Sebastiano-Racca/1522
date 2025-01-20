import rbac from '$lib/rbac';
import { error } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (!rbac.isGranted(locals.jwt?.user.role || 'GUEST', 'home', 'read')) {
		return error(403, 'Non hai accesso a questa risorsa');
	}
};
