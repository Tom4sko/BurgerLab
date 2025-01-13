<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import { useBurgerStore } from '../stores/burger';

export default defineComponent({
  name: 'MenuCards',
  components: {
    Icon,
  },
  props: {
    itemName: {
      type: String,
      required: true,
    },
    itemImage: {
      type: String,
      required: true,
    },
    itemPrice: {
      type: String,
      required: true,
    },
    itemWeight: {
      type: Number,
      required: true,
    },
    itemTime: {
      type: Number,
      required: true,
    },
    itemMilk: {
      type: String,
      required: true,
    },
    itemDescription: {
      type: String,
      required: true,
    },
    itemNutrient: {
      type: Number,
      required: false,
    },
    itemEnergy: {
      type: Number,
      required: false,
    },
    itemFat: {
      type: Number,
      required: false,
    },
    itemSaturatedFat: {
      type: Number,
      required: false,
    },
    itemProtein: {
      type: Number,
      required: false,
    },
    itemSalt: {
      type: Number,
      required: false,
    },
  },
  methods: {
    goToProduct() {
      const burgerStore = useBurgerStore();
      burgerStore.setBurger({
        itemName: this.itemName,
        itemImage: this.itemImage,
        itemPrice: this.itemPrice,
        itemWeight: this.itemWeight,
        itemTime: this.itemTime,
        itemMilk: this.itemMilk,
        itemDescription: this.itemDescription,
        itemNutrient: this.itemNutrient,
        itemEnergy: this.itemEnergy,
        itemFat: this.itemFat,
        itemSaturatedFat: this.itemSaturatedFat,
        itemProtein: this.itemProtein,
        itemSalt: this.itemSalt
      });
      this.$router.push({
        name: 'menu-product',
        params: { productName: this.itemName },
      });
    },
  },
});
</script>

<template>
  <div class="relative h-[500px]w-auto md:w-[440px] lg:w-[350px] xl:w-[290px] 2xl:w-[350px] bg-transparent hover:translate-x-5 hover:-rotate-3 hover:scale-105 transition-all duration-300 ease-in-out group">
      <div class="flex flex-col">
        <div class="flex justify-center">
          <img :src="itemImage" alt="" class="h-44 w-44 transition-transform duration-300 ease-in-out group-hover:scale-125">
        </div>
        <div class="flex flex-row justify-between my-2">
          <h3 class="text-light-primary font-AntonRegular text-2xl">{{ itemName }}</h3>
          <h4 class="text-orange-primary font-AntonRegular text-2xl">{{ itemPrice }}$</h4>
        </div>
        <p class="text-gray-secondary overflow-hidden h-36 text-ellipsis">{{ itemDescription }}</p>
        <div class="flex flex-row gap-4 justify-between my-2">
          <div class="inline-flex items-center gap-1">
            <Icon icon="game-icons:weight-scale" class="text-orange-primary" />
            <span class="text-light-primary font-semibold">{{ itemWeight }}g</span>
          </div>
          <div class="inline-flex items-center gap-1">
            <Icon icon="mdi:clock-outline" class="text-orange-primary" />
            <span class="text-light-primary font-semibold">{{ itemTime }} mins</span>
          </div>
          <div class="inline-flex items-center gap-1">
            <Icon icon="healthicons:dairy" class="text-orange-primary" />
            <span class="text-light-primary font-semibold">{{ itemMilk }}</span>
          </div>
        </div>
        <div class="flex items-center justify-left">
          <button type="button" @click="goToProduct" class="bg-orange-primary px-5 py-2 rounded-3xl font-AntonRegular hover:bg-orange-500 hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
            Explore More
          </button>
        </div>
      </div>
    </div>
</template>
