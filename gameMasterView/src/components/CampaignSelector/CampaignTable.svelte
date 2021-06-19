<script>
    import CampaignTableRow from "./CampaignTableRow.svelte"
  

    const allCampaigns = [
        {
            title: "Battle of IcewindDale",
            gameMaster: "Drizzt Do'herden",
            createdAt: "Fri Jun 18 2021 22:44:34 GMT-0400"
        }
    ]
</script>


<h2>Select Campaign</h2>
<table>
    <tr>
        <th class="padRight">Campaign</th>
        <th class="padRight">GameMaster</th>
        <th style="text-align: right">Start Date</th>
    </tr>

    {#each allCampaigns as campaign}
        <CampaignTableRow on:campaignSelected {campaign} />
    {/each}
</table>
<div id="campaignButtons">
    <button>New</button>
</div>



<style>
    .padRight {
        padding-right: 50px;
    }

    table {
        text-align: left;
        color: var(--highlight);
        width: 100%;
    }

    th {
        text-shadow: 0 0 8px var(--bloodRed);
    }

    #campaignButtons {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    button {
        border: 0;
        border-radius: 5px;
        background: var(--bloodRed);
        color: var(--highlight);
        font-weight: bold;
        height: 40px;
        width: 100px;
        box-shadow: 0 0 5px var(--highlight);
        margin-left: 10px;
    }
    button:focus {
        border: 2px solid var(--highlight);
        border-radius: 5px;
        outline: none;
    } 

    h2 {
        color: var(--highlight);
        text-align: center;
    }
</style>