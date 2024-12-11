<script>
  import FeatureCard from "./feature-card.svelte"
</script>

<section class="py-40">
  <div class="max-w-screen-wrap px-3 xl:px-5 mx-auto w-full">
    <div class="text-4xl font-geo text-center">
      <span class="font-bold">It’s easy</span>
      to get started in 4 simple steps
    </div>
    <div class="flex justify-center mt-10">
      <img
        src="https://www.wisestamp.com/wp-content/uploads/2023/06/steps-vb-1.svg"
        alt=""
      />
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
      <FeatureCard
        svg={`<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_82_10042)">
                  <path d="M32.4121 8.06155L21.0449 14.6244C18.4445 16.1257 16.9456 18.8021 16.8315 21.5956C16.8088 22.1529 16.5466 22.6852 16.0723 22.9786C15.1783 23.5317 14.0133 23.0144 14.0114 21.9632C14.0042 18.0676 16.0228 14.2761 19.6386 12.1886L31.0058 5.62572C36.3869 2.51894 43.2677 4.36265 46.3744 9.74374C49.4812 15.1248 47.6375 22.0056 42.2564 25.1124L30.8892 31.6753C26.8284 34.0197 21.9137 33.5451 18.4112 30.8585C17.6879 30.3037 17.8177 29.2282 18.5846 28.7354C19.1421 28.3772 19.8644 28.4531 20.4065 28.8341C23.0108 30.6643 26.5448 30.9357 29.4829 29.2394L40.8501 22.6766C44.8859 20.3465 46.2687 15.1859 43.9386 11.1501C41.6085 7.11425 36.4479 5.73147 32.4121 8.06155Z" fill="#F5467E"></path>
                  <path d="M21.7049 25.4064L11.9616 31.0317C7.47736 33.6207 5.94095 39.3546 8.52993 43.8389C11.1189 48.3231 16.8529 49.8596 21.3371 47.2706L31.0805 41.6453C34.0154 39.9508 35.6875 36.9091 35.7668 33.7524C35.7807 33.2008 35.7623 32.7566 35.7295 32.4044C35.6665 31.7278 35.9117 30.9573 36.4742 30.5761C37.2077 30.0792 38.2147 30.4181 38.3773 31.289C38.53 32.1073 38.5966 32.9326 38.5806 33.7524C38.4999 37.8804 36.3232 41.8661 32.4868 44.0811L22.7435 49.7064C16.9139 53.0721 9.45977 51.0747 6.09409 45.2452C2.72842 39.4157 4.72576 31.9615 10.5553 28.5958L20.2986 22.9705C24.3369 20.639 29.1548 20.8811 32.8531 23.1878C33.7172 23.7267 33.5913 24.9511 32.7044 25.4516C32.1998 25.7364 31.5807 25.6925 31.0786 25.4035C28.2741 23.789 24.7091 23.6719 21.7049 25.4064Z" fill="#F5467E"></path>
                  </g>
                  <defs>
                  <clipPath id="clip0_82_10042">
                  <rect width="56" height="56" fill="white"></rect>
                  </clipPath>
                  </defs>
                </svg>`}
        title="Connect"
        link="/"
      />
      <FeatureCard
        svg={`<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M54 49.5C54 49.7761 53.7761 50 53.5 50L24.5 50C24.2239 50 24 49.7761 24 49.5L24 48.5C24 48.2239 24.2239 48 24.5 48L53.5 48C53.7761 48 54 48.2239 54 48.5L54 49.5Z" stroke="#F5467E" stroke-width="2"></path>
                  <path d="M12.5 53.8333C12.5 54.2015 12.2015 54.5 11.8333 54.5L2.16667 54.5C1.79848 54.5 1.5 54.2015 1.5 53.8333L1.5 44.1667C1.5 43.7985 1.79848 43.5 2.16667 43.5L11.8333 43.5C12.2015 43.5 12.5 43.7985 12.5 44.1667L12.5 53.8333Z" stroke="#F5467E" stroke-width="3"></path>
                  <path d="M12.5 33.8333C12.5 34.2015 12.2015 34.5 11.8333 34.5L2.16667 34.5C1.79848 34.5 1.5 34.2015 1.5 33.8333L1.5 24.1667C1.5 23.7985 1.79848 23.5 2.16667 23.5L11.8333 23.5C12.2015 23.5 12.5 23.7985 12.5 24.1667L12.5 33.8333Z" stroke="#F5467E" stroke-width="3"></path>
                  <path d="M54 29.5C54 29.7761 53.7761 30 53.5 30L39 30L24.5 30C24.2239 30 24 29.7761 24 29.5L24 28.5C24 28.2239 24.2239 28 24.5 28L53.5 28C53.7761 28 54 28.2239 54 28.5L54 29.5Z" stroke="#F5467E" stroke-width="2"></path>
                  <path d="M54 9.5C54 9.77614 53.7761 10 53.5 10L24.5 10C24.2239 10 24 9.77614 24 9.5L24 8.5C24 8.22386 24.2239 8 24.5 8L53.5 8C53.7761 8 54 8.22386 54 8.5L54 9.5Z" stroke="#F5467E" stroke-width="2"></path>
                  <path d="M5.56836 13.3584L2.00084 9.80994" stroke="#F5467E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M16.543 2L5.83273 13.4371" stroke="#F5467E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>`}
        title="Onboard"
        link="/"
      />
      <FeatureCard
        svg={`<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_82_10056)">
                <path d="M17.1862 14.5156H8.07447C6.46342 14.5156 4.91836 15.1556 3.77917 16.2948C2.63999 17.434 2 18.979 2 20.5901V47.9252C2 49.5363 2.63999 51.0813 3.77917 52.2205C4.91836 53.3597 6.46342 53.9997 8.07447 53.9997H35.4096C37.0206 53.9997 38.5657 53.3597 39.7049 52.2205C40.8441 51.0813 41.4841 49.5363 41.4841 47.9252V38.8135" stroke="#F5467E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M17.1865 38.8153H26.2982L52.1147 12.9988C53.323 11.7905 54.0018 10.1517 54.0018 8.44295C54.0018 6.73417 53.323 5.09538 52.1147 3.8871C50.9065 2.67881 49.2677 2 47.5589 2C45.8501 2 44.2113 2.67881 43.003 3.8871L17.1865 29.7036V38.8153Z" stroke="#F5467E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M38.4473 8.44238L47.559 17.5541" stroke="#F5467E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                <defs>
                <clipPath id="clip0_82_10056">
                <rect width="56" height="56" fill="white"></rect>
                </clipPath>
                </defs>
              </svg>`}
        title="Create"
        link="/"
      />
      <FeatureCard
        svg={`<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="19.5" y="3.5" width="17" height="17" rx="2.5" stroke="#F5467E" stroke-width="3"></rect>
                <rect x="3.5" y="35.5" width="17" height="17" rx="2.5" stroke="#F5467E" stroke-width="3"></rect>
                <rect x="35.5" y="35.5" width="17" height="17" rx="2.5" stroke="#F5467E" stroke-width="3"></rect>
                <path d="M28 22V28M28 28H44V34M28 28H12V34" stroke="#F5467E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>`}
        title="Manage"
        link="/"
      />
    </div>
  </div>
</section>
