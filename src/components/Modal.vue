<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCartStore } from '../stores/cart';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'Modal',
  props: {
    show: { type: Boolean, required: true },
    title: { type: String, required: true },
  },
  emits: ['close'],
  setup() {
    const cartStore = useCartStore();
    const cartItems = computed(() => cartStore.items);
    const totalPrice = computed(() => {
      const total = cartStore.items.reduce((sum, item) => sum + parseFloat(item.itemPrice), 0);
      return total.toFixed(2);
    });

    const removeItem = (index: number) => {
      cartStore.removeItem(index);
    };

    return { cartItems, totalPrice, removeItem };
  },
  components: {
    Icon
  }
});
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black-primary bg-opacity-50 flex justify-center items-center z-[9999]"
    @click.self="$emit('close')"
  >
    <div class="relative bg-black-gradient p-6 rounded-lg w-11/12 sm:w-1/3 min-w-[300px] sm:min-w-[500px] xl:min-w-[600px]">
      <div class="flex justify-between items-center mb-4">
        <span @click="$emit('close')" class="text-orange-primary font-bold text-lg cursor-pointer">
          <Icon icon="material-symbols:close" class="size-7" />
        </span>
        <h2 class="text-2xl font-bold text-center flex-1 font-PacificoRegular text-light-primary">{{ title }}</h2>
        <span class="w-[48px]"></span>
      </div>

      <ul class="mb-4">
        <li
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex justify-between items-center py-2"
        >
          <div class="inline-flex items-center">
            <span class="text-light-primary">{{ item.itemName }}</span>
            <button 
              @click="removeItem(index)"
              class="ml-2 text-red-500 hover:text-red-700 font-bold mt-1"
            >
              <Icon icon="mdi:bin-outline" />
            </button>
          </div>
          <div>
            <span class="text-orange-primary font-semibold font-AntonRegular">{{ item.itemPrice }}$</span>
          </div>
        </li>
      </ul>

      <div class="flex justify-between items-center border-t pt-4">
        <span class="text-lg font-bold text-light-primary">Total:</span>
        <span class="text-xl font-bold text-orange-primary font-AntonRegular">{{ totalPrice }}$</span>
      </div>

      <div class="mt-3">
        <button type="button" class="px-3 py-1 bg-orange-primary rounded-lg font-AntonRegular font-bold hover:bg-orange-500 hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">Pay Order</button>
      </div>
    </div>
  </div>
</template>
