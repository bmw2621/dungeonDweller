<script>
    import {createEventDispatcher} from 'svelte'

    export let campaign;

    const dispatch = createEventDispatcher();

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
    }

    const handleSelectCampaign = () => {
        dispatch('campaignSelected', campaign)
    }


</script>

<tr on:click={handleSelectCampaign}>
    <td class="padRight">{campaign.title}</td>
    <td class="padRight">{campaign.gameMaster}</td>
    <td style="text-align: right">{formatDate(campaign.createdAt)}</td>
</tr>

<style>
    tr {
        cursor: pointer;
    }

    .padRight {
        padding-right: 50px;
    }

    tr:hover {
        text-shadow: 0 0 8px var(--bloodRed);
    }

    div{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--bloodRed);
        position: relative;
        color: white;
        margin-left: 10px;
    }
</style>