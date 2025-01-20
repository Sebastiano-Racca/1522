export const GET = ({ cookies, url }) => {
	cookies.delete('jwt', { path: '/' });
	const to = url.searchParams.get('to') || '/';
	return new Response(null, { status: 302, headers: { Location: to } });
};
