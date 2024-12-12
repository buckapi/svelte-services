<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Header from '$lib/components/ui/header.svelte';
	import Footer from '$lib/components/ui/footer.svelte';
	import ArrouUp from '$lib/components/ui/arrou-up.svelte';
	import MapHeader from '$lib/components/ui/map-header.svelte'	;
	import ThreeHeader from '$lib/components/ui/3-header.svelte';
	import { VisitTracker } from '$lib/services/visitTracker';

	onMount(async () => {
		if ($page.url.pathname === '/visits') {
			return;
		}

		const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		const tracker = new VisitTracker();
		await tracker.trackVisit();
		if (isMobile) {
			window.location.href = 'https://mobile-serviapp.buckapi.com';
			return;
		}	
		goto('/3');
	});

	// Agregar /visits a las rutas sin elementos
	const routesWithoutElements = ['/map-view', '/visits'];
	$: showMapHeader = $page.url.pathname === '/map-view';
	$: showThreeHeader = $page.url.pathname === '/3';
	$: showElements = !routesWithoutElements.includes($page.url.pathname);
</script>
  <div class="boxed_wrapper">

	{#if showMapHeader}
		<MapHeader />
	{:else if showThreeHeader}
		<ThreeHeader />
	{:else}
		<Header />
	{/if}
	
	<slot />
	
	{#if showElements}
		<Footer />
		<ArrouUp />
	{/if}
</div>
