<script>
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
    name: 'MenuCards',
    components: {
        Icon
    }
});
</script>


<template>
  <div class="relative h-[500px]w-auto md:w-[440px] lg:w-[350px] xl:w-[290px] 2xl:w-[350px] bg-transparent hover:translate-x-5 hover:-rotate-3 hover:scale-105 transition-all duration-300 ease-in-out group">
      <div class="flex flex-col p-3">
        <div class="flex justify-center">
          <img src="../assets/burger.png" alt="" class="h-44 w-44 transition-transform duration-300 ease-in-out group-hover:scale-125">
        </div>
        <div class="flex flex-row justify-between my-2">
          <h3 class="text-light-primary font-AntonRegular text-2xl">CheeseBurger</h3>
          <h4 class="text-orange-primary font-AntonRegular text-2xl">10.99$</h4>
        </div>
        <p class="text-gray-secondary">A cheeseburger is a popular burger that combines juicy beef patty and melted cheese on a soft bun. This tasty dish is often topped with fresh vegetables like tomatoes, lettuce, and onions, making it a perfect choice for a quick lunch or evening snack.</p>
        <div class="flex flex-row gap-4 justify-between my-2">
          <div class="inline-flex items-center gap-1">
            <Icon icon="game-icons:weight-scale" class="text-orange-primary" />
            <span class="text-light-primary font-semibold">250g</span>
          </div>
          <div class="inline-flex items-center gap-1">
            <Icon icon="mdi:clock-outline" class="text-orange-primary" />
            <span class="text-light-primary font-semibold">30 mins</span>
          </div>
          <div class="inline-flex items-center gap-1">
            <Icon icon="healthicons:dairy" class="text-orange-primary" />
            <span class="text-light-primary font-semibold">Dairy Free</span>
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