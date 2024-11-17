<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

export default defineComponent({
  
  name: 'Navbar',
  components: {
    RouterLink,
    RouterView,
  },
});
</script>

<template>
  <header class="sticky top-0 flex flex-row justify-center align-middle items-center bg-transparent z-[9999]">
    <div class="h-[3rem] bg-gray-primary rounded-full w-72 sm:w-[420px] mt-5">
        <nav class="gap-2 sm:gap-6 text-light-primary font-AntonRegular h-full flex flex-row justify-center items-center">
            <RouterLink to="/" class="h-full flex flex-row justify-center items-center px-0 sm:px-2 hover:bg-orange-primary">Home</RouterLink>
            <RouterLink to="/about" class="h-full flex flex-row justify-center items-center px-0 sm:px-2 hover:bg-orange-primary">About</RouterLink>
            <div class="h-full flex flex-row justify-center items-center">
              <div class="relative w-16 h-16 bg-gray-secondary rounded-full overflow-hidden">
                <img src="../assets/logo.png" alt="Burger" class="object-cover w-full h-full" />
              </div>
            </div>
            <RouterLink to="/menu" class="h-full flex flex-row justify-center items-center px-0 sm:px-2 hover:bg-orange-primary">Menu</RouterLink>
            <RouterLink to="/support" class="h-full flex flex-row justify-center items-center px-0 sm:px-2 hover:bg-orange-primary">Support</RouterLink>
        </nav>
    </div>
  </header>
  <RouterView />
</template>
