<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../stores/cart';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'Generator',
  components: {
    Icon
  },
  data() {
    return {
      sliders: [
        {
          name: 'Bun',
          items: [
            { id: 1, name: 'Classic Bun', img: '/makeyourwish/bun1.png' },
            { id: 2, name: 'Sezam Bun', img: '/makeyourwish/bun2.png' },
            { id: 3, name: 'Chocolate Bun', img: '/makeyourwish/bun3.png' },
          ],
          currentIndex: 0,
        },
        {
          name: 'Sauce',
          items: [
            { id: 1, name: 'Mustard', img: '/makeyourwish/sauce1.png' },
            { id: 2, name: 'Horseradish', img: '/makeyourwish/sauce2.png' },
            { id: 3, name: 'Ketchup', img: '/makeyourwish/sauce3.png' },
          ],
          currentIndex: 0,
        },
        {
          name: 'Patty',
          items: [
            { id: 1, name: 'Beef Patty', img: '/makeyourwish/meat1.png' },
            { id: 2, name: 'Chicken Patty', img: '/makeyourwish/meat2.png' },
            { id: 3, name: 'Salam Patty', img: '/makeyourwish/meat3.png' },
          ],
          currentIndex: 0,
        },
      ],
      selectedItems: {
        Bun: { id: 1, name: 'Classic Bun', img: '/makeyourwish/bun1.png' },
        Patty: { id: 1, name: 'Beef Patty', img: '/makeyourwish/meat1.png' },
        Sauce: { id: 1, name: 'Ketchup', img: '/makeyourwish/sauce1.png' },
      } as Record<string, { id: number; name: string; img: string }>,
      cartMessage: '',
    };
  },
  methods: {
    selectItem(sliderName: string, item: { id: number; name: string; img: string }) {
      this.selectedItems[sliderName] = item;
      console.log(`Selected for ${sliderName}:`, item);
    },
    nextImage(sliderName: string) {
      const slider = this.sliders.find(s => s.name === sliderName);
      if (slider) {
        slider.currentIndex = (slider.currentIndex + 1) % slider.items.length;
        this.updateSelectedItem(sliderName);
      }
    },
    prevImage(sliderName: string) {
      const slider = this.sliders.find(s => s.name === sliderName);
      if (slider) {
        slider.currentIndex = (slider.currentIndex - 1 + slider.items.length) % slider.items.length;
        this.updateSelectedItem(sliderName);
      }
    },
    updateSelectedItem(sliderName: string) {
      const slider = this.sliders.find(s => s.name === sliderName);
      if (slider) {
        const currentItem = slider.items[slider.currentIndex];
        this.selectedItems[sliderName] = currentItem;
      }
    },
    addToCart() {
      const cartStore = useCartStore();
      const selectedBurger = {
        itemName: `${this.selectedItems.Bun.name} with ${this.selectedItems.Patty.name} and ${this.selectedItems.Sauce.name}`,
        itemPrice: '10.00',
        itemWeight: '200g',
        itemTime: '5 mins',
        itemMilk: 'No',
        itemDescription: 'Delicious burger with choice of bun, patty, and sauce.',
        itemNutrient: 'High in protein',
        itemEnergy: '300 kcal',
        itemFat: '15g',
        itemSaturatedFat: '5g',
        itemProtein: '20g',
        itemSalt: '1g',
      };
      cartStore.addItem(selectedBurger);
      this.cartMessage = 'Your burger was added to the shopping cart!';
      setTimeout(() => {
        this.cartMessage = '';
      }, 3000);
    },
  },
});
</script>


<template>
  <main class="w-full h-auto p-4">
    <div v-for="slider in sliders" :key="slider.name" class="mb-6">
      <h2 class="text-2xl font-bold mb-2 text-center font-AntonRegular text-light-primary">{{ slider.name }}</h2>
      <div class="relative w-full flex justify-center items-center min-h-[350px]">
        <button @click="prevImage(slider.name)" class="absolute left-0 lg:left-[200px] bg-orange-primary text-light-primary p-3 rounded-full">
          <Icon icon="icon-park-outline:left" class="size-7 text-gray-secondary" />
        </button>
        <div class="flex justify-center items-center">
          <img
            :src="slider.items[slider.currentIndex]?.img"
            :alt="slider.items[slider.currentIndex]?.name"
            class="w-[300px] h-auto object-contain rounded" />
        </div>
        <button @click="nextImage(slider.name)" class="absolute right-0 lg:right-[200px] bg-orange-primary text-light-primary p-3 rounded-full">
          <Icon icon="icon-park-outline:right" class="size-7 text-gray-secondary" />
        </button>
      </div>
    </div>
    <div class="mt-10">
      <h2 class="text-5xl font-bold mb-4 text-center font-PacificoRegular text-light-primary">Your Burger</h2>
      <ul>
        <li v-for="(item, key) in selectedItems" :key="key" class="mb-2 text-light-primary">
          <strong class="text-orange-primary text-xl mr-2">{{ key }}:</strong>
          {{ item.name }}
        </li>
      </ul>
      <button @click="addToCart" class=" mt-4 z-20 uppercase text-black-primary bg-orange-primary px-12 py-3 rounded-3xl font-bold font-AntonRegular text-xl hover:bg-gray-primary hover:text-light-primary hover:scale-105 ease-in transition-all">
        Add to Cart
      </button>
      <p v-if="cartMessage" class="mt-4 text-center text-green-500 font-bold">{{ cartMessage }}</p>
    </div>
  </main>
</template>
