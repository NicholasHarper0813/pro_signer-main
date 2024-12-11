<script lang="ts">
  export let svg: string
  export let title: string
  export let link: string
</script>

<div
  class="px-5 pt-12 pb-8 rounded-2xl bg-[#f8f9fb] border border-gray-200 text-primary"
>
  <div class="flex flex-col items-center">
    {@html svg}
    <div class="text-2xl font-medium font-geo mt-8">{title}</div>
    <a href={link} class="text-secondary underline mt-3">Learn More</a>
  </div>
</div>
