<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
    name: 'MenuCards',
    components: {
        Icon
    },
    props: {
      itemName: {
        type: String,
        require: true,
      },
      itemPrice: {
        type: String,
        require: true,
      },
      itemWeight: {
        type: String,
        require: true,
      },
      itemTime: {
        type: String,
        require: true,
      },
      itemMilk: {
        type: String,
        require: true,
      },
      itemDescription: {
        type: String,
        require: true,
      }
    }
});
</script>


<template>
  <div class="relative h-[500px]w-auto md:w-[440px] lg:w-[350px] xl:w-[290px] 2xl:w-[350px] bg-transparent hover:translate-x-5 hover:-rotate-3 hover:scale-105 transition-all duration-300 ease-in-out group">
      <div class="flex flex-col">
        <div class="flex justify-center">
          <img src="../assets/burger.png" alt="" class="h-44 w-44 transition-transform duration-300 ease-in-out group-hover:scale-125">
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
          <button type="button" class="bg-orange-primary px-5 py-2 rounded-3xl font-AntonRegular hover:bg-orange-500 hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
</template>