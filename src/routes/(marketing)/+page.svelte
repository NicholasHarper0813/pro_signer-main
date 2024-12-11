<script>
  import Hero from "$lib/components/pages/pricing/hero.svelte"
  import Packages from "$lib/components/pages/pricing/packages.svelte"
  import ForIndividuals from "$lib/components/pages/pricing/for-individuals.svelte"
  import WhyUs from "$lib/components/pages/pricing/why-us.svelte"
  import FeaturesList from "$lib/components/pages/pricing/features-list.svelte"
</script>

<Hero />
<Packages />
<div class="hidden xl:block">
  <FeaturesList />
</div>
<ForIndividuals />
<WhyUs />
