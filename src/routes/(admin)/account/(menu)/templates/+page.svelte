<script lang="ts">
  import { getContext } from "svelte"

  let adminSection: Writable<String> = getContext("adminSection")
  adminSection.set("templates")
</script>

<svelte:head>
  <title>Select a Plan</title>
</svelte:head>

<div
  class="text-center content-center min-h-[100vh] mb-12 mt-4 flex items-center place-content-center"
>
  <div class="flex flex-col w-full px-6">
    <div>
      <h1 class="text-2xl font-bold mb-6">Select a Plan</h1>
    </div>
  </div>
</div>
