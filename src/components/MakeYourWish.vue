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
  <div class="relative w-full bg-gray-secondary backdrop-blur-lg rounded-lg">
    <h1>Make Your Wish</h1>
    <p>test</p>
    <button type="button" @click="redirect" class="z-20 uppercase text-black-primary bg-orange-primary px-12 py-3 rounded-3xl font-bold font-AntonRegular text-2xl md:text-3xl hover:bg-gray-primary hover:text-light-primary hover:scale-105 ease-in transition-all">
        Order Now
    </button>
  </div>
</template>

