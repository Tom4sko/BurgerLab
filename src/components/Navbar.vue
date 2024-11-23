<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { Icon } from '@iconify/vue';
import Modal from './Modal.vue';

export default defineComponent({
  name: 'Navbar',
  components: {
    RouterLink,
    RouterView,
    Icon,
    Modal
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
      <nav class="gap-2 sm:gap-5 text-light-primary font-AntonRegular h-full flex flex-row justify-center items-center">
        <RouterLink to="/" class="h-full flex flex-row justify-center items-center px-0 sm:px-2 hover:bg-orange-primary">
          Home
        </RouterLink>
        <RouterLink to="/contact" class="h-full flex flex-row justify-center items-center px-0 sm:px-2 hover:bg-orange-primary">
          Contact
        </RouterLink>
        <div class="h-full flex flex-row justify-center items-center">
          <div class="relative w-16 h-16 bg-gray-secondary rounded-full overflow-hidden">
            <img src="/logo.png" alt="Burger" class="object-cover w-full h-full" />
          </div>
        </div>
        <RouterLink to="/menu" class="h-full flex flex-row justify-center items-center px-0 sm:px-2 hover:bg-orange-primary">
          Menu
        </RouterLink>
        <button @click="openModal" class="h-full flex flex-row justify-center items-center px-0 sm:px-2 hover:bg-orange-primary">
          Cart <Icon icon="mdi:cart-outline" />
        </button>
      </nav>
    </div>
  </header>

  <Modal :show="isModalOpen" title="Your Cart" @close="closeModal" />

  <RouterView />
</template>
