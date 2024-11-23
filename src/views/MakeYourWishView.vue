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
    <h2 class="font-PacificoRegular text-light-primary text-[50px] mb-4 text-center mt-10 z-20">Make Your Wish</h2>
    <div class="flex flex-row items-center justify-center">
      <p class="text-center max-w-[700px] text-gray-secondary mb-10 mt-3 px-12 z-20">Design your perfect burger just the way you want it! With a variety of fresh ingredients and limitless options, you can customize every detail to suit your taste. Whether you prefer a classic flavor or something more adventurous, we’ll make it exactly how you like it – your burger, your way.</p>
    </div>
    <div>
        <Generator />
    </div>
  </section>
</template>