<script lang="ts">
    import {createEventDispatcher} from 'svelte'
    import {formatDate} from "../../utils"
    import type { ICampaign } from "../../typings"
    export let campaignSelected: ICampaign;

    const dispatch = createEventDispatcher();

    const handleCancelCampaign = () => {
        dispatch('campaignSelected', null)
    }

    const openCampaign = () => {
        dispatch('openCampaign', campaignSelected.id)
    }

</script>

<div>
    <h2>{campaignSelected.title}</h2>
    <p>{campaignSelected.gameMaster}</p>
    <p>{formatDate(campaignSelected.createdAt)}</p>
    <div id="buttons">
        <button on:click={openCampaign}>Open Campaign</button>
        <button>Delete</button>
        <button on:click={handleCancelCampaign}>Cancel</button>
    </div>
</div>

<style>
    h2,
    p {
        color: var(--highlight);
        text-align: center;
    }

    button {
        border: 0;
        border-radius: 5px;
        background: var(--bloodRed);
        color: var(--highlight);
        font-weight: bold;
        height: 40px;
        padding: 0px 20px;
        box-shadow: 0 0 5px var(--highlight);
        margin-left: 10px;
    }
    button:focus {
        border: 2px solid var(--highlight);
        border-radius: 5px;
        outline: none;
    } 
</style>