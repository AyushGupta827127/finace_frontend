<template>
  <div class="mx-4 md:px-28 my-8 md:py-24 flex flex-col gap-28">
    <!-- Compliance Management Solution Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="flex items-center justify-between px-12">
        <img class="w-auto h-full" src="@/assets/img/home-page/compliance-management-software.png" alt="Compliance Management Software">
      </div>
      <div class="relative flex flex-col gap-8">
        <div class="corner !w-36 !h-36 -mr-12 -mt-12"></div>
        <div class="text-xl md:text-2xl pl-2 border-[3px] border-y-0 border-r-0 border-l-orange-500 text-blue-950 font-medium z-10">Compliance Management <span class="text-orange-500">Solution</span></div>
        <div class="text-justify z-10">
          Streamline your GRC processes with our comprehensive Compliance Management Solution. Automate compliance, manage contracts, and handle litigation effortlessly.
        </div>
        <ul class="flex flex-col gap-4">
          <li class="flex items-start gap-2">
            <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
            <span class="leading-5" >Automate Compliance: Simplify regulatory tracking and reporting.</span>
          </li>
          <li class="flex items-start gap-2">
            <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
            <span class="leading-5" >Contract Management: Efficiently handle and track contracts.</span>
          </li>
          <li class="flex items-start gap-2">
            <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
            <span class="leading-5" >Risk Reduction: Minimize compliance risks with automated solutions.</span>
          </li>
        </ul>
        <div>            
          <nuxt-link href="/products/compliance-management-suite"><button class="primary-btn">Learn More</button></nuxt-link>
        </div>
      </div>
    </div>

    <!-- Turnkey Projects Section -->
    <div class="md:grid grid-cols-1 flex flex-col-reverse md:grid-cols-2 gap-10">
      <div class="relative flex flex-col gap-8 object-bottom">
        <div class="corner !w-36 !h-36 -mr-12 -mt-12"></div>
        <div
          class="text-xl md:text-2xl pl-2 border-[3px] border-y-0 border-r-0 border-l-orange-500 text-blue-950 font-medium">
          Turnkey <span class="text-orange-500">Projects</span></div>
        <div class="text-justify z-10">
          Experience hassle-free project management with our Turnkey Projects. From concept to completion, we handle every detail, ensuring seamless implementation.
        </div>
        <ul class="flex flex-col gap-4">
          <li class="flex items-start gap-2">
            <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
            <span class="leading-5" >End-to-End Service: Complete management from idea to execution.</span>
          </li>
          <li class="flex items-start gap-2">
            <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
            <span class="leading-5" >Customized Solutions: Tailored to meet all your project needs.</span>
          </li>
          <li class="flex items-start gap-2">
            <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
            <span class="leading-5" >Effortless Implementation: Focus on your goals while we manage the details.</span>
          </li>
        </ul>
        <div>            
          <nuxt-link href="/products/turnkey-projects"><button class="primary-btn">Learn More</button></nuxt-link>
        </div>
      </div>
      <div class="flex items-center justify-between px-12 object-top">
        <img class="w-auto h-full" src="@/assets/img/home-page/turnkey-projects.png" alt="Turnkey Projects">
      </div>
    </div>

    <!-- Startup Package Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="flex items-center justify-between px-16">
        <img class="w-auto h-full" src="@/assets/img/home-page/startup-package.png" alt="Startup Package">
      </div>
      <div class="relative flex flex-col gap-8">
        <div class="corner !w-36 !h-36 -mr-12 -mt-12"></div>
        <div class="text-xl md:text-2xl pl-2 border-[3px] border-y-0 border-r-0 border-l-orange-500 text-blue-950 font-medium">Startup <span class="text-orange-500">Package</span></div>
        <div class="text-justify z-10">
          Our Startup Package is your all-in-one solution for launching and running a new business. From initial formation to ongoing support, we cover every aspect you need.
        </div>
        <ul class="flex flex-col gap-4">
          <li class="flex items-start gap-2">
            <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
            <span class="leading-5" >Business Formation: Efficient setup and registration.</span>
          </li>
          <li class="flex items-start gap-2">
            <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
            <span class="leading-5" >Tax & Legal Support: Expert advice and compliance.</span>
          </li>
          <li class="flex items-start gap-2">
            <img class="w-6 h-6 p-1 rounded-full bg-gray-100" src="@/assets/icons/check.svg" />
            <span class="leading-5" >Tech & Funding: Website development and trademark registration.</span>
          </li>
        </ul>
        <div>            
          <nuxt-link href="/products/statup-package"><button class="primary-btn">Learn More</button></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
