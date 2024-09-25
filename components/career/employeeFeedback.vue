<template>
    <div class="mx-4 md:mx-28 py-20">
    <div class="grid grid-cols-2 gap-10">
        <div class="py-20">
        <div class="w-auto h-full flex justify-center">
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dx4Teh-nv3A?si=qL8S7osV0ROwtmWn&modestbranding=1&rel=0&showinfo=0&controls=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            ></iframe>
        </div>
        </div>
        <div class="py-10">
        <div
            class="h-full overflow-hidden bg-white rounded shadow-2xl text-slate-500 shadow-slate-200"
        >
            <p
            class="text-xl md:text-2xl pl-2 border-[3px] border-y-0 border-r-0 border-l-orange-500 text-blue-950 font-medium mx-6 mt-10"
            >
            Employee <span class="text-orange-500">Feedback</span>
            </p>
            <UtilSliderComponent>
            <div v-for="i of 3" class="pl-4">
                <utilTestimony
                :testimony="{
                    content:
                    'Finace India has been a game-changer for our startup. Their one-click solutions made the legal process smooth and stress-free.',
                    by: 'Amit Verma',
                    by_caption: 'CEO, Startup Hub',
                }"
                />
            </div>
            </UtilSliderComponent>
        </div>
        </div>
    </div>
    </div>
</template>