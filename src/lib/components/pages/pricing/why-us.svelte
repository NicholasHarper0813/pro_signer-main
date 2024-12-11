<script>
  import { Marquee } from "svelte-fast-marquee"

  // images
  import Bizzabo from "$lib/assets/svg/bizzabo.svg"
  import Coldwell from "$lib/assets/svg/coldwell.svg"
  import Corcoran from "$lib/assets/svg/corcoran.svg"
  import Forter from "$lib/assets/svg/forter.svg"
  import Gosite from "$lib/assets/svg/gosite.svg"
  import Hotjar from "$lib/assets/svg/hotjar.svg"
  import Jazz from "$lib/assets/svg/jazz.svg"
  import Nomad from "$lib/assets/svg/nomad.svg"
  import Qgenda from "$lib/assets/svg/qgenda.svg"
  import Similarweb from "$lib/assets/svg/similarweb.svg"
</script>

<section class="mt-24 max-w-screen-wrap px-3 xl:px-5 mx-auto w-full font-geo">
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="p-8 px-15">
      <p class="font-geo">
        <img
          class="clear-both mx-auto block h-auto"
          src="https://www.wisestamp.com/wp-content/uploads/2021/10/SSL-secure-payment.png"
          alt="payment"
          width="100"
          height="90"
        />
      </p>
      <p class="text-lg text-primary leading-1.5 text-center mt-3 mb-0">
        <strong>SSL SECURE PAYMENT</strong>
      </p>
      <p class="md:text-lg leading-1.5 text-primary text-center mt-3 mb-0">
        Your information is protected by 256-bit SSL encryption
      </p>
    </div>
    <div class="p-8 px-15">
      <p>
        <img
          class="clear-both mx-auto block h-auto"
          src="https://www.wisestamp.com/wp-content/uploads/2021/10/14-day-moneyback-gaurantee-1.png"
          alt="money back"
          width="140"
          height="180"
        />
      </p>
      <p class="md:text-lg text-primary leading-1.5 text-center mt-2 mb-0">
        14 Day money back guarantee
      </p>
    </div>
    <div class="p-8 px-15">
      <img
        src="https://www.wisestamp.com/wp-content/uploads/2020/03/badges-corporate.png"
        alt="logos"
        width="369"
        height="121"
      />
    </div>
  </div>

  <div class="py-16">
    <h3 class="text-center font-medium font-geo text-3xl text-primary">
      Trusted by +10K enterprises worldwide
    </h3>
    <Marquee speed={30} class="pt-8" gap={"30px"}>
      <img class="w-24 md:w-auto" src={Bizzabo} alt="bizzabo" srcset="" />
      <img class="w-24 md:w-auto" src={Coldwell} alt="coldwell" srcset="" />
      <img class="w-24 md:w-auto" src={Corcoran} alt="corcoran" srcset="" />
      <img class="w-24 md:w-auto" src={Forter} alt="forter" srcset="" />
      <img class="w-24 md:w-auto" src={Gosite} alt="gosite" srcset="" />
      <img class="w-24 md:w-auto" src={Hotjar} alt="hotjar" srcset="" />
      <img class="w-24 md:w-auto" src={Jazz} alt="jazz" srcset="" />
      <img class="w-24 md:w-auto" src={Nomad} alt="nomad" srcset="" />
      <img class="w-24 md:w-auto" src={Qgenda} alt="qgenda" srcset="" />
      <img class="w-24 md:w-auto" src={Similarweb} alt="similarweb" srcset="" />
    </Marquee>
  </div>
</section>
