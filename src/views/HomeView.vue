<script lang="ts">
  import HomeItems from '../components/HomeItems.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'HomeView',
    data() {},
    components: {
      HomeItems
    }
  });
</script>

<template>
    <section class="w-full min-h-screen bg-black-gradient">
      <div class="flex flex-col justify-center items-center align-middle">
        <div class="relative mt-10 mb-20">
          <img src="../assets/burger.png" alt="burger-image" class="relative z-10 h-44 sm:h-52 md:h-64 lg:h-96 w-44 sm:w-52 md:w-64 lg:w-96">
          <h1 class="text-light-primary font-PacificoRegular scale-y-150 text-[60px] sm:text-[120px] md:text-[160px] lg:text-[160px] z-0 absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            BurgerLab
          </h1>
        </div>
        <div class="flex flex-row gap-9">
          <HomeItems class="hidden md:block" />
          <HomeItems class="hidden md:block" />
          <div class="grid place-items-center">
            <button type="button" class="uppercase text-black-primary bg-orange-primary px-12 py-3 rounded-3xl font-bold font-AntonRegular text-2xl md:text-3xl">
              Order Now
            </button>
          </div>
          <HomeItems class="hidden md:block" />
          <HomeItems class="hidden md:block" />
        </div>
      </div>
    </section>
</template>