<script lang="ts">
    import { campaignId } from "../../store.ts"
</script>

<div id="container">
    <div id="DmMap">
        <h2>CampaignId: {$campaignId}</h2>
    </div>
</div>

<style>
    #container{
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--secondaryBg);
    }

    #DmMap{
        background: var(--bloodRed);
        color: var(--highlight);

        width: 50%;
        height: 50%;

        border: 1px solid var(--highlight);
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>