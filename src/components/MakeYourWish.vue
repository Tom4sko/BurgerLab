<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'MakeYourWish',
    data() {},
    methods: {
        redirect() {
            this.$router.push('/makeyourwish');
        }
    }
});
</script>

<template>
  <div class="relative w-full backdrop-blur-3xl bg-white/5 rounded-lg p-5">
    <div class="flex flex-col md:flex-row justify-between mx-0 md:mx-12 lg:mx-24">
      <div class="flex-1 items-center mt-2">
        <h2 class="font-PacificoRegular text-light-primary text-5xl font-bold mt-4 md:mt-3 lg:mt-2">Make Your Wish</h2>
        <p class="text-gray-secondary mt-5">Craft your perfect burger with the freshest ingredients, tailored to your taste. From juicy patties to flavorful toppings, every bite is a delicious experience made just for you</p>
        <div class="flex justify-center md:justify-start">
          <button type="button" @click="redirect" class="z-20 uppercase mt-5 text-black-primary bg-orange-primary px-6 py-1 rounded-3xl font-bold font-AntonRegular text-base md:text-xl hover:bg-gray-primary hover:text-light-primary hover:scale-105 ease-in transition-all">
            Create Now
          </button>
        </div>
      </div>
      <div class="flex-1 w-full flex justify-center md:justify-end">
        <img src="/public/makeyourwish/burger.gif" alt="makeawish-burger-gif" class="size-72 transform scale-x-[-1]">
      </div>
    </div>
  </div>
</template>

