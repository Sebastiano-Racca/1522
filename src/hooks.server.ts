import { verify } from '$lib/server/jwt';

const unprotectedRoutes = ['/login', '/register', '/ticket'];

const isUnprotectedRoute = (path: string) =>
	path === '/' ? true : unprotectedRoutes.some((route) => path.startsWith(route));

export const handle = ({ event, resolve }) => {
	const jwt = event.cookies.get('jwt');

	if (jwt) {
		try {
			event.locals.jwt = verify(jwt);
		} catch (e) {
			event.cookies.delete('jwt', { path: '/' });
		}
	}

	if (!isUnprotectedRoute(event.url.pathname) && !event.locals.jwt) {
		return new Response(null, {
			status: 301,
			headers: { Location: `/login?to=${event.url.pathname}` }
		});
	}

	return resolve(event);
};
