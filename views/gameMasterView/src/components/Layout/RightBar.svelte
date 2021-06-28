<script>
    import { fade } from 'svelte/transition'
    import ChevronRight32 from "carbon-icons-svelte/lib/ChevronRight32";
    import { campaignId, campaignMap, overlays } from "../../store"

    const handleExit = () => {
        campaignId.set(null)
        campaignMap.set(null)
        overlays.set([])
    }

</script>
<div id="rightBarContainer" in:fade={{delay: 400}} out:fade>
    <div id="rightBar">
        <div id="gameButtons">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
        </div>
        <button id="exit" on:click={handleExit}>Exit</button>
    </div>
    <div id="toggle"> 
        <ChevronRight32 id="rightBarArrow"/>
    </div>
</div>

<style>
    #rightBarContainer {
        position: absolute;
        right: -250px;
        width: 250px;
        height: 100%;
        display: inline-block;
        transition: right 0.25s ease-in-out;
        box-shadow: 2px 8px 10px rgba(0,0,0,0.5);
        top: 0;
        z-index: 8;
    }

    #rightBarContainer:hover {
        right: 0;
    }

    #rightBar {
        position: relative;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--secondaryBg);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 10;
    }

    #gameButtons{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    button {
        border: 0;
        background: var(--bloodRed);
        color: white;
        margin: 10px;
        height: 50px;
    }

    #toggle {
        background: var(--secondaryBg);
        color: var(--bloodRed);
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: -50px;
        transform: translateY(-50%);
        border-radius: 50%;
        /* clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%); */
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 15px;
        box-shadow: 2px 8px 10px rgba(0,0,0,0.5);
        z-index: 9;
    }
</style>