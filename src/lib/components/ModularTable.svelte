<script lang="ts">
	import { Table, TableBody, TableHead, TableHeadCell } from 'flowbite-svelte';

	export let caption: string;
	export let headers: string[];
	export let color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' = 'green';
</script>

<Table {color} hoverable={true}>
	<caption
		class="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white"
	>
		{caption}
		<slot name="cta" />
	</caption>
	<TableHead>
		{#each headers as header}
			<TableHeadCell>{header}</TableHeadCell>
		{/each}
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		<slot />
	</TableBody>
</Table>
