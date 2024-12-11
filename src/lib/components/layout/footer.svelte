<script>
  import Icon from "$lib/components/Svelte-icon.svelte"
  import { Icons } from "$lib/components/IconResources"
  const products = [
    { name: "Email Signature Generator", href: "#" },
    { name: "Email Signature Manager", href: "#" },
    { name: "Pricing Page tiers", href: "#" },
    { name: "Gmail extension", href: "#" },
    { name: "Features", href: "#" },
    { name: "Product Updates", href: "#" },
    { name: "Security & Compliance", href: "#" },
  ]

  const resources = [
    { name: "Signature templates", href: "#" },
    { name: "Signature examples", href: "#" },
    { name: "Email signature guides", href: "#" },
    { name: "Email signature design", href: "#" },
    { name: "Signature banners", href: "#" },
    { name: "Signature Generator", href: "#" },
    { name: "Free Banner Maker", href: "#" },
    { name: "Blog", href: "#" },
  ]

  const signatures = [
    { name: "Google Workspace", href: "#" },
    { name: "Microsoft Exchange", href: "#" },
    { name: "Office 365", href: "#" },
    { name: "Add Signature in Outlook", href: "#" },
    { name: "Gmail", href: "#" },
    { name: "Mac Mail", href: "#" },
    { name: "Yahoo", href: "#" },
    { name: "iPhone & iPad", href: "#" },
  ]

  const wisestamps = [
    { name: "About us", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Trust center", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Google APIs disclosure", href: "#" },
    { name: "Accessibility statement", href: "#" },
  ]

  const contacts = [
    { name: "Become a partner", href: "#" },
    { name: "Contact support", href: "#" },
    { name: "Contact sales", href: "#" },
    { name: "Careers", href: "#" },
  ]

  const socialMedia = [
    {
      icon: Icons.linkedin,
      name: "Linkedin",
      url: "https://www.linkedin.com/company/prosigner",
    },
    {
      icon: Icons.fb,
      name: "Facebook",
      url: "",
    },
    {
      icon: Icons.youtube,
      name: "Youtube",
      url: "",
    },
    {
      icon: Icons.ig,
      name: "Instagram",
      url: "https://www.instagram.com/prosigner/",
    },
    {
      icon: Icons.tiktok,
      name: "TikTok",
      url: "https://www.tiktok.com/@prosigner",
    },
    {
      icon: Icons.x,
      name: "X",
      url: "https://twitter.com/prosigner",
    },
  ]
</script>

<footer class="py-5 xl:py-16 bg-primary text-white">
  <div class="max-w-screen-wrap px-3 xl:px-5 mx-auto w-full">
    <!-- main parent div -->
    <div class="flex flex-col lg:grid lg:grid-cols-12 gap-y-8 gap-x-4">
      <!-- comapny intro and socials div -->
      <div class="lg:col-span-3">
        <div class="lg:w-72 max-w-full">
          <Icon
            data={Icons.wiseStamp}
            class="w-32 h-10 text-white"
            stroke="transparent"
          />

          <!-- text -->
          <div class="mt-3">
            <p class=" text-sm leading-6">
              Wisestamp.com is the world’s leading email signature management
              software – used by over 1M clients worldwide.
            </p>

            <p class="mt-2 text-sm leading-6">
              We offer you the easiest way to take control of your company email
              signatures – set up a company-wide branded signature and run email
              signature marketing campaigns.
            </p>
          </div>
        </div>

        <!-- socials -->
        <div class="flex gap-4 mt-4">
          {#each socialMedia as item}
            <a
              class="border border-white hover:bg-white hover:text-primary ease-in-out duration-200 w-6 h-6 rounded-full flex justify-center items-center text-center"
              target="_blank"
              href={item.url}
              title={item.name}
            >
              <Icon data={item.icon} class="w-3 h-3 " stroke="transparent" />
            </a>
          {/each}
        </div>
      </div>
      <div
        class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-4 lg:col-span-9"
      >
        <!-- Column 1 -->
        <div class="col-span-2">
          <h2 class="h4 font-bold text-lg">Product</h2>
          <ul class="flex flex-col gap-y-3 mt-3">
            {#each products as product}
              <li>
                <a
                  href={product.href}
                  class="text-white text-sm leading-snug ease-in-out duration-200 hover:opacity-60"
                  >{product.name}</a
                >
              </li>
            {/each}
          </ul>
        </div>
        <!-- Column 2 -->
        <div class="col-span-2">
          <h2 class="h4 font-bold text-lg">Resource</h2>
          <ul class="flex flex-col gap-y-3 mt-3">
            {#each resources as resource}
              <li>
                <a
                  href={resource.href}
                  class="text-white text-sm leading-snug ease-in-out duration-200 hover:opacity-60"
                  >{resource.name}</a
                >
              </li>
            {/each}
          </ul>
        </div>
        <!-- Column 3 -->
        <div class="col-span-2">
          <h2 class="h4 font-bold text-lg">Signature</h2>
          <ul class="flex flex-col gap-y-3 mt-3">
            {#each signatures as signature}
              <li>
                <a
                  href={signature.href}
                  class="text-white text-sm leading-snug ease-in-out duration-200 hover:opacity-60"
                  >{signature.name}</a
                >
              </li>
            {/each}
          </ul>
        </div>
        <!-- Column 4 -->
        <div class="col-span-2">
          <h2 class="h4 font-bold text-lg">WiseStamps</h2>
          <ul class="flex flex-col gap-y-3 mt-3">
            {#each wisestamps as wisestamp}
              <li>
                <a
                  href={wisestamp.href}
                  class="text-white text-sm leading-snug ease-in-out duration-200 hover:opacity-60"
                  >{wisestamp.name}</a
                >
              </li>
            {/each}
          </ul>
        </div>
        <!-- Column 5 -->
        <div class="col-span-2">
          <h2 class="h4 font-bold text-lg">Contact</h2>
          <ul class="flex flex-col gap-y-3 mt-3">
            {#each contacts as contact}
              <li>
                <a
                  href={contact.href}
                  class="text-white text-sm leading-snug ease-in-out duration-200 hover:opacity-60"
                  >{contact.name}</a
                >
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>

    <!-- address  -->
    <div
      class="flex flex-wrap items-center justify-between gap-4 mt-5 xl:mt-16 text-sm"
    >
      <div>
        <h6 class="my-auto py-1">
          Address 500 108th Ave NE, Bellevue, WA 98004, USA
        </h6>
      </div>
      <div class="flex flex-wrap md:justify-end gap-2">
        <h6 class="inline my-auto">
          Get your company a professional email signature
        </h6>
        <button
          class="rounded-full bg-secondary hover:bg-secondary-dark text-white px-4 py-1 font-semibold"
          >Start Now</button
        >
      </div>
    </div>
    <hr class="w-full border-gray-300 my-8" />

    <div class="flex flex-wrap justify-between gap-4">
      <div class="flex flex-wrap items-center gap-y-4 gap-x-32">
        <div class="flex">
          <span class="pt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_1884_675)">
                <rect
                  x="0.848214"
                  y="0.848214"
                  width="12.3036"
                  height="12.3036"
                  rx="6.15179"
                  stroke="white"
                  stroke-width="0.696428"
                ></rect>
                <path
                  d="M6.53538 0.964355C6.53538 0.964355 0.731898 6.30364 6.53538 13.0358"
                  stroke="white"
                  stroke-width="0.696428"
                ></path>
                <path
                  d="M8.08321 0.964355C8.08321 0.964355 12.8036 6.53578 8.08321 13.0358"
                  stroke="white"
                  stroke-width="0.696428"
                ></path>
                <path
                  d="M12.0557 3.75C12.0557 3.75 7.78656 3.75 1.94455 3.75"
                  stroke="white"
                  stroke-width="0.696428"
                ></path>
                <path
                  d="M12.0557 10.25C12.0557 10.25 7.00014 10.25 1.94455 10.25"
                  stroke="white"
                  stroke-width="0.696428"
                ></path>
                <rect
                  x="0.964355"
                  y="6.63867"
                  width="12.0714"
                  height="0.464286"
                  fill="white"
                  stroke="white"
                  stroke-width="0.232143"
                ></rect>
              </g><defs
                ><clipPath id="clip0_1884_675"
                  ><rect width="14" height="14" fill="white"></rect></clipPath
                ></defs
              ></svg
            >
          </span>
          <select
            class="border-none px-6 pl-4 outline-none text-sm bg-primary text-white"
          >
            <option value="#">English</option>
            <option value="#">Deutsch</option>
            <option value="#">Français</option>
          </select>
        </div>
        <div>
          <ul class="flex flex-wrap text-sm gap-2 font-semibold">
            <li class="ms-1">© 2008-2024 WiseStamp</li>
            <li>|</li>
            <li class="ms-1">Terms of Service</li>
            <li>|</li>
            <li class="ms-1">Privacy Policy</li>
            <li>|</li>
            <li class="ms-1">Security & Compliances</li>
          </ul>
        </div>
      </div>
      <div>
        <ul class="flex gap-4">
          <li>
            <img
              width="40"
              height="26"
              src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-gdpr.svg"
              alt="GDPR"
              data-lazy-src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-gdpr.svg"
              class="entered lazyloaded"
              data-was-processed="true"
              data-ll-status="loaded"
            /><noscript
              ><img
                width="40"
                height="26"
                src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-gdpr.svg"
                alt="GDPR"
              /></noscript
            >
          </li>
          <li>
            <img
              width="50"
              height="24"
              src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-iso.svg"
              alt="ISO"
              data-lazy-src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-iso.svg"
              class="entered lazyloaded"
              data-was-processed="true"
              data-ll-status="loaded"
            /><noscript
              ><img
                width="50"
                height="24"
                src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-iso.svg"
                alt="ISO"
              /></noscript
            >
          </li>
          <li>
            <img
              width="58"
              height="25"
              src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-google.svg"
              alt="Google Workspace"
              data-lazy-src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-google.svg"
              class="entered lazyloaded"
              data-was-processed="true"
              data-ll-status="loaded"
            /><noscript
              ><img
                width="58"
                height="25"
                src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-google.svg"
                alt="Google Workspace"
              /></noscript
            >
          </li>
          <li>
            <img
              width="82"
              height="24"
              src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-microsoft.svg"
              alt="Microsoft Partner"
              data-lazy-src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-microsoft.svg"
              class="entered lazyloaded"
              data-was-processed="true"
              data-ll-status="loaded"
            /><noscript
              ><img
                width="82"
                height="24"
                src="https://www.wisestamp.com/wp-content/themes/wisestamp/assets/images/footer/badge-microsoft.svg"
                alt="Microsoft Partner"
              /></noscript
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
