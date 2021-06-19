<script>
    import { fade } from 'svelte/transition'
    import ChevronLeft32 from "carbon-icons-svelte/lib/ChevronLeft32";

   

</script>
<div id="leftBarContainer" in:fade={{delay: 400}} out:fade>
    <div id="leftBar">
        <button>Add Map</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
    </div>
    <div id="toggle"> 
        <ChevronLeft32 id="leftBarArrow"/>
    </div>
</div>

<style>
    #leftBarContainer {
        position: absolute;
        left: -250px;
        width: 250px;
        height: 100%;
        display: inline-block;
        transition: left 0.25s ease-in-out;
        box-shadow: 2px 8px 10px rgba(0,0,0,0.5);
        top: 0;
        z-index: 5;
    }

    #leftBarContainer:hover {
        left: 0;
    }

    #leftBar {
        position: relative;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--secondaryBg);
        display: flex;
        flex-direction: column;
        z-index: 10;
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
        right: -50px;
        transform: translateY(-50%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 15px;
        box-shadow: 2px 8px 10px rgba(0,0,0,0.5);
        z-index: 9;
    }
</style>