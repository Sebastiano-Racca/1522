import bcrypt from 'bcrypt';
import prisma from './prisma';
import { Prisma, type UserRole } from '@prisma/client';

export const hashPassword = (plain: string) => bcrypt.hashSync(plain, 10);

export const comparePassword = bcrypt.compareSync;

export const createUser = async ({
	username,
	password,
	name,
	surname,
	phone_number,
	email,
	role = 'USER'
}: {
	username: string;
	password: string;
	name: string;
	surname: string;
	phone_number?: string;
	email?: string;
	role?: UserRole;
}) => {
	try {
		return await prisma.user.create({
			data: {
				username,
				password: hashPassword(password),
				role,
				info: {
					create: {
						name,
						surname,
						email,
						phone_number
					}
				}
			},
			include: {
				info: true
			}
		});
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			if (e.code === 'P2002') {
				return 409;
			}
		}

		throw e;
	}
};

export const getUser = async (username: string, password: string) => {
	const user = await prisma.user.findUnique({ where: { username }, include: { info: true } });
	if (!user || !comparePassword(password, user.password)) {
		return null;
	}

	return user;
};

export const deleteOperator = (id: number) =>
	prisma.user.delete({ where: { id, role: 'OPERATOR' } });

export const getOperators = () =>
	prisma.user.findMany({ where: { role: 'OPERATOR' }, include: { assignedTickets: true } });

export const getOperator = (id: number) =>
	prisma.user.findUnique({
		where: { id, role: 'OPERATOR' },
		include: { assignedTickets: true, info: true }
	});
