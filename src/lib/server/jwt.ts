import { env } from '$env/dynamic/private';
import type { LoginPayload } from '$lib/types/login';
import jwt from 'jsonwebtoken';

export const sign = (data: object) =>
	jwt.sign(
		{
			exp: Math.floor(Date.now() / 1000) + +env.SESSION_EXPIRATION,
			...data
		},
		env.SESSION_SECRET
	);

export const verify = (token: string) => jwt.verify(token, env.SESSION_SECRET) as LoginPayload;
