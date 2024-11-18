<script lang="ts">
import { defineComponent } from 'vue';
import MenuCards from '../components/MenuCards.vue';

export default defineComponent ({
  name: 'MenuView',
  components: {
    MenuCards
  }
});
</script>

<template>
  <section class="relative">
    <div class="absolute top-0 -left-[30px] hidden md:block">
      <img src="../assets/menu/salt.png" class="w-642 h-52">
    </div>
    <div class="absolute top-[550px] right-0 hidden md:block">
      <img src="../assets/menu/beans.png" class="w-642 h-52">
    </div>
    <div class="absolute bottom-0 -left-[100px] hidden md:block">
      <img src="../assets/landing/plus.svg" class="w-642 h-52">
    </div>
    <h2 class="font-PacificoRegular text-light-primary text-[50px] mb-4 text-center mt-10 z-20">Our Dishes</h2>
    <div class="flex flex-row items-center justify-center">
      <p class="text-center max-w-[700px] text-gray-secondary mb-10 mt-3 px-12 z-20">Our dishes are made with fresh ingredients and a passion for traditional flavors. Each meal is carefully crafted to offer a unique experience that delights your taste buds.</p>
    </div>
    <div class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 px-12 md:px-24 lg:px-44 md:place-items-center mb-20">
      <MenuCards />
      <MenuCards />
      <MenuCards />
      <MenuCards />
      <MenuCards />
      <MenuCards />
    </div>
  </section>
</template>