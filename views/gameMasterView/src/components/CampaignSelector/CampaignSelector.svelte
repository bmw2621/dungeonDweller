<script lang="ts">
    import CampaignTable from "./CampaignTable.svelte"
    import Confirmation from "./Confirmation.svelte"
    import Dialogue from "./Dialogue.svelte"
    import type { ICampaign } from "../../typings"

    let campaignSelected: ICampaign;
    
    const selectCampaign = (campaign: ICampaign) => {
        campaignSelected = campaign;
    }

</script>

<div id="campaignSelector">
    <video loop autoplay>
        <track kind="captions" />
        <source src="bg.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>

    <Dialogue>
        {#if campaignSelected}
        <Confirmation on:openCampaign on:campaignSelected={e => selectCampaign(e.detail)} campaignSelected={campaignSelected} />
        {:else}
        <CampaignTable on:campaignSelected={e => selectCampaign(e.detail)}/>
        {/if}
    </Dialogue>

</div>

<style>
    video {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    
</style>