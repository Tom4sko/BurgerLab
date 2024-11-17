<script lang="ts">
import { defineComponent } from 'vue';
import HomeItems from '../components/HomeItems.vue';

import burgerImage1 from '../assets/landing/burger1.png';
import burgerImage2 from '../assets/landing/burger2.png';
import burgerImage3 from '../assets/landing/burger3.png';
import burgerImage4 from '../assets/landing/burger4.png';

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeItems,
  },
  data() {
    return {
      burgerImage1,
      burgerImage2,
      burgerImage3,
      burgerImage4
    };
  }
});
</script>

<template>
  <section class="w-full bg-black-gradient">
    <div class="relative flex flex-col justify-center items-center align-middle">
      <div class="absolute top-0 right-0 blur-sm hidden lg:block">
        <img src="../assets/landing/tomato2.png" alt="tomato-bg" class="h-80 w-80">
      </div>
      <div class="absolute bottom-32 left-20 blur-sm hidden lg:block">
        <img src="../assets/landing/tomato.png" alt="tomato-bg" class="h-80 w-80">
      </div>
      <div class="absolute top-10 left-0 blur-sm rotate-90 hidden lg:block">
        <img src="../assets/landing/lettuce.png" alt="lettuce-bg" class="h-60 w-60">
      </div>
      <div class="absolute bottom-10 right-20 blur-sm hidden lg:block">
        <img src="../assets/landing/onion.png" alt="onion-bg" class="h-80 w-80">
      </div>
      <div class="relative mt-20 lg:mt-32 xl:mt-44 mb-20">
        <img src="../assets/burger.png" alt="burger-image" class="relative z-10 h-44 sm:h-52 md:h-64 lg:h-96 w-44 sm:w-52 md:w-64 lg:w-96">
        <h1 class="text-light-primary font-PacificoRegular scale-y-150 text-[60px] sm:text-[120px] md:text-[160px] lg:text-[160px] xl:text-[200px] z-0 absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          BurgerLab
        </h1>
      </div>
      <div class="flex flex-row gap-9 mb-20">
        <HomeItems :img-url="burgerImage1" class="hidden md:block" />
        <HomeItems :img-url="burgerImage2" class="hidden md:block" />
        <div class="grid place-items-center">
          <button type="button" class="uppercase text-black-primary bg-orange-primary px-12 py-3 rounded-3xl font-bold font-AntonRegular text-2xl md:text-3xl hover:bg-gray-primary hover:text-light-primary hover:scale-105 ease-in transition-all">
            Order Now
          </button>
        </div>
        <HomeItems :img-url="burgerImage3" class="hidden md:block" />
        <HomeItems :img-url="burgerImage4" class="hidden md:block" />
      </div>
    </div>
  </section>
</template>
