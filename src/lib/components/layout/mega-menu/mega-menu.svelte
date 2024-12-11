<script lang="ts">
  export let menu: any
  export let handleClickOutside: any
  import Icon from "$lib/components/Svelte-icon.svelte"
  import { Icons } from "$lib/components/IconResources"
  import { clickOutside } from "../../../../utils"
</script>

<!-- Menu -->
<div
  use:clickOutside
  on:click_outside={handleClickOutside}
  class="bg-[#f8f9fb] absolute top-full left-0 right-0 border-t border-[#f8f9fb]"
>
  <div class="container mx-auto grid grid-cols-4 gap-8 px-8">
    <div class="py-8">
      <h3 class="uppercase font-bold text-sm">Our Products</h3>
      <div class="flex flex-col mt-4 gap-4">
        <!-- Card -->
        <div
          class="border border-gray-300 cursor-pointer group hover:border-secondary shadow-2 rounded-lg py-4 px-5 bg-white flex flex-col gap-4 duration-100"
        >
          <div class="flex items-center gap-2">
            <Icon
              data={Icons.emailsign}
              stroke="transparent"
              class="text-primary w-7 h-5"
            />
            <span class="font-bold text-primary">Email signature generator</span
            >
          </div>
          <p class="text-primary">
            Create a stunning email signature for yourself within a few clicks
          </p>
          <div class="flex">
            <div
              class="text-xs border px-1 border-primary bg-[#f8f9fb] text-primary group-hover:border-secondary group-hover:text-secondary"
            >
              For individual
            </div>
          </div>
        </div>
        <!-- Card -->
        <div
          class="border border-gray-300 cursor-pointer group hover:border-secondary shadow-2 rounded-lg py-4 px-5 bg-white flex flex-col gap-4 duration-100"
        >
          <div class="flex items-center gap-2">
            <Icon
              data={Icons.emailmanager}
              stroke="transparent"
              class="text-primary w-7 h-5"
            />
            <span class="font-bold text-primary">Email signature manager</span>
          </div>
          <p class="text-primary">
            Manage your team email signature and gain control over your brand.
          </p>
          <div class="flex">
            <div
              class="text-xs border px-1 border-primary bg-[#f8f9fb] text-primary group-hover:border-secondary group-hover:text-secondary"
            >
              For organizations
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-white m-0.5 col-span-3 flex place-content-center p-8 text-primary"
    >
      <div class="grid grid-cols-4 gap-8">
        <div class="col-span-3 grid grid-cols-3 gap-8">
          {#each menu as item}
            <div class="space-y-2">
              <h3 class="uppercase font-bold text-sm">{item.title}</h3>
              <div class="flex flex-col gap-3 mt-4">
                {#each item.items as name}
                  <a
                    href={name.url}
                    class="hover:text-secondary duration-100 cursor-pointer"
                  >
                    {name.label}
                  </a>
                {/each}
              </div>
            </div>
          {/each}
        </div>
        <div class="space-y-2">
          <h3 class="uppercase font-bold text-sm">User Stories</h3>
          <img
            src="https://www.wisestamp.com/wp-content/uploads/2023/09/menu-review-img.jpg"
            alt=""
            class="mt-4"
          />
          <p class="text-sm mt-2 ml-2">
            See how companies save time & money automating their email
            signatures
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
