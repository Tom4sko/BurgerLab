<script lang="ts">
import { useRouter } from 'vue-router';
import { useBurgerStore } from '../stores/burger';
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'MenuDetailView',
  components: {
    Icon
  },
  setup() {
    const burgerStore = useBurgerStore();
    const router = useRouter();

    if (!burgerStore.selectedBurger) {
      router.push('/menu');
    }
    return { burgerData: burgerStore.selectedBurger };
  },
});
</script>

<template>
  <section class="min-h-screen relative">
    <div class="absolute top-0 -left-[180px] lg:-left-[40px]">
      <img src="../assets/plus.svg">
    </div>
    <div class="absolute -bottom-7 right-0 hidden lg:block">
      <img src="/menudetails/lines.png" class="lg:size-96 xl:size-[700px]">
    </div>
    <div v-if="burgerData">
      <div class="px-12 md:px-24 lg:px-44 flex flex-col-reverse lg:flex-row flex-1 gap-20 lg:gap-40 mb-20 lg:mb-10">
        <div class="flex-1 flex-col">
          <div class="flex justify-center mt-0 lg:mt-5">
            <img src="/burger.png">
          </div>
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
          <div class="mt-6">
            <h2 class="text-3xl font-semibold font-AntonRegular text-light-primary mb-4">Nutritional Information</h2>
            <table class="w-full table-auto border-separate border-spacing-2">
              <thead>
                <tr>
                  <th class="text-left text-lg font-medium text-orange-primary">Nutrient</th>
                  <th class="text-left text-lg font-medium text-gray-secondary">Amount per 100g</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2 text-orange-primary">Energy</td>
                  <td class="py-2 text-gray-secondary">50 kcal</td>
                </tr>
                <tr>
                  <td class="py-2 text-orange-primary">Fat</td>
                  <td class="py-2 text-gray-secondary">50g</td>
                </tr>
                <tr>
                  <td class="py-2 text-orange-primary">Saturated Fat</td>
                  <td class="py-2 text-gray-secondary">50g</td>
                </tr>
                <tr>
                  <td class="py-2 text-orange-primary">Protein</td>
                  <td class="py-2 text-gray-secondary">50g</td>
                </tr>
                <tr>
                  <td class="py-2 text-orange-primary">Salt</td>
                  <td class="py-2 text-gray-secondary">50g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex-1">
          <h1 class="font-PacificoRegular text-light-primary text-4xl sm:text-7xl font-bold mt-20 mb-7">{{ burgerData.itemName }}</h1>
          <span class="text-orange-primary text-8xl font-AntonRegular">{{ burgerData.itemPrice }}$</span>
          <p class="text-gray-secondary my-10">{{  burgerData.itemDescription }}</p>
          <div class="flex items-center justify-center md:justify-start w-full">
            <button type="button" class="bg-orange-primary text-3xl px-8 py-3 rounded-3xl font-AntonRegular hover:bg-orange-500 hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Načítavanie...</p>
    </div>
  </section>
</template>

