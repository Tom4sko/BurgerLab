<script lang="ts">
import { defineComponent } from 'vue';
import Generator from '../components/Generator.vue';

export default defineComponent ({
    name: 'MakeYourWishView',
    components: {
        Generator
    }
});
</script>

<template>
  <section class="relative px-12 md:px-24 lg:px-44 mb-20">
    <div class="absolute top-0 left-0 rotate-6 -z-10 hidden md:block">
      <img src="/makeyourwish/leaf.png" class="size-80">
    </div>
    <div class="absolute top-[500px] right-0 rotate-6 -z-10 hidden md:block">
      <img src="/makeyourwish/chilly.png" class="size-80">
    </div>
    <div class="absolute bottom-[700px] -left-[70px] -z-10 hidden md:block">
      <img src="../assets/plus.svg" class="size-80">
    </div>
    <div class="absolute bottom-[200px] right-0 -rotate-6 -z-10 hidden md:block">
      <img src="/makeyourwish/leaf2.png" class="size-80">
    </div>
    <h2 class="font-PacificoRegular text-light-primary text-[50px] mb-4 text-center mt-10 z-20">Make Your Wish</h2>
    <div class="flex flex-row items-center justify-center">
      <p class="text-center max-w-[700px] text-gray-secondary mb-10 mt-3 px-12 z-20">Design your perfect burger just the way you want it! With a variety of fresh ingredients and limitless options, you can customize every detail to suit your taste. Whether you prefer a classic flavor or something more adventurous, we’ll make it exactly how you like it – your burger, your way.</p>
    </div>
    <div>
      <Generator />
    </div>
  </section>
</template>