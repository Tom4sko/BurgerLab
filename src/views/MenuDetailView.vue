<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useBurgerStore, type Burger } from '../stores/burger';
import { useCartStore } from '../stores/cart';
import { Icon } from '@iconify/vue';
import MakeYourWish from '../components/MakeYourWish.vue';

export default defineComponent({
  name: 'MenuDetailView',
  components: {
    Icon,
    MakeYourWish,
  },
  setup() {
    const burgerStore = useBurgerStore();
    const cartStore = useCartStore();
    const router = useRouter();

    const cartMessage = ref('');
    const burgerData = ref<Burger | null>(burgerStore.selectedBurger);

    console.log('Burger Data:', burgerData);

    watchEffect(() => {
      if (!burgerData.value) {
        router.replace({ path: '/menu', query: { error: 'Burger not found' } });
      }
    });

    const burgerNameParts = computed(() => {
      if (burgerData.value) {
        const parts = burgerData.value.itemName.split(' ');
        return { main: parts.slice(0, -1).join(' '), last: parts.slice(-1).join(' ') };
      }
      return { main: '', last: '' };
    });

    // Add burger to cart
    const addToCart = () => {
      if (burgerData.value) {
        cartStore.addItem(burgerData.value);
        cartMessage.value = 'Burger has been added to the shopping cart!';
        setTimeout(() => {
          cartMessage.value = '';
        }, 3000);
      }
    };

    return { burgerData, addToCart, cartMessage, burgerNameParts };
  },
});
</script>

<template>
  <section class="min-h-screen relative">
    <div class="absolute top-0 -left-[180px] lg:-left-[40px]">
      <img src="../assets/plus.svg">
    </div>
    <div class="absolute -bottom-7 right-0 hidden lg:block">
      <img src="/menudetails/lines.png" class="lg:size-96 xl:size-[500px]">
    </div>
    <div v-if="burgerData">
      <div class="px-12 md:px-24 lg:px-44 flex flex-col-reverse lg:flex-row flex-1 gap-20 lg:gap-40 mb-20 lg:mb-10">
        <!-- Image Section -->
        <div class="flex-1 flex-col">
          <div class="flex justify-center mt-0 lg:mt-5">
            <img :src="burgerData.itemImage" alt="Burger Image" class="max-w-full h-auto" />
          </div>
          <!-- Info Section -->
          <div class="flex flex-row gap-4 justify-between my-2">
            <div class="inline-flex items-center gap-1">
              <Icon icon="game-icons:weight-scale" class="text-orange-primary size-7" />
              <span class="text-light-primary font-semibold text-xl">{{ burgerData.itemWeight }}g</span>
            </div>
            <div class="inline-flex items-center gap-1">
              <Icon icon="mdi:clock-outline" class="text-orange-primary size-7" />
              <span class="text-light-primary font-semibold text-xl">{{ burgerData.itemTime }} mins</span>
            </div>
            <div class="inline-flex items-center gap-1">
              <Icon icon="healthicons:dairy" class="text-orange-primary size-7" />
              <span class="text-light-primary font-semibold text-xl">{{ burgerData.itemMilk }}</span>
            </div>
          </div>
          <!-- Nutritional Information -->
          <div class="mt-6">
            <h2 class="text-3xl font-semibold font-AntonRegular text-light-primary mb-4">Nutritional Information</h2>
            <table class="w-full table-auto border-separate border-spacing-2">
              <thead>
                <tr>
                  <th class="text-left text-lg font-medium text-orange-primary">Nutrient</th>
                  <th class="text-left text-lg font-medium text-gray-secondary">Amount per {{ burgerData.itemNutrient }}g</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2 text-orange-primary">Energy</td>
                  <td class="py-2 text-gray-secondary">{{ burgerData.itemEnergy }} kcal</td>
                </tr>
                <tr>
                  <td class="py-2 text-orange-primary">Fat</td>
                  <td class="py-2 text-gray-secondary">{{ burgerData.itemFat }}g</td>
                </tr>
                <tr>
                  <td class="py-2 text-orange-primary">Saturated Fat</td>
                  <td class="py-2 text-gray-secondary">{{ burgerData.itemSaturatedFat }}g</td>
                </tr>
                <tr>
                  <td class="py-2 text-orange-primary">Protein</td>
                  <td class="py-2 text-gray-secondary">{{ burgerData.itemProtein }}g</td>
                </tr>
                <tr>
                  <td class="py-2 text-orange-primary">Salt</td>
                  <td class="py-2 text-gray-secondary">{{ burgerData.itemSalt }}g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Details Section -->
        <div class="flex-1">
          <h1 class="font-PacificoRegular text-light-primary text-4xl sm:text-7xl font-bold mt-20 mb-7 text-wrap break-words leading-10">
            {{ burgerNameParts.main }}
            <span class="inline-block mt-2">{{ burgerNameParts.last }}</span>
          </h1>
          <span class="text-orange-primary text-8xl font-AntonRegular">{{ burgerData.itemPrice }}$</span>
          <p class="text-gray-secondary my-10">{{ burgerData.itemDescription }}</p>
          <!-- Add to Cart -->
          <div class="flex items-center justify-center md:justify-start w-full">
            <button
              @click="addToCart"
              type="button"
              class="z-20 bg-orange-primary text-3xl px-8 py-3 rounded-3xl font-AntonRegular hover:bg-orange-500 hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Add To Cart
            </button>
          </div>
          <p v-if="cartMessage" class="mt-4 text-green-500 font-bold text-center">{{ cartMessage }}</p>
        </div>
      </div>
    </div>
    <div v-else class="flex justify-center items-center h-full">
      <Icon icon="mdi:loading" class="animate-spin text-orange-primary size-10" />
    </div>
  </section>
</template>