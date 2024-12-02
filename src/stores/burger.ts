import { defineStore } from 'pinia';

export const useBurgerStore = defineStore('burger', {
  state: () => ({
    selectedBurger: null as Burger | null,
  }),
  actions: {
    setBurger(burger: Burger) {
      this.selectedBurger = burger;
    },
  },
});

type Burger = {
  itemName: string;
  itemImage: string;
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
