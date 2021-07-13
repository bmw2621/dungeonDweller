<script lang="ts">
	import { Layout } from "./components/Layout/"
	import { CampaignSelector } from "./components/CampaignSelector"
	import { DmMap } from "./components/DmMap"
	import { campaignId } from "./store.ts"


	const openCampaign = (id: number) => {
		console.log(id)
		campaignId.set(id)
	}
	
</script>

<Layout>
	{#if $campaignId}
	<DmMap />
	{:else}
	<CampaignSelector on:openCampaign={e => openCampaign(e.detail)}/>
	{/if}
</Layout>