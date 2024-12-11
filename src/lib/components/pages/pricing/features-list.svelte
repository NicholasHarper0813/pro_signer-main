<script>
  import {
    ADMIN_SECURITY,
    CONTROL_EFFICIENCY,
    ESSENTIAL_FEATURES,
    PERFORMANCE,
    SUPPORT,
  } from "$lib/data/pricing/features"
  import { cn } from "$lib/utils"

  import Icon from "$lib/components/Svelte-icon.svelte"
  import { Icons } from "$lib/components/IconResources"
  let hidden = true

  function toggleHidden() {
    hidden = !hidden
  }
</script>

<section class="pb-8 pt-24">
  <div class="max-w-screen-wrap px-3 xl:px-5 mx-auto w-full">
    <div class="flex justify-center">
      <button
        on:click={toggleHidden}
        class="flex justify-center items-center gap-4"
      >
        <h5 class="text-2xl font-medium cursor-pointer text-primary font-geo">
          Complete features list
        </h5>
        <Icon
          data={Icons.selectArrow}
          class="w-5 h-4 ease-in-out duration-200 text-primary  {hidden
            ? 'rotate-0'
            : 'rotate-180'}"
          stroke="transparent"
        />
      </button>
    </div>
    <div class="mt-8">
      <table id="features-table" class={cn("w-full", hidden ? "hidden" : null)}>
        <thead>
          <tr>
            <th
              class="font-bold tracking-wider border-b border-gray-300 uppercase text-secondary w-1/3 p-4 text-left pl-5"
              >Essential Features</th
            >
            <td
              class="h-16 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Basic</td
            >
            <td
              class="h-16 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Plus</td
            >
            <td
              class="h-4 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Enterprise</td
            >
          </tr>
        </thead>
        <tbody>
          {#each ESSENTIAL_FEATURES as feature}
            <tr>
              <th class="w-1/3 h-10 p-4 pl-5 text-left font-normal text-primary"
                >{feature.title}</th
              >
              <td class="w-1/4 p-4">
                {#if feature?.basic}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
              <td class="w-1/4 p-4">
                {#if feature?.plus}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
              <td class="w-1/4 p-4">
                {#if feature?.enterprise}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>

        <thead>
          <tr>
            <th
              class="font-bold tracking-wider border-b border-gray-300 uppercase text-secondary w-1/3 p-4 text-left pl-5"
              >Control &amp; Efficiency</th
            >
            <td
              class="h-4 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Basic</td
            >
            <td
              class="h-4 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Plus</td
            >
            <td
              class="h-4 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Enterprise</td
            >
          </tr>
        </thead>
        <tbody>
          {#each CONTROL_EFFICIENCY as feature}
            <tr>
              <th class="w-1/3 h-10 p-4 pl-5 text-left font-normal text-primary"
                >{feature.title}</th
              >
              <td class="w-1/4 p-4">
                {#if feature?.basic}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
              <td class="w-1/4 p-4">
                {#if feature?.plus}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
              <td class="w-1/4 p-4">
                {#if feature?.enterprise}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>

        <thead>
          <tr>
            <th
              class="font-bold tracking-wider border-b border-gray-300 uppercase text-secondary w-1/3 p-4 text-left pl-5"
              >Performance</th
            >
            <td
              class="h-4 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Basic</td
            >
            <td
              class="h-4 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Plus</td
            >
            <td
              class="h-4 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Enterprise</td
            >
          </tr>
        </thead>
        <tbody>
          {#each PERFORMANCE as feature}
            <tr>
              <th class="w-1/3 h-10 p-4 pl-5 text-left font-normal text-primary"
                >{feature.title}</th
              >
              <td class="w-1/4 p-4 text-center">
                {#if feature?.basic}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
              <td class="w-1/4 p-4">
                {#if feature?.plus}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
              <td class="w-1/4 p-4">
                {#if feature?.enterprise}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>

        <thead>
          <tr>
            <th
              class="font-bold tracking-wider border-b border-gray-300 uppercase text-secondary w-1/3 p-4 text-left pl-5"
              >Admin &amp; Security</th
            >
            <td
              class="h-4 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Basic</td
            >
            <td
              class="h-4 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Plus</td
            >
            <td
              class="h-4 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Enterprise</td
            >
          </tr>
        </thead>
        <tbody>
          {#each ADMIN_SECURITY as feature}
            <tr>
              <th class="w-1/3 h-10 p-4 pl-5 text-left font-normal text-primary"
                >{feature.title}</th
              >
              <td class="w-1/4 p-4">
                {#if feature?.basic}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
              <td class="w-1/4 p-4">
                {#if feature?.plus}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
              <td class="w-1/4 p-4">
                {#if feature?.enterprise}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>

        <thead>
          <tr>
            <th
              class="font-bold tracking-wider border-b border-gray-300 uppercase text-secondary w-1/3 p-4 text-left pl-5"
              >Support</th
            >
            <td
              class="h-16 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Basic</td
            >
            <td
              class="h-16 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Plus</td
            >
            <td
              class="h-16 w-1/4 p-4 text-primary text-center border-b border-gray-300 text-base font-bold leading-6"
              >Enterprise</td
            >
          </tr>
        </thead>
        <tbody>
          {#each SUPPORT as feature}
            <tr>
              <th class="w-1/3 h-10 p-4 pl-5 text-left font-normal text-primary"
                >{feature.title}</th
              >
              <td class="w-1/4 p-4">
                {#if feature?.basic}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {/if}
              </td>
              <td class="w-1/4 p-4 text-center text-primary">
                {#if feature?.plus}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {:else if feature?.plusValue}
                  {feature?.value}
                {/if}
              </td>
              <td class="w-1/4 p-4 text-center text-primary">
                {#if feature?.enterprise}
                  <Icon
                    data={Icons.checkCircle}
                    class="w-6 h-6 mx-auto text-[#33CC9D]"
                    stroke="transparent"
                  />
                {:else}
                  {feature?.entrValue}
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>
