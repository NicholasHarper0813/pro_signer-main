<script lang="ts">
  export let title: string
  export let price: string
  export let description: string
  export let features: string[]
  import Icon from "$lib/components/Svelte-icon.svelte"
  import { Icons } from "$lib/components/IconResources"
</script>

<div class="flex flex-col gap-y-5 rounded-lg p-7 shadow-1 bg-white">
  <div class="flex flex-wrap justify-between items-center">
    <h3 class="text-3xl font-medium font-geo text-primary leading-none">
      {title}
    </h3>
    <a
      href="/"
      class="text-lg font-bold text-secondary min-w-[220px] text-center hover:underline"
      >Get started</a
    >
  </div>
  <div>
    <div class="flex flex-wrap gap-y-20">
      <div class="text-center">
        <span class="text-4xl font-bold leading-10 text-primary">{price}</span>
      </div>
    </div>
  </div>
  <p class="m-0 text-base font-semibold">
    {description}
  </p>
  <ul class="m-0 p-0 list-none text-sm">
    {#each features as feature}
      <li class="flex items-center justify-start relative text-base leading-8">
        <Icon data={Icons.check} class="w-5 h-4" stroke="transparent" />
        <span class=" cursor-pointer pl-2">{feature}</span>
      </li>
    {/each}
  </ul>
</div>
