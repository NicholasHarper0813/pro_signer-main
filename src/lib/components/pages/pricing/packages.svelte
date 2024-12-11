<script>
  import {
    EMPLOYEES_COUNT,
    PRICING_FEATURES_1,
    PRICING_FEATURES_2,
    PRICING_FEATURES_3,
  } from "$lib/data/pricing/features"
  import PricingCard from "../../ui/cards/pricing-card.svelte"
  import Icon from "$lib/components/Svelte-icon.svelte"
  import { Icons } from "$lib/components/IconResources"
</script>

<section class="bg-white pt-10">
  <div
    class="max-w-screen-wrap px-3 xl:px-5 mx-auto w-full space-y-5 xl:space-y-16"
  >
    <div class="flex gap-5">
      <label for="" class="flex text-primary py-1 font-bold whitespace-nowrap"
        >Choose team size
      </label>
      <div class="relative">
        <Icon
          data={Icons.selectArrow}
          class="w-3 h-3 text-black absolute right-2 top-1/2 -translate-y-1/2"
          stroke="transparent"
        />

        <select
          class="relative z-10 bg-transparent appearance-none text-sm border border-gray-200 w-40 focus:outline-none focus:border-[#33cc9d] rounded py-1.5 px-2 font-bold leading-snug text-primary"
        >
          {#each EMPLOYEES_COUNT as option}
            <option value={option.value}>{option.label}</option>
          {/each}
        </select>
      </div>
    </div>
    <div class="overflow-auto xl:overflow-visible max-w-full p-5 xl:p-0">
      <div class="grid grid-cols-3 gap-6 min-w-[1024px]">
        <PricingCard
          listHeading=""
          tooltip="Manage email signatures for every employee from a central dashboard."
          packageName="Basic"
          featurePrice="$1.5"
          totalPrice="$225"
          description="Create professional and consistent signatures for your organization."
          featureList={PRICING_FEATURES_1}
        />
        <div class="mt-6 md:mt-0">
          <PricingCard
            listHeading="All the benefits of Basic and:"
            tooltip="Manage email signatures for every employee from a central dashboard."
            packageName="Plus"
            featurePrice="$1.8"
            totalPrice="$270"
            description="Get advanced features & analytics for your signatures."
            featureList={PRICING_FEATURES_2}
            recommended
          />
        </div>
        <PricingCard
          listHeading="All the benefits of Plus and:"
          tooltip="Manage email signatures for every employee from a central dashboard."
          packageName="Enterprise"
          featurePrice="$1.8"
          totalPrice="$270"
          description="Securely manage your signatures at the highest scale."
          featureList={PRICING_FEATURES_3}
          enterprise
        />
      </div>
    </div>
  </div>
</section>
