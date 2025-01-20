import prisma from '../src/lib/server/prisma';
import { createUser } from '../src/lib/server/user';

const main = async () => {
	const { ADMIN_USERNAME, ADMIN_PASSWORD } = process.env;

	if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
		throw new Error('You must set ADMIN_USERNAME and ADMIN_PASSWORD');
	}

	await createUser({
		username: ADMIN_USERNAME,
		password: ADMIN_PASSWORD,
		name: 'admin',
		surname: 'admin',
		role: 'ADMIN'
	});
};

main()
	.catch(async (e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
