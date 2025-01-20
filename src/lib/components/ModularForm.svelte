<script lang="ts">
	import { Button, Toast } from 'flowbite-svelte';
	import { CloseCircleSolid } from 'flowbite-svelte-icons';
	import { blur } from 'svelte/transition';
	import Input from './ModularInputForm.svelte';
	import type { Input as InputType } from '$lib/types/input';

	export let title: string;
	export let inputs: InputType[];
	export let submit: string;
	export let error: string | undefined;
	export let center: boolean = false;

	let toastStatus = Boolean(error);
	if (toastStatus) {
		setTimeout(() => (toastStatus = false), 1000);
	}
</script>

<Toast
	color="red"
	dismissable
	position="top-right"
	transition={blur}
	params={{ amount: 10 }}
	bind:toastStatus
>
	<svelte:fragment slot="icon">
		<CloseCircleSolid class="h-5 w-5" />
		<span class="sr-only">Error icon</span>
	</svelte:fragment>
	{error}
</Toast>

<div class="wrapper" class:center>
	<form method="post">
		<h1>{title}</h1>
		{#each inputs as input}
			<Input bind:input />
		{/each}
		<Button outline type="submit">{submit}</Button>
		<slot name="cta" />
	</form>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;

		form {
			display: flex;
			flex-direction: column;
			background-color: rgba(0, 0, 0, 0.1);
			padding: 3em;
			border-radius: 20px;

			h1 {
				font-size: xx-large;
				font-weight: bold;
				text-align: center;
				padding-bottom: 15px;
			}
		}
	}

	.center {
		margin: 50vh auto 0 auto;
		transform: translateY(-50%);
	}
</style>
