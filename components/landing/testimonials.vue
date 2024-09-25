<template>
  <div class="mx-4 md:mx-28 my-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="py-20">
        <div class="w-auto h-full flex justify-center">
          <iframe class="rounded" width="560" height="315"
            src="https://www.youtube.com/embed/AZXoEweMxZI?si=x49DSbEBXQToZ-nh" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <div class="py-10">
          <div class="relative h-full overflow-hidden bg-white rounded shadow-2xl text-slate-500 shadow-slate-200">          
            <div class="corner !w-36 !h-36 m-4"></div>
            <p
              class="text-xl md:text-2xl pl-2 border-[3px] border-y-0 border-r-0 border-l-orange-500 text-blue-950 font-medium mx-6 mt-10 z-10">
              What Clients say <span class="text-orange-500">about us</span>
            </p>  
            <UtilSliderComponent>
              <div class="pl-4">
                <utilTestimony :testimony="{
                  content:
                    'Finace India has been an invaluable partner in helping us navigate the complexities of business incorporation and compliance.',
                  by: 'Manish Singh ',
                      by_caption: 'CEO, BNF',
                    }" />             
              </div>  
              <div class="pl-4">
                <utilTestimony :testimony="{
                  content:
                    `We were extremely satisfied with Finace India's assistance in obtaining our business licenses.`,
                  by: 'Brajesh Tiwari',
                      by_caption: 'CEO, Inspigear',
                    }" />             
              </div>  
              <div class="pl-4">
                <utilTestimony :testimony="{
                  content:
                    `I was impressed by Finace India's knowledge and professionalism. They helped me understand the intricacies of income tax and ensured that I maximized my tax savings. I highly recommend their services.`,
                  by: 'Manmohan Kumar',
                      by_caption: 'CEO, Wonton',
                    }" />             
                </div>     
              </UtilSliderComponent>
        </div>
      </div>
    </div>
  </div>
</template>
