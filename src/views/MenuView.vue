<template>
  <section class="relative">
    <div class="absolute top-0 -left-[30px] hidden md:block">
      <img src="/menu/salt.png" class="w-642 h-52">
    </div>
    <div class="absolute top-[550px] right-0 hidden md:block">
      <img src="/menu/beans.png" class="w-642 h-52">
    </div>
    <div class="absolute bottom-0 -left-[100px] hidden md:block">
      <img src="../assets/plus.svg" class="w-642 h-52">
    </div>
    <h2 class="font-PacificoRegular text-light-primary text-[50px] mb-4 text-center mt-10 z-20 section-title">Our Dishes</h2>
    <div class="flex flex-row items-center justify-center">
      <p class="text-center max-w-[700px] text-gray-secondary mb-10 mt-3 px-12 z-20 section-description">
        Our dishes are made with fresh ingredients and a passion for traditional flavors. Each meal is carefully crafted to offer a unique experience that delights your taste buds.
      </p>
    </div>

    <div class="flex flex-col md:flex-row items-center justify-between px-12 md:px-24 lg:px-44 mb-10 filter-section">
      <div class="flex flex-col md:flex-row items-center gap-4">
        <label class="text-light-primary text-2xl font-PacificoRegular">Sort by:</label>
        <select v-model="selectedFilter" class="px-4 py-2 rounded bg-gray-500 text-light-primary">
          <option value="">All</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="lowCalorie">Calories: Low to High</option>
          <option value="quickPrep">Quick Preparation</option>
        </select>
      </div>
    </div>

    <div class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 px-12 md:px-24 lg:px-44 md:place-items-center mb-20 w-full menu-cards">
      <MenuCards
        v-for="(burger, index) in filteredBurgers"
        :key="index"
        :itemName="burger.itemName"
        :itemImage="burger.itemImage"
        :itemPrice="burger.itemPrice"
        :itemWeight="burger.itemWeight"
        :itemTime="burger.itemTime"
        :itemMilk="burger.itemMilk"
        :itemDescription="burger.itemDescription"
        :itemNutrient="burger.itemNutrient"
        :itemEnergy="burger.itemEnergy"
        :itemFat="burger.itemFat"
        :itemSaturatedFat="burger.itemSaturatedFat"
        :itemProtein="burger.itemProtein"
        :itemSalt="burger.itemSalt"
      />
    </div>
  </section>
  <section>
    <div class="px-12 md:px-24 lg:px-44 mb-20">
      <MakeYourWish />
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useBurgerStore } from '@/stores/burger';
import MenuCards from '@/components/MenuCards.vue';
import MakeYourWish from '@/components/MakeYourWish.vue';
import gsap from 'gsap';

const burgerStore = useBurgerStore();
const burgers = burgerStore.burgers;
const selectedFilter = ref('');

const filteredBurgers = computed(() => {
  if (!selectedFilter.value) return burgers;
  switch (selectedFilter.value) {
    case 'lowToHigh':
      return [...burgers].sort((a, b) => parseFloat(a.itemPrice) - parseFloat(b.itemPrice));
    case 'highToLow':
      return [...burgers].sort((a, b) => parseFloat(b.itemPrice) - parseFloat(a.itemPrice));
    case 'lowCalorie':
      return [...burgers].sort((a, b) => a.itemEnergy - b.itemEnergy);
    case 'quickPrep':
      return burgers.filter(burger => burger.itemTime <= 15);
    default:
      return burgers;
  }
});

onMounted(() => {
  gsap.from(".section-title", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power4.out"
  });

  gsap.from(".section-description", {
    opacity: 0,
    x: -50,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.3
  });

  gsap.from(".filter-section", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.5
  });

  gsap.from(".menu-cards", {
    opacity: 0,
    scale: 0.9,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.7,
    stagger: 0.3
  });
});
</script>
