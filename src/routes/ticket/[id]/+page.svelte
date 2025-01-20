<script lang="ts">
	export let data;
</script>

<main>
	<section class="header">
		<h1>Ticket ID: {data.ticket.id}</h1>
	</section>
	<section class="details">
		<h2>Status</h2>
		<span
			class="status"
			class:pending={data.ticket.status === 'PENDING'}
			class:assigned={data.ticket.status === 'ASSIGNED'}
			class:completed={data.ticket.status === 'COMPLETED'}
		>
			{data.ticket.status}
		</span>
		<h2>Titolo</h2>
		<p>{data.ticket.title}</p>

		<h2>Descrizione</h2>
		<p>
			{#each data.ticket.description.split(/\n|\r\n/g).map((v) => {
				return { text: v, br: '<br>' };
			}) as { text, br }}
				{text}
				{@html br}
			{/each}
		</p>

		<p><strong>Creato il:</strong> {data.ticket.createdAt}</p>
		{#if data.ticket.closedAt}
			<p><strong>Closed At:</strong> {data.ticket.closedAt || ''}</p>
		{/if}
	</section>

	<section class="info">
		<h2>Creato da</h2>
		<p><strong>Username:</strong> {data.ticket.createdBy?.username || 'GUEST'}</p>
		<p>
			<strong>Nome:</strong>
			{data.ticket.info.name || 'N/A'}
			{data.ticket.info.surname || ''}
		</p>
		<p>
			<strong>Email:</strong>
			{data.ticket.info.email || 'N/A'}
		</p>
		<p>
			<strong>Numero di Telefono:</strong>
			{data.ticket.info.phone_number || 'N/A'}
		</p>
	</section>
</main>

<style lang="scss">
	main {
		max-width: 800px;
		margin: 20px auto;
		background: #fff;
		border-radius: 8px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		padding: 20px;

		h2 {
			font-size: 18px;
			font-weight: bold;
			margin: 10px 0;
		}

		.header {
			border-bottom: 2px solid #eee;
			padding-bottom: 10px;
			margin-bottom: 20px;

			h1 {
				font-size: 24px;
				font-weight: bolder;
				margin: 0;
			}
		}

		.details {
			margin-bottom: 20px;

			p {
				margin: 5px 0;
				line-height: 1.6;
			}

			.status {
				display: inline-block;
				padding: 5px 10px;
				border-radius: 4px;
				font-size: 14px;
				font-weight: bold;

				&.pending {
					background-color: #f9d342;
					color: #7a5d00;
				}

				&.assigned {
					background-color: #42a5f5;
					color: #ffffff;
				}

				&.completed {
					background-color: #66bb6a;
					color: #ffffff;
				}
			}
		}

		.info {
			border-top: 2px solid #eee;
			padding-top: 10px;

			p {
				margin: 3px 0;
			}
		}
	}
</style>
