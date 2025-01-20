<script lang="ts">
	import ModularForm from '$lib/components/ModularForm.svelte';
	import type { Input } from '$lib/types/input';
	import {
		UserCircleSolid,
		EyeSolid,
		EyeSlashSolid,
		UserSolid,
		UsersSolid
	} from 'flowbite-svelte-icons';

	export let form;
	let error = form?.error;

	let inputs: Input[] = [
		{
			label: 'Il suo nome',
			name: 'name',
			placeholder: 'Mario',
			type: 'text',
			icon: UserSolid
		},
		{
			label: 'Il suo cognome',
			name: 'surname',
			placeholder: 'Rossi',
			type: 'text',
			icon: UsersSolid
		},
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
		}
	];
</script>

<ModularForm title="Nuovo Operatore" {inputs} submit="Crea" {error} center />
