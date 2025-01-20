import type { UserPayload } from '$lib/types/login';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			jwt?: UserPayload;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
