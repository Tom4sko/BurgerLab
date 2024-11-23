// cart.ts
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems') || '[]') as Burger[],
  }),

  actions: {
    addItem(burger: Burger) {
      this.items.push(burger);
      this.saveCartToLocalStorage();
    },
    removeItem(index: number) {
      this.items.splice(index, 1);
      this.saveCartToLocalStorage();
    },
    clearCart() {
      this.items = [];
      this.saveCartToLocalStorage();
    },
    saveCartToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
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
