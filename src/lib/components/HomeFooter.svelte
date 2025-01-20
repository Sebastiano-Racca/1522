<script>
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
</script>

<div class="footer">
	<Footer>
		<FooterCopyright
			href="https://racca.me"
			by="Sebastiano Racca"
			year={new Date().getFullYear()}
		/>
	</Footer>
</div>

<style lang="scss">
	.footer {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
	}
</style>
