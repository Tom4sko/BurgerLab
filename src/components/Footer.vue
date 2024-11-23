<script lang="ts">
  import { defineComponent } from 'vue';
  import { Icon } from '@iconify/vue';

  export default defineComponent({
    name: 'Footer',
    components: {
      Icon
    }
  });
</script>

<template>
  <footer class="relative bottom-0 w-full h-auto bg-orange-primary rounded-tl-3xl rounded-tr-3xl">
    <div class="px-12 md:px-24 lg:px-44 py-5 md:py-8 flex flex-col md:flex-row justify-center items-center md:justify-between">
      <img src="/logo.png" alt="logo" class="w-24 h-24 rounded-full border-4 border-white shadow-lg" />
      <div>
        <h3 class="text-2xl text-black-primary font-bold font-AntonRegular text-center md:text-left mt-5 md:mt-0">- Navigation -</h3>
        <ul class="flex flex-row gap-4 mt-5 md:mt-0">
          <li>
            <router-link to="/" class="font-AntonRegular font-semibold text-xl text-gray-secondary hover:text-gray-primary hover:underline cursor-pointer transition duration-300">Home</router-link>
          </li>
          <li>
            <router-link to="/contact" class="font-AntonRegular font-semibold text-xl text-gray-secondary hover:text-gray-primary hover:underline cursor-pointer transition duration-300">Contact</router-link>
          </li>
          <li>
            <router-link to="/menu" class="font-AntonRegular font-semibold text-xl text-gray-secondary hover:text-gray-primary hover:underline cursor-pointer transition duration-300">Menu</router-link>
          </li>
        </ul>
      </div>
      <div class="flex flex-col">
        <h3 class="text-2xl text-black-primary font-bold font-AntonRegular text-center md:text-left mt-5 md:mt-0">- Socials -</h3>
        <div class="flex flex-row mt-5 md:mt-0">
          <div class="h-10 w-10 rounded-full text-gray-secondary bg-light-primary flex justify-center items-center border-2 border-gray-secondary transition-all duration-300 transform hover:bg-gray-primary hover:translate-y-[-5px]">
            <Icon icon="mdi:youtube" class="w-6 h-6 text-red-600" />
          </div>
          <div class="h-10 w-10 rounded-full text-gray-secondary bg-light-primary flex justify-center items-center border-2 border-gray-secondary transition-all duration-300 transform hover:bg-gray-primary hover:translate-y-[-5px]">
            <Icon icon="mdi:instagram" class="w-6 h-6 text-yellow-400" />
          </div>
          <div class="h-10 w-10 rounded-full text-gray-secondary bg-light-primary flex justify-center items-center border-2 border-gray-secondary transition-all duration-300 transform hover:bg-gray-primary hover:translate-y-[-5px]">
            <Icon icon="mdi:linkedin" class="w-6 h-6 text-blue-700" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
