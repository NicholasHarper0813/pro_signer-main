<script>
  import { fly } from "svelte/transition"
  export let text = ""
  export let position = "top"
  let isVisible = false

  function handleMouseOver() {
    isVisible = true
  }

  function handleMouseOut() {
    isVisible = false
  }
</script>

<div class="relative inline-block group">
  <button on:mouseover={handleMouseOver} on:mouseleave={handleMouseOut}>
    <slot />
  </button>
  {#if isVisible}
    <div
      class="absolute text-sm top px-2 py-1 bg-black text-white text-center rounded-md z-10 bottom-full -translate-y-2 left-1/2 -translate-x-1/2 min-w-80"
      transition:fly
    >
      {text}
      <slot name="content" />

      <div class="tooltip-arrow"></div>
    </div>
  {/if}
</div>

<style>
  .tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    left: 50%;
    transform: translateX(-50%);
  }

  .top .tooltip-arrow {
    bottom: -8px;
    border-top: 8px solid black;
  }
</style>
