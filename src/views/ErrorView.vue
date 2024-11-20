<template>
    <section class="h-screen flex flex-col justify-center items-center">
        <span class="font-AntonRegular text-light-primary text-4xl sm:text-8xl">Error 404</span>
        <span class="text-gray-secondary text-2xl sm:text-6xl">Page was not found!</span>
        <button type="button" @click="redirect" class="uppercase text-black-primary bg-orange-primary px-12 py-3 rounded-3xl font-bold font-AntonRegular text-xl md:text-3xl hover:bg-gray-primary hover:text-light-primary hover:scale-105 ease-in transition-all mt-10">Redirect To Home Page</button>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'Error',
    methods: {
        redirect() {
            this.$router.push('/');
        },
    },
});
</script>
