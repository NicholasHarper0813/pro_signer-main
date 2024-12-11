<script lang="ts">
  export let data = ""
  export let viewBox = extractViewBox(data)
  export let color = "currentColor"
  export let stroke = color
  export let fill = color

  // export let strokeWidth = Boolean;

  $: elements = data.replace(/<svg ([^>]*)>/, "").replace("</svg>", "")

  function extractViewBox(svg: string) {
    const regex = /viewBox="([\d\- \.]+)"/
    const res = regex.exec(svg)
    if (!res) return "0 0 20 20" // default value
    return res[1]
  }
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}
  {stroke}
  {fill}
  {...$$restProps}
>
  {@html elements}
</svg>
