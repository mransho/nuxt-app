<template>
  <div>
    <nav class="container mx-auto mt-3 px-6">
      <div class="flex justify-space-between items-center">
        <div class="flex align-center gap-3">
          <img src="~/public/favicon.ico" alt="Nuxt logo" width="30px" />
          <span class="font-bold text-2xl">NUXT</span>
        </div>
        <div class="hidden md:flex gap-5 items-center">
          <a href="" class="text-slate-900 hover:text-orange-500">Portfolio</a>
          <a href="" class="text-slate-900 hover:text-orange-500">About</a>
          <a href="" class="text-slate-900 hover:text-orange-500">Contact</a>
          <a href="" class="text-slate-900 hover:text-orange-500">Social</a>
          <a
            href=""
            class="py-2 px-6 rounded-full bg-orange-500 text-white hover:bg-slate-900"
          >
            Call me
          </a>
        </div>
        <button class="md:hidden" @click="menu_open = !menu_open">
          <i class="ri-menu-line text-2xl"></i>
        </button>
      </div>
      <div class="md:hidden" v-if="menu_open">
        <div
          class="absolute flex flex-col items-center gap-5 font-bold drop-shadow-lg border border-gray-300 bg-gray-50 py-8 left-6 right-6"
        >
          <a href="" class="text-slate-900">Portfolio</a>
          <a href="" class="text-slate-900">About</a>
          <a href="" class="text-slate-900">Contact</a>
          <a href="" class="text-slate-900">Social</a>
          <a
            href=""
            class="py-2 px-6 rounded-full bg-orange-500 text-white hover:bg-slate-900"
          >
            Call me
          </a>
        </div>
      </div>
    </nav>
    <section id="hero">
      <div
        class="container mx-auto px-6 md:gap-6 text-center flex flex-col-reverse md:flex-row"
      >
        <div
          class="md:w-1/2 flex flex-col gap-y-5 py-8 md:text-left text-slate-900 justify-center"
        >
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl">
            Rapidly build modern websites without ever leaving your HTML.
          </h1>
          <p>
            A utility-first CSS framework packed with classes like flex, pt-4,
            text-center and rotate-90 that can be composed to build any design,
            directly in your markup.
          </p>

          <a
            href=""
            class="py-2 px-6 self-center md:self-start rounded-full bg-orange-500 text-white hover:bg-slate-900"
          >
            Call me
          </a>
        </div>
        <div class="md:w-1/2"><img src="~/public/undraw1.png" alt="" /></div>
      </div>
    </section>

    <section id="author" class="">
      <div class="container px-6 mx-auto my-32 text-center">
        <h2 class="font-bold text-4xl">
          Type keywords relative to your project to find the illustrations you
          need.
        </h2>
        <p class="max-w-5xl mt-8 mx-auto">
          Use images that scale without quality degradation, making them not
          just 6K but future-ready. With a tiny file size
        </p>

        <div class="mt-10 flex flex-col md:flex-row gap-5">
          <div
            class="md:w-1/3 flex items-center flex-col p-6 gap-y-2 rounded-lg border border-slate-200 bg-slate-100"
          >
            <img
              src="../../public/2.jpg"
              alt="Mahmoud"
              class="w-16 rounded-full -mt-12"
            />
            <h5 class="font-bold text-lg text-slate-900">Mahmoud Mostafa</h5>
            <p class="leading-5 text-sm text-slate-700">
              Create better designed websites, products and applications. Browse
              to find the images that fit your messaging, automagically
              customise the color to match your brand
            </p>
          </div>

          <div
            class="md:w-1/3 flex items-center flex-col p-6 gap-y-2 rounded-lg border border-slate-200 bg-slate-100"
          >
            <img
              src="../../public/1.jpg"
              alt="Mahmoud"
              class="w-16 rounded-full -mt-12"
            />
            <h5 class="font-bold text-lg text-slate-900">Mahmoud Ahmed</h5>
            <p class="leading-5 text-sm text-slate-700">
              Create better designed websites, products and applications. Browse
              to find the images that fit your messaging, automagically
              customise the color to match your brand
            </p>
          </div>

          <div
            class="md:w-1/3 flex items-center flex-col p-6 gap-y-2 rounded-lg border border-slate-200 bg-slate-100"
          >
            <img
              src="../../public/3.png"
              alt="Mahmoud"
              class="w-16 rounded-full h-16 object-cover -mt-12"
            />
            <h5 class="font-bold text-lg text-slate-900">Mostafa Eslam</h5>
            <p class="leading-5 text-sm text-slate-700">
              Create better designed websites, products and applications. Browse
              to find the images that fit your messaging, automagically
              customise the color to match your brand
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="Move text-center bg-orange-500 gap-x-5 gap-y-5 items-center py-10 md:px-16 flex justify-between flex-col lg:flex-row"
    >
      <div class="text-white font-bold text-3xl md:text-4xl lg:text-5xl">
        Move even faster with Tailwind UI.
      </div>
      <div class="bg-white w-fit px-5 py-2 flex items-center rounded-xl">
        <a href="" class="text-orange-500"> Start Here </a>
      </div>
    </section>

    <footer class="bg-slate-900">
      <div
        class="container sm:px-6 mx-auto text-white py-10 flex flex-col-reverse lg:flex-row justify-between gap-y-3 lg:gap-y-0"
      >
        <div
          class="flex flex-col items-center justify-center lg:justify-between gap-y-2 md:gap-y-2 lg:items-start"
        >
          <div class="flex align-center gap-3">
            <img src="../../public/favicon.ico" alt="logo" class="h-8" />
            <span class="font-bold text-2xl">NUXT</span>
          </div>
          <div class="flex gap-x-4">
            <a href="">
              <i class="ri-facebook-box-fill text-3xl"></i>
            </a>
            <a href="">
              <i class="ri-instagram-fill text-3xl"></i>
            </a>
            <a href="">
              <i class="ri-youtube-fill text-3xl"></i>
            </a>
            <a href="">
              <i class="ri-twitter-fill text-3xl"></i>
            </a>
            <a href="">
              <i class="ri-linkedin-fill text-3xl"></i>
            </a>
          </div>
          <div class="block lg:hidden">
            NUXT design with Tailwind &copy; 2024
          </div>
        </div>

        <div class="flex justify-around lg:gap-32">
          <div class="flex flex-col space-y-2">
            <a href="" class="hover:text-slate-300">Home</a>
            <a href="" class="hover:text-slate-300">About</a>
            <a href="" class="hover:text-slate-300">Contact</a>
          </div>
          <div class="flex flex-col space-y-2">
            <a href="" class="hover:text-slate-300">Imprint</a>
            <a href="" class="hover:text-slate-300">Privacy</a>
            <a href="" class="hover:text-slate-300">Credits</a>
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <form action="#" class="flex justify-center">
            <div class="flex gap-x-3">
              <input
                type="text"
                placeholder="Subscribe To Newsletter"
                class="flex-1 py-2 px-6 rounded-full bg-gray-100 text-black border-none outline-none"
                name=""
                id=""
              />
              <button
                class="bg-orange-500 hover:bg-slate-500 rounded-full px-4 py-2"
              >
                {{ `Subscribe`.toUpperCase() }}
              </button>
            </div>
          </form>
          <div class="hidden lg:block">
            NUXT design with Tailwind &copy; 2024
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { ref } from "vue";
const menu_open = ref(false);
definePageMeta({
  layout: "profile-layout",
});

useHead({
  title: "Tailwind Css",
  meta: [
    {
      name: "description",
      content: "Tailwind Project.",
    },
  ],
});
</script>
