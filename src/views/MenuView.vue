<script lang="ts">
import { defineComponent } from 'vue';
import MenuCards from '../components/MenuCards.vue';

export default defineComponent ({
  name: 'MenuView',
  components: {
    MenuCards
  },
  data() {
    return {
      itemDescription1: 'The Cheese Royale burger features a juicy beef patty topped with melted cheese, fresh lettuce, tomatoes, pickles, and a flavorful sauce, all in a soft, toasted bun. It\'s a perfect choice for cheese lovers.',
      itemDescription2: 'The Stackmaster burger is a massive, indulgent creation with multiple layers of juicy beef patties, melted cheese, crispy bacon, fresh vegetables, and a tasty sauce, all stacked high in a soft, toasted bun. It\'s a true feast for burger enthusiasts.',
      itemDescription3: 'The Chicken Deluxe burger features a tender, grilled chicken breast topped with fresh lettuce, tomatoes, pickles, and a creamy mayo sauce, all nestled in a soft, toasted bun. It\'s a delicious, satisfying choice for chicken lovers.',
      itemDescription4: 'The Sea Breeze Burger features a tender, grilled fish fillet topped with crisp lettuce, fresh tomatoes, tangy pickles, and a zesty tartar sauce, all served in a soft, toasted bun. A perfect choice for seafood enthusiasts.',
      itemDescription5: 'The Melt burger features a juicy beef patty topped with melted cheese, caramelized onions, and a rich, creamy sauce, all sandwiched between two buttery, toasted buns. A savory, indulgent choice for comfort food lovers.',
      itemDescription6: 'The GrillHouse Special burger features a perfectly grilled beef patty topped with smoky bacon, melted cheddar cheese, fresh lettuce, tomatoes, pickles, and a signature BBQ sauce, all served in a toasted bun. A mouthwatering choice for those who love bold flavors.',
    }
  }
});
</script>

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
    <h2 class="font-PacificoRegular text-light-primary text-[50px] mb-4 text-center mt-10 z-20">Our Dishes</h2>
    <div class="flex flex-row items-center justify-center">
      <p class="text-center max-w-[700px] text-gray-secondary mb-10 mt-3 px-12 z-20">Our dishes are made with fresh ingredients and a passion for traditional flavors. Each meal is carefully crafted to offer a unique experience that delights your taste buds.</p>
    </div>
    <div class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 px-12 md:px-24 lg:px-44 md:place-items-center mb-20 w-full">
      <MenuCards :itemName="'Cheese Royale'" :itemDescription="itemDescription1" :itemPrice="'12\.99'" :itemWeight="'250'" :itemTime="'20'" :itemMilk="'diary free'" />
      <MenuCards :itemName="'The Stackmaster'" :itemDescription="itemDescription2" :itemPrice="'14\.99'" :itemWeight="'320'" :itemTime="'30'" :itemMilk="'diary free'"  />
      <MenuCards :itemName="'Chicken Deluxe'" :itemDescription="itemDescription3" :itemPrice="'10\.99'" :itemWeight="'270'" :itemTime="'20'" :itemMilk="'dairy free'"  />
      <MenuCards :itemName="'Sea Breeze Burger'" :itemDescription="itemDescription4" :itemPrice="'9\.99'" :itemWeight="'220'" :itemTime="'15'" :itemMilk="'dairy free'"  />
      <MenuCards :itemName="'The Melt'" :itemDescription="itemDescription5" :itemPrice="'10\.99'" :itemWeight="'250'" :itemTime="'25'" :itemMilk="'diary free'"  />
      <MenuCards :itemName="'Grillhouse Special'" :itemDescription="itemDescription6" :itemPrice="'13\.99'" :itemWeight="'320'" :itemTime="'30'" :itemMilk="'diary free'"  />
    </div>
  </section>
</template>