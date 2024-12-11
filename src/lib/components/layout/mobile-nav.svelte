<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion"
  import Button from "../ui/button/button.svelte"
  import { LINKS } from "./mega-menu/mega-menu"
  import Icon from "$lib/components/Svelte-icon.svelte"
  import { Icons } from "../IconResources"
</script>

<div
  class="absolute top-[102%] left-0 right-0 h-screen bg-white px-5 xl:hidden pb-32 overflow-y-auto"
>
  <h5
    class="text-primary uppercase text-sm font-mulish font-bold tracking-wider pt-8 pb-2"
  >
    Our Products
  </h5>
  <div class="flex flex-col gap-5">
    <a
      href="/"
      class="border rounded-lg px-4 text-base font-bold text-primary py-2 shadow-sm flex items-center gap-2"
    >
      <Icon
        data={Icons.emailsign}
        stroke="transparent"
        class="text-primary w-7 h-5"
      />
      <span>Email signature generator</span>
    </a>
    <a
      href="/"
      class="border rounded-lg px-4 text-base font-bold text-primary py-2 shadow-sm flex items-center gap-2"
    >
      <Icon
        data={Icons.emailmanager}
        stroke="transparent"
        class="text-primary w-7 h-5"
      />
      <span>Email signature manager</span>
    </a>
  </div>
  <div class="mt-8">
    {#each Object.entries(LINKS) as link}
      <Accordion.Root>
        <Accordion.Item value="item-1">
          <Accordion.Trigger><span>{link[0]}</span></Accordion.Trigger>
          <Accordion.Content class="font-mulish">
            {#each link[1].links as item}
              <div class="p-4">
                <div class="text-sm uppercase text-primary font-bold pb-2">
                  {item.title}
                </div>
                <ul>
                  {#each item.items as subLink}
                    <li>
                      <a
                        href={subLink.url}
                        class="py-2 inline-block text-primary"
                      >
                        {subLink.label}
                      </a>
                    </li>
                  {/each}
                </ul>
              </div>
            {/each}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    {/each}
  </div>

  <div class="flex flex-col">
    <button class="py-3 border-b text-primary/90 text-left">
      <span>Pricing</span>
    </button>
    <button class="py-3 border-b text-secondary text-left">
      <span>English</span>
    </button>
  </div>

  <div class="flex mt-6 justify-center">
    <Button variant="secondary" class="w-60">Sign In</Button>
  </div>
</div>
