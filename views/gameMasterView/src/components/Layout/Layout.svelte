<script>
    import LeftBar from "./LeftBar.svelte"
    import RightBar from "./RightBar.svelte"
    import {campaignId} from "../../store.ts"
</script>
<div>
    {#if $campaignId}
    <LeftBar />
    <RightBar />
    {/if}
    <slot></slot>
</div>
