<script lang="ts">
  import Icon from "$lib/components/Svelte-icon.svelte"
  import { Icons } from "$lib/components/IconResources"
  import Tooltip from "$lib/components/Tooltip.svelte"
  export let featureList: string[] = []
  export let packageName: string
  export let featurePrice: string
  export let totalPrice: string
  export let description: string
  export let recommended: boolean = false
  export let enterprise: boolean = false
  export let tooltip: string
  export let listHeading: string
</script>

<div
  class={`shadow-1 bg-white rounded-lg relative ${recommended && "rounded-tr-none rounded-tl-none"}`}
>
  {#if recommended}
    <div
      class="bg-[#33cc9d] text-white text-center font-bold text-sm uppercase py-2 absolute left-0 bottom-full right-0 rounded-tr-lg rounded-tl-lg"
    >
      Best Value
    </div>
  {/if}
  <div class="p-8 flex flex-col">
    <h3 class="mb-2 text-3xl text-start font-medium font-geo text-primary">
      {packageName}
    </h3>

    {#if enterprise}
      <div class="py-1 min-h-28 flex justify-start items-center">
        <Icon
          data={Icons.chats}
          class="w-14 h-14 text-primary"
          fill="transparent"
        />
      </div>
    {:else}
      <div class="py-1 min-h-28 flex flex-col items-start">
        <p class="flex justify-start items-center py-2 text-primary">
          <span class="pr-2 text-4xl font-bold">{featurePrice}</span>
          <span class="block leading-none pl-2">seat/<br />month</span>
        </p>

        <div class="pt-2 space-y-1">
          <h4 class="text-lg font-bold text-start text-primary leading-none">
            Total {totalPrice} / month
          </h4>
          <p class="text-start text-primary leading-none">Billed annually</p>
        </div>
      </div>
    {/if}

    <p class="text-start pt-4 font-bold text-primary">
      {description}
    </p>
    <div class="py-5 flex flex-col">
      {#if enterprise}
        <a
          href="/"
          class="text-secondary text-lg bg-white hover:bg-secondary duration-100 border-2 border-secondary hover:text-white rounded px-5 py-2 text-center font-semibold"
          >Contact Sales</a
        >
      {:else}
        <a
          href="/"
          class="text-white text-lg bg-secondary hover:bg-secondary-dark duration-100 border border-secondary rounded px-5 py-2 text-center"
          >Try for Free</a
        >
      {/if}
    </div>
    {#if listHeading}
      <h3 class="text-sm font-bold text-primary pb-2">{listHeading}</h3>
    {/if}
    <!-- List -->
    <ul role="list" class="space-y-1 text-left text-primary">
      {#each featureList as feature}
        <li class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <Icon
              data={Icons.check}
              class="w-5 h-4 text-[#33cc9d]"
              stroke="transparent"
            />
            <span class="text-sm">{feature}</span>
          </div>
          <Tooltip text={tooltip} position="top">
            <Icon
              data={Icons.info}
              class="w-5 h-4 text-[#BDBDBD]"
              stroke="transparent"
            />
          </Tooltip>
        </li>
      {/each}
    </ul>
  </div>
</div>
