<script>
  import Branding from "./branding.svelte"
  import Features1 from "./features1.svelte"
  import Features2 from "./features2.svelte"
  import Hero from "./hero.svelte"
  import TrustedBy from "./trusted-by.svelte"
</script>

<Hero />
<TrustedBy />
<Branding />
<Features1 />

<section class="bg-[#f8f9fb] py-24">
  <div class="max-w-screen-wrap px-3 xl:px-5 mx-auto w-full">
    <img
      src="https://www.wisestamp.com/wp-content/uploads/2023/06/AvenuesNY-quote-one-about-WiseStamp-image-min.png"
      alt=""
    />
    <a href="/#" class="inline-block text-secondary text-lg mt-16">
      Read Jane’s full story
    </a>
  </div>
</section>

<Features2 />

<section class="max-w-screen-wrap px-3 xl:px-5 mx-auto w-full mt-12 mb-24">
  <div class="flex flex-col items-center">
    <div class="text-4xl font-normal text-center text-primary font-geo">
      <span class="font-bold">Easy onboarding </span>
      makes for high adoption
    </div>
    <div class="text-lg text-primary font-normal text-center mt-4">
      <p class="max-w-4xl">
        To make the most of your consistent branding you need to have every
        agent on board. Research shows that manual email signature management
        methods achieve only 40% employee adoption rate. Luckily, WiseStamp’s
        one-click implementation requires no training or hassle, so you can
        expect all agents to happily join.
      </p>
    </div>
    <button
      class="h-16 w-56 bg-secondary text-white font-medium text-lg rounded mt-12 hover:bg-secondary-dark duration-200"
    >
      Start Now >
    </button>
    <div class="mt-16 max-w-4xl">
      <img
        src="https://www.wisestamp.com/wp-content/uploads/2023/06/from-onboarding-to-signature-v3-1.webp"
        alt=""
      />
    </div>
  </div>
</section>
