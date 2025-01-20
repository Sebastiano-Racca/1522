<script lang="ts">
	import { page } from '$app/stores';
	import ModularForm from '$lib/components/ModularForm.svelte';
	import type { Input } from '$lib/types/input';
	import { EyeSolid, EyeSlashSolid, UserCircleSolid } from 'flowbite-svelte-icons';

	export let form;

	let error = form?.error;

	let inputs: Input[] = [
		{
			label: 'Username',
			name: 'username',
			placeholder: 'Username...',
			type: 'text',
			icon: UserCircleSolid
		},
		{
			label: 'Password',
			name: 'password',
			placeholder: 'Password...',
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

<ModularForm title="Login" bind:inputs submit="Loggati" center bind:error>
	<p class="mt-2 text-center text-xs" slot="cta">
		Non hai un account?
		<a
			href="/register?to={$page.url.searchParams.get('to') || '/'}"
			class="font-semibold text-blue-500 hover:text-blue-700">Registrati</a
		>
	</p>
</ModularForm>
