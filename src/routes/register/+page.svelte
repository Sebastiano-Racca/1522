<script lang="ts">
	import { page } from '$app/stores';
	import ModularForm from '$lib/components/ModularForm.svelte';
	import type { Input } from '$lib/types/input.js';
	import {
		UserCircleSolid,
		EyeSolid,
		EyeSlashSolid,
		UserSolid,
		UsersSolid,
		PhoneSolid,
		EnvelopeSolid
	} from 'flowbite-svelte-icons';

	export let form;
	let error = form?.error;

	let inputs: Input[] = [
		{
			label: 'Username',
			name: 'username',
			placeholder: 'username...',
			type: 'text',
			icon: UserCircleSolid
		},
		{
			label: 'Password',
			name: 'password',
			placeholder: 'password...',
			type: 'password',
			icon: {
				onclick: () => {
					inputs = inputs.map((input) =>
						input.name === 'password' && 'component' in input.icon
							? {
									...input,
									type: input.type === 'password' ? 'text' : 'password',
									icon: {
										...input.icon,
										component: input.type === 'password' ? EyeSlashSolid : EyeSolid
									}
								}
							: input
					);
				},
				component: EyeSolid
			}
		},
		{
			label: 'Il tuo nome',
			name: 'name',
			placeholder: 'Mario',
			type: 'text',
			icon: UserSolid
		},
		{
			label: 'Il tuo cognome',
			name: 'surname',
			placeholder: 'Rossi',
			type: 'text',
			icon: UsersSolid
		},
		{
			label: 'Il tuo numero di telefono',
			name: 'phone_number',
			placeholder: '+39 0123456789',
			type: 'tel',
			required: false,
			icon: PhoneSolid
		},
		{
			label: 'La tua email',
			name: 'email',
			placeholder: 'mario.rossi@example.com',
			type: 'email',
			required: false,
			icon: EnvelopeSolid
		}
	];
</script>

<ModularForm title="Registrati" bind:inputs submit="Registrati" center bind:error>
	<p class="mt-2 text-center text-xs" slot="cta">
		Hai già un account?
		<a
			href="/login?to={$page.url.searchParams.get('to') || '/'}"
			class="font-semibold text-blue-500 hover:text-blue-700">Loggati</a
		>
	</p>
</ModularForm>
