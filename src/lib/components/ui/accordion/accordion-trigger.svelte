<script lang="ts">
  import { Accordion as AccordionPrimitive } from "bits-ui"
  import ChevronDown from "lucide-svelte/icons/chevron-down"
  import { cn } from "$lib/utils"

  type $$Props = AccordionPrimitive.TriggerProps
  type $$Events = AccordionPrimitive.TriggerEvents

  let className: $$Props["class"] = undefined
  export let level: AccordionPrimitive.HeaderProps["level"] = 3
  export { className as class }
</script>

<AccordionPrimitive.Header {level} class="flex">
  <AccordionPrimitive.Trigger
    class={cn(
      "flex flex-1 items-center justify-between py-3 font-medium transition-all text-primary/90 [&[data-state=open]]:text-secondary [&[data-state=open]>svg]:text-secondary [&[data-state=open]>svg]:rotate-180",
      className,
    )}
    {...$$restProps}
    on:click
  >
    <slot />
    <ChevronDown
      class="h-4 w-4 transition-transform duration-200 text-primary"
    />
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
