<script>

    import { fade } from 'svelte/transition';

</script>

<div id="modal" transition:fade>
    <slot></slot>
</div>

<style>
    #modal {
        border: 1px solid var(--highlight);
        border-radius: 5px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(35,35,35,0.75);
    }
</style>