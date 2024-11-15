<script lang="ts">
import HomeItems from '../components/HomeItems.vue';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'HomeView',
  data() {},
  components: {
    HomeItems
  }
});
</script>

<template>
  <section class="w-full h-screen bg-black-gradient">
    <div class="flex flex-col justify-center items-center align-middle">
      <div class="relative mt-20">
          <img src="../assets/burger.png" alt="burger-image" class="mb-10 z-20">
          <h1 class="text-light-primary text-9xl z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              BurgerLab
          </h1>
      </div>
      <div class="flex flex-row gap-9">
        <HomeItems />
        <HomeItems />
        <div class="grid place-items-center">
          <button type="button" class="uppercase text-black-primary bg-orange-primary px-7 py-3 rounded-3xl font-bold">
            Order Now
          </button>
        </div>
        <HomeItems />
        <HomeItems />
      </div>
    </div>
  </section>
</template>
