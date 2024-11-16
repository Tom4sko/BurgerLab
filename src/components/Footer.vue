<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Footer',
    data() {}
  });
</script>

<template>
  <footer class="relative bottom-0 w-full h-auto bg-orange-primary rounded-tl-3xl rounded-tr-3xl">
    <div class="max-w-7xl mx-auto px-16 py-12 flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">

      <div class="flex justify-center sm:justify-start">
        <img src="../assets/logo.png" alt="logo" class="w-24 h-24 rounded-full border-4 border-white shadow-lg" />
      </div>
      
      <ul class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-center sm:text-left">
        <li>
          <router-link to="/" class="font-AntonRegular font-semibold text-xl text-white hover:text-gray-200 cursor-pointer transition duration-300">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="font-AntonRegular font-semibold text-xl text-white hover:text-gray-200 cursor-pointer transition duration-300">About</router-link>
        </li>
        <li>
          <router-link to="/menu" class="font-AntonRegular font-semibold text-xl text-white hover:text-gray-200 cursor-pointer transition duration-300">Menu</router-link>
        </li>
        <li>
          <router-link to="/support" class="font-AntonRegular font-semibold text-xl text-white hover:text-gray-200 cursor-pointer transition duration-300">Support</router-link>
        </li>
      </ul>

      <div class="flex flex-col items-center sm:items-start space-y-4 sm:space-y-0">
        <span class="text-2xl text-white font-bold font-AntonRegular text-center sm:text-left">Follow Our News!</span>
        <div class="flex space-x-4">
          <input 
            type="email" 
            placeholder="Enter your e-mail."
            class="bg-white text-dark-primary border-2 border-gray-300 rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
          />
          <button class="bg-dark-primary text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
