<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'Navbar',
  components: {
    RouterLink,
    RouterView,
    Icon
  },
  setup() {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      isModalOpen,
      openModal,
      closeModal,
    };
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
            <button @click="openModal" class="h-full flex flex-row justify-center items-center px-0 sm:px-2 hover:bg-orange-primary">Cart <Icon icon="mdi:cart-outline" /></button>
        </nav>
    </div>
  </header>

  <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
    <div class="bg-white p-6 rounded-lg w-11/12 sm:w-1/3">
      <h2 class="text-2xl font-bold mb-4">test</h2>
      <p class="text-lg mb-4">test2</p>
      <button @click="closeModal" class="bg-orange-primary text-white px-4 py-2 rounded-lg">Close</button>
    </div>
  </div>

  <RouterView />
</template>

