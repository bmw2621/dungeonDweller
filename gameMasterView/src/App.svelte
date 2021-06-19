<script>
	import Layout from "./components/Layout/Layout.svelte"
	import CampaignSelector from "./components/CampaignSelector/CampaignSelector.svelte"
	// import { DmMap } from "./components/DmMap"
	import { campaignId } from "./store"


	// const setCampaignId = e => campaignId.set(e.detail)
	
</script>

<Layout>
	<p>Blah</p>
	{#if $campaignId}
	<!-- <DmMap /> -->
	{:else}
	<CampaignSelector />
	{/if}
</Layout>