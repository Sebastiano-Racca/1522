import type { Component } from 'svelte';

export interface Input {
	label: string | { text: string; link: string };
	id?: string;
	name: string;
	placeholder: string;
	type: 'text' | 'password' | 'email' | 'tel' | 'textarea' | 'checkbox' | 'hidden';
	icon?: Component | { onclick: () => void; component: Component };
	required?: boolean;
	attributes?: { [key: string]: any };
	description?: string;
}
