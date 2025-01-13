import { defineStore } from 'pinia';

export type Burger = {
  itemName: string;
  itemImage: string;
  itemDescription: string;
  itemPrice: string;
  itemWeight: number;
  itemTime: number;
  itemMilk: string;
  itemNutrient: string;
  itemEnergy: string;
  itemFat: string;
  itemSaturatedFat: string;
  itemProtein: string;
  itemSalt: string;
};

export const useBurgerStore = defineStore('burger', {
  state: () => ({
    burgers: [
      {
        itemName: 'Cheese Royale',
        itemImage: '/landing/burger1.png',
        itemDescription: 'The Cheese Royale burger features a juicy beef patty topped with melted cheese, fresh lettuce, tomatoes, pickles, and a flavorful sauce, all in a soft, toasted bun. It\'s a perfect choice for cheese lovers.',
        itemPrice: '12.99',
        itemWeight: 250,
        itemTime: 20,
        itemMilk: 'dairy free',
        itemNutrient: 120,
        itemEnergy: 700,
        itemFat: 50,
        itemSaturatedFat: 140,
        itemProtein: 60,
        itemSalt: 150,
      },
      {
        itemName: 'The Stackmaster',
        itemImage: '/landing/burger4.png',
        itemDescription: 'The Stackmaster burger is a massive, indulgent creation with multiple layers of juicy beef patties, melted cheese, crispy bacon, fresh vegetables, and a tasty sauce, all stacked high in a soft, toasted bun. It\'s a true feast for burger enthusiasts.',
        itemPrice: '14.99',
        itemWeight: 320,
        itemTime: 30,
        itemMilk: 'dairy free',
        itemNutrient: 130,
        itemEnergy: 750,
        itemFat: 55,
        itemSaturatedFat: 150,
        itemProtein: 65,
        itemSalt: 160,
      },
      {
        itemName: 'Chicken Deluxe',
        itemImage: '/landing/burger5.png',
        itemDescription: 'The Chicken Deluxe burger features a tender, grilled chicken breast topped with fresh lettuce, tomatoes, pickles, and a creamy mayo sauce, all nestled in a soft, toasted bun. It\'s a delicious, satisfying choice for chicken lovers.',
        itemPrice: '10.99',
        itemWeight: 270,
        itemTime: 20,
        itemMilk: 'dairy free',
        itemNutrient: 110,
        itemEnergy: 680,
        itemFat: 48,
        itemSaturatedFat: 140,
        itemProtein: 60,
        itemSalt: 140,
      },
      {
        itemName: 'Breeze Burger',
        itemImage: '/landing/burger2.png',
        itemDescription: 'The Sea Breeze Burger features a tender, grilled fish fillet topped with crisp lettuce, fresh tomatoes, tangy pickles, and a zesty tartar sauce, all served in a soft, toasted bun. A perfect choice for seafood enthusiasts.',
        itemPrice: '9.99',
        itemWeight: 220,
        itemTime: 15,
        itemMilk: 'dairy free',
        itemNutrient: 100,
        itemEnergy: 650,
        itemFat: 45,
        itemSaturatedFat: 140,
        itemProtein: 55,
        itemSalt: 130,
      },
      {
        itemName: 'The Melt',
        itemImage: '/landing/burger3.png',
        itemDescription: 'The Melt burger features a juicy beef patty topped with melted cheese, caramelized onions, and a rich, creamy sauce, all sandwiched between two buttery, toasted buns. A savory, indulgent choice for comfort food lovers.',
        itemPrice: '10.99',
        itemWeight: 250,
        itemTime: 25,
        itemMilk: 'dairy free',
        itemNutrient: 105,
        itemEnergy: 700,
        itemFat: 50,
        itemSaturatedFat: 140,
        itemProtein: 60,
        itemSalt: 150,
      },
      {
        itemName: 'Grillhouse Special',
        itemImage: '/landing/burger6.png',
        itemDescription: 'The GrillHouse Special burger features a perfectly grilled beef patty topped with smoky bacon, melted cheddar cheese, fresh lettuce, tomatoes, pickles, and a signature BBQ sauce, all served in a toasted bun. A mouthwatering choice for those who love bold flavors.',
        itemPrice: '13.99',
        itemWeight: 320,
        itemTime: 30,
        itemMilk: 'dairy free',
        itemNutrient: 115,
        itemEnergy: 720,
        itemFat: 52,
        itemSaturatedFat: 145,
        itemProtein: 62,
        itemSalt: 155,
      },
    ],
    selectedBurger: null as Burger | null,
  }),
  actions: {
    setBurger(burger: any) {
      this.selectedBurger = burger;
    },
  },
});
