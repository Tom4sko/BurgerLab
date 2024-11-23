import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Burger[],
  }),
  actions: {
    addItem(burger: Burger) {
      this.items.push(burger);
    },
    removeItem(index: number) {
      this.items.splice(index, 1);
    },
    clearCart() {
      this.items = [];
    },
  },
});

export type Burger = {
  itemName: string;
  itemPrice: string;
  itemWeight: string;
  itemTime: string;
  itemMilk: string;
  itemDescription: string;
  itemNutrient: string;
  itemEnergy: string;
  itemFat: string;
  itemSaturatedFat: string;
  itemProtein: string;
  itemSalt: string;
};
