<script lang="ts">
    import CampaignTableRow from "./CampaignTableRow.svelte"
    import type { ICampaign } from "../../typings"
  

    const allCampaigns: ICampaign[] = [
        {
            id: 1,
            title: "Battle of IcewindDale",
            gameMaster: "Drizzt Do'herden",
            createdAt: "Fri Jun 18 2021 22:44:34 GMT-0400"
        },
        {
            id: 2,
            title: "The Crystal Shard",
            gameMaster: "Wolfgar - Son of Baeornegar",
            createdAt: "Fri Jun 18 2021 22:44:34 GMT-0400"
        },
        {
            id: 3,
            title: "Rogue of Calemport",
            gameMaster: "Artemis Centrari",
            createdAt: "Fri Jan 22 2020 22:44:34 GMT-0400"
        },
        {
            id: 4,
            title: "Defense of Mithral hall",
            gameMaster: "Brunner Battlehammer",
            createdAt: "Fri Jun 18 2021 22:44:34 GMT-0400"
        }
    ]
</script>

<div>
    <table>
        <thead>
            <tr>
                <th class="padRight">Campaign</th>
                <th class="padRight">GameMaster</th>
                <th style="text-align: right">Start Date</th>
            </tr>
        </thead>
        <tbody>
            {#each allCampaigns as campaign}
                <CampaignTableRow on:campaignSelected {campaign} />
            {/each}
        </tbody>
    </table>
    <div id="campaignButtons">
        <button>New</button>
    </div>
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
        padding-bottom: 10px;
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
</style>