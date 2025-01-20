<script lang="ts">
	import type { Ticket } from '@prisma/client';
	import { Button, TableBodyCell, TableBodyRow } from 'flowbite-svelte';

	export let ticket: Ticket;
	export let actions: boolean = false;

	let expanded = false;

	const expand = () => (expanded = !expanded);
</script>

<TableBodyRow>
	<TableBodyCell><a href="/ticket/{ticket.id}" target="_blank">{ticket.id}</a></TableBodyCell>
	<TableBodyCell>{ticket.title}</TableBodyCell>
	<TableBodyCell class="description">
		{#if ticket.description.length <= 32}
			{#each ticket.description.split(/\n|\r\n/g).map((v) => {
				return { text: v, br: '<br>' };
			}) as { text, br }}
				{text}
				{@html br}
			{/each}
		{:else}
			<button onclick={expand}>
				{#if expanded}
					{#each ticket.description.split(/\n|\r\n/g).map((v) => {
						return { text: v, br: '<br>' };
					}) as { text, br }}
						{text}
						{@html br}
					{/each}
				{:else}
					{ticket.description.substring(0, 32)}...
				{/if}
			</button>
		{/if}
	</TableBodyCell>
	<TableBodyCell>{ticket.status}</TableBodyCell>
	{#if actions}
		<TableBodyCell>
			<Button
				color="green"
				title="Segna come completato"
				href="/ticket/{ticket.id}/completed?to=/my">Completato</Button
			>
		</TableBodyCell>
	{/if}
</TableBodyRow>

<style lang="scss">
	:global(.description) {
		display: inline-block;
		overflow: hidden;
		overflow-wrap: break-word;
		inline-size: 500px;
		white-space: normal;
	}

	button {
		width: 100%;
		text-align: left;
	}
</style>
