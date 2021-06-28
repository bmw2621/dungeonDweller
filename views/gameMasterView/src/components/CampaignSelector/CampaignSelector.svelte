<script>
    import CampaignTable from "./CampaignTable.svelte"
    import Dialogue from "./Dialogue.svelte"

    const selectCampaign = e => {
        alert(JSON.stringify(e.detail, null, 2))
    }

</script>

<div id="container">
    <video loop autoplay>
        <track kind="captions" />
        <source src="bg.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>

    <Dialogue>
        <CampaignTable on:campaignSelected={e => selectCampaign(e)}/>
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