<template>
  <section class="relative px-4 md:px-28 md:mb-40 pt-10">
    <div class="corner !w-36 !h-36 mr-8 mt-4 !bg-gray-100/50 "></div>
    <div class="corner !w-36 !h-36 mr-4 "></div>
      <div class="md:grid flex flex-col-reverse grid-cols-1 md:grid-cols-2 gap-20">
          <LandingSuccessMatrix />
          <div class="flex flex-col justify-start gap-4 text-justify">
              <p class="text-xl md:text-2xl pl-2 border-[3px] border-y-0 border-r-0 border-l-orange-500 text-blue-950 font-medium">
                  We mind your <span class="text-orange-500">Business</span>
              </p>
              <p>Welcome to Finance India, where innovation meets expertise. We are one-stop solutions for all your legal and financial needs, be it for a startup or an established firm. Now get incorporation, compliance, accounting, and much more conveniently online. Partner with us for long-term success.
              </p>
              <ul class="flex flex-col gap-4">
                <li class="flex items-start gap-2">
                  <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
                  <span class="leading-5" >Our services are devised in such a way that your business would always be compliant and financially fit.</span>
                </li>
                <li class="flex items-start gap-2">
                  <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
                  <span class="leading-5" >Experience the perfect blend of personal service and expert advice, tailored to meet the particular needs of your business.</span>
                </li>
                <li class="flex items-start gap-2">
                  <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
                  <span class="leading-5" >We formulate strategy to allow you to realize personal and business objectives that will exceed your clients' expectations.</span>
                </li>
              </ul>
              <div>
                <nuxt-link href="/company/about"><button class="primary-btn">Know More</button></nuxt-link>
              </div>
          </div>
      </div>
  </section>
</template>
