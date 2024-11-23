<template>
  <div class="text-gray-400 bg-gray-900 px-20">
    <div class="main-container grid grid-cols-3">
      <div class="navigation text-right pt-5">
        <div
          class="title sm:text-2xl text-left md:text-3xl font-bold border-b-2 w-fit m-auto border-blue-400 font-bodyFont"
        >
          KORSAT X PARMAGA
        </div>

        <div class="p-10 flex justify-center items-end">
          <div class="bg-red-400 w-5 h-5"></div>
          <div class="bg-green-400 w-5 h-10"></div>
          <div class="bg-yellow-400 w-5 h-16"></div>
        </div>

        <div class="links">
          <div
            class="link px-5 py-3 flex justify-end gap-2 items-center hover:bg-gray-500 hover:bg-opacity-25 cursor-pointer transition ease-out duration-1000"
            v-for="(cont, index) in ['Home', 'About', 'Contact']"
            :class="{
              'text-gray-50 border-r-2 border-t-2 border-t-gray-700 bg-gray-500 bg-opacity-25':
                index === 0,
            }"
            :key="cont"
          >
            <div
              class="text"
              :class="{
                'text-gray-50 ': index === 0,
              }"
            >
              {{ cont }}
            </div>
            <div class="icon"><i class="bx bxs-message-square-dots"></i></div>
          </div>
        </div>
      </div>
      <main class="col-span-2 pl-5 pt-5">
        <header class="flex sm:justify-end md:justify-between items-start">
          <div class="title hidden md:block">
            <div
              class="main-title text-5xl font-bold border-b-2 border-yellow-400 font-bodyFont"
            >
              Games
            </div>
            <div class="sub-title text-3xl font-semibold text-green-500">
              For Gamers
            </div>
          </div>

          <div class="user flex justify-end gap-5">
            <div
              class="login font-semibold bun hover:bg-slate-500 hover:text-secondaryXX-100 transition ease-out duration-500"
            >
              Log in
            </div>
            <div
              class="signup font-semibold bun hover:bg-slate-500 hover:text-secondaryXX-100 transition ease-out duration-500"
            >
              Sign up
            </div>
          </div>
        </header>

        <div class="games">
          <section>
            <div
              class="title font-bold text-3xl py-10 border-b-2 border-yellow-400 text-secondaryXX-100"
            >
              Latest Games
            </div>
            <div class="cards grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
              <div class="card" v-for="i in results" :key="i.id">
                <div class="image h-full w-full">
                  <img
                    src="../public/1.jpg"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <div class="title h-15">
                  <div class="main-title font-bold h-5 overflow-hidden">
                    {{ i.title }}
                  </div>
                  <div class="sub-title h-5 overflow-hidden">{{ i.body }}</div>
                </div>
                <div class="badge gap-2 flex">
                  <span class="icon"><i class="bx bxs-star"></i></span>
                  <span class="text">5.8 / 10</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="title font-bold text-3xl text-yellow-300 py-10">
              Most Popular
            </div>
            <!-- <div class="cards">
              <div class="card">
                <div class="image"></div>
                <div class="title">
                  <div class="main-title"></div>
                  <div class="sub-title"></div>
                </div>
              </div>
            </div> -->
          </section>

          <div
            class="load-more flex justify-center text-xl h-12 bg-red-800 text-white font-bodyFont py-2 overflow-hidden"
          >
            <a
              href=""
              class="hover:text-yellow-300 hover:scale-110 transition ease-out duration-500"
              >load more</a
            >
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import { watch } from "vue";

import useAPI from "@/use/api";
export default {
  setup() {
    // definePageMeta({
    //   layout: "about-page",
    // });
    const { results, loading, errors, call } = useAPI();
    call("https://jsonplaceholder.typicode.com/posts").then(() => {
      results.value = results.value.slice(0, 5);
      console.log("First 5 results:", results.value);
    });
    return {
      results,
      loading,
      errors,
    };
  },
};
</script>
<style scoped>
@media (max-width: 768px) {
  header {
    justify-content: flex-end;
  }
}
</style>
