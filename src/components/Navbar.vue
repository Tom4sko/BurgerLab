<template>
    <header class="w-full h-[3rem] bg-gray-primary">
        <nav class="gap-3 text-light-primary h-full flex flex-row justify-center items-center">
            <RouterLink to="/" class="h-full flex flex-row justify-center items-center">Home</RouterLink>
            <RouterLink to="/about" class="h-full flex flex-row justify-center items-center">About</RouterLink>
            <div class="h-full flex flex-row justify-center items-center">
              <div class="relative w-16 h-16 bg-light-primary rounded-full overflow-hidden">
                <img src="../assets/logo.png" alt="Burger" class="object-cover w-full h-full" />
              </div>
            </div>
            <RouterLink to="/menu" class="h-full flex flex-row justify-center items-center">Menu</RouterLink>
            <RouterLink to="/support" class="h-full flex flex-row justify-center items-center">Support</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

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
