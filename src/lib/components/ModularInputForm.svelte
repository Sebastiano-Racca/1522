<script lang="ts">
	import { Label, Input, InputAddon, ButtonGroup, Textarea, Toggle } from 'flowbite-svelte';
	import type { Input as InputType } from '$lib/types/input';

	export let input: InputType;
</script>

<div class="mb-6" class:hidden={input.type === 'hidden'}>
	<Label for={input.name} class="mb-2 block">
		{#if typeof input.label === 'object'}
			<a href={input.label.link}>{input.label.text}</a>
		{:else}
			{input.label}
		{/if}
	</Label>
	<ButtonGroup class="w-full">
		{#if input.icon}
			<InputAddon>
				{#if typeof input.icon === 'object' && 'onclick' in input.icon}
					<svelte:component
						this={input.icon.component}
						class="cursor-pointer"
						onclick={input.icon.onclick}
					/>
				{:else}
					<svelte:component this={input.icon} />
				{/if}
			</InputAddon>
		{/if}
		{#if input.type === 'textarea'}
			<Textarea
				id={input.id ?? input.name}
				name={input.name}
				placeholder={input.placeholder}
				required={input.required !== false}
				{...input.attributes || {}}
			/>
		{:else if input.type === 'checkbox'}
			<Toggle
				id={input.id ?? input.name}
				name={input.name}
				required={input.required !== false}
				{...input.attributes || {}}
			>
				{input.description}
			</Toggle>
		{:else}
			<Input
				id={input.id ?? input.name}
				name={input.name}
				placeholder={input.placeholder}
				bind:type={input.type}
				required={input.required !== false}
				{...input.attributes || {}}
			/>
		{/if}
	</ButtonGroup>
</div>
