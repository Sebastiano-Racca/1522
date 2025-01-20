import type { Information, User as PrismaUser, Ticket } from '@prisma/client';
import type { JwtPayload } from 'jsonwebtoken';

export interface User extends PrismaUser {
	info: Information;
	tickets: Ticket[];
}

export type UserWithoutPassword = Omit<User, 'password'>;

export interface UserUndefinedPassword extends UserWithoutPassword {
	password?: string;
}

export interface UserPayload extends JwtPayload {
	user: UserWithoutPassword;
}
