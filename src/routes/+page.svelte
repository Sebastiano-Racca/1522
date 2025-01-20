<script lang="ts">
	import HomeContent from '$lib/components/HomeContent.svelte';
	import HomeFooter from '$lib/components/HomeFooter.svelte';
	import HomeHeader from '$lib/components/HomeHeader.svelte';

	export let data;
</script>

<HomeHeader user={data.jwt?.user} />

<HomeContent />

<HomeFooter />
