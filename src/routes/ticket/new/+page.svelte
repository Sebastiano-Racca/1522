<script>
	import ModularForm from '$lib/components/ModularForm.svelte';
	import {
		UserSolid,
		UsersSolid,
		EnvelopeSolid,
		PhoneSolid,
		ExclamationCircleSolid,
		AnnotationSolid
	} from 'flowbite-svelte-icons';

	export let data;
	export let form;

	let error = form?.error;
</script>

<ModularForm
	title="Nuovo Ticket di Supporto"
	inputs={[
		{
			label: 'Nome',
			name: 'name',
			placeholder: 'Mario',
			type: 'text',
			icon: UserSolid,
			attributes: {
				readonly: Boolean(data.jwt?.user.info.name),
				value: data.jwt?.user.info.name
			}
		},
		{
			label: 'Cognome',
			name: 'surname',
			placeholder: 'Rossi',
			type: 'text',
			icon: UsersSolid,
			attributes: {
				readonly: Boolean(data.jwt?.user.info.surname),
				value: data.jwt?.user.info.surname
			}
		},
		{
			label: 'Email',
			name: 'email',
			placeholder: 'mario.rossi@example.com',
			type: 'email',
			icon: EnvelopeSolid,
			attributes: {
				readonly: Boolean(data.jwt?.user.info.email),
				value: data.jwt?.user.info.email
			}
		},
		{
			label: 'Telefono',
			name: 'phone_number',
			placeholder: '+39 0123456789',
			type: 'tel',
			icon: PhoneSolid,
			attributes: {
				readonly: Boolean(data.jwt?.user.info.phone_number),
				value: data.jwt?.user.info.phone_number
			}
		},
		{
			label: 'Titolo',
			name: 'title',
			placeholder: 'Breve descrizione del problema',
			type: 'text',
			icon: ExclamationCircleSolid
		},
		{
			label: 'Descrizione',
			name: 'description',
			placeholder: 'Descrizione dettagliata del problema',
			type: 'textarea',
			icon: AnnotationSolid
		}
	]}
	submit="Invia"
	center
	bind:error
/>
