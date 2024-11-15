<template>
    <header class="w-full h-[3rem] bg-gray-primary flex flex-row justify-center items-center">
        <nav class="space-x-3 text-light-primary">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <span>test</span>
            <RouterLink to="/menu">Menu</RouterLink>
            <RouterLink to="/support">Support</RouterLink>
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
