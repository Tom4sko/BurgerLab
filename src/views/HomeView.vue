<script lang="ts">
import { defineComponent } from 'vue';
import HomeItems from '../components/HomeItems.vue';

import burgerImage1 from '../assets/landing/burger1.png';
import burgerImage2 from '../assets/landing/burger2.png';
import burgerImage3 from '../assets/landing/burger3.png';
import burgerImage4 from '../assets/landing/burger4.png';

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeItems,
  },
  data() {
    return {
      burgerImage1,
      burgerImage2,
      burgerImage3,
      burgerImage4
    };
  }
});
</script>

<template>
  <section class="w-full">
    <div class="relative flex flex-col justify-center items-center align-middle">
      <div class="absolute top-0 right-0 blur-sm hidden lg:block">
        <img src="../assets/landing/tomato2.png" alt="tomato-bg" class="h-80 w-80">
      </div>
      <div class="absolute bottom-32 left-20 blur-sm hidden lg:block">
        <img src="../assets/landing/tomato.png" alt="tomato-bg" class="h-80 w-80">
      </div>
      <div class="absolute top-10 left-0 blur-sm rotate-90 block">
        <img src="../assets/landing/lettuce.png" alt="lettuce-bg" class="h-60 w-60">
      </div>
      <div class="absolute bottom-10 right-20 blur-sm block">
        <img src="../assets/landing/onion.png" alt="onion-bg" class="h-40 md:h-80 w-40 md:w-80">
      </div>
      <div class="relative mt-20 lg:mt-32 xl:mt-44 mb-20">
        <img src="../assets/burger.png" alt="burger-image" class="relative z-10 h-44 sm:h-52 md:h-64 lg:h-96 w-44 sm:w-52 md:w-64 lg:w-96">
        <h1 class="text-light-primary font-PacificoRegular scale-y-150 text-[60px] sm:text-[120px] md:text-[160px] lg:text-[160px] xl:text-[200px] z-0 absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          BurgerLab
        </h1>
      </div>
      <div class="flex flex-row gap-9 mb-20">
        <HomeItems :img-url="burgerImage1" class="hidden md:block" />
        <HomeItems :img-url="burgerImage2" class="hidden md:block" />
        <div class="grid place-items-center">
          <button type="button" class="z-20 uppercase text-black-primary bg-orange-primary px-12 py-3 rounded-3xl font-bold font-AntonRegular text-2xl md:text-3xl hover:bg-gray-primary hover:text-light-primary hover:scale-105 ease-in transition-all">
            Order Now
          </button>
        </div>
        <HomeItems :img-url="burgerImage3" class="hidden md:block" />
        <HomeItems :img-url="burgerImage4" class="hidden md:block" />
      </div>
    </div>
  </section>
  
  <section class="relative w-full overflow-x-hidden">
    <div class="absolute top-44 -left-[120px] hidden lg:block">
      <img src="../assets/landing/plus.svg">
    </div>
    <div class="absolute top-0 -right-[70px] hidden lg:block overflow-x-hidden">
      <img src="../assets/landing/plus.svg">
    </div>
    <div class="px-12 md:px-24 lg:px-44 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-36 my-12">
      <div>
        <h2 class="font-AntonRegular text-light-primary text-4xl mb-4">About Us</h2>
        <p class="text-gray-secondary text-sm md:text-base">Founded in 2015, BurgerLab has quickly become a standout in the world of gourmet burgers, offering a modern twist on the classic American burger joint. What started as a small idea in the heart of the city has grown into a beloved local hotspot for those who crave exceptional, high-quality burgers made with fresh, locally-sourced ingredients. At BurgerLab, we don’t just serve burgers—we craft experiences. Each burger on our extensive menu is the result of careful thought, precision, and a passion for flavor. From juicy, classic cheeseburgers to innovative, out-of-the-box creations, every bite is an explosion of taste that pushes the boundaries of what a burger can be. We take pride in experimenting with flavors, textures, and combinations to deliver a burger experience that’s unlike anything else.</p>
        <p class="text-gray-secondary text-sm md:text-base mt-5">Our commitment to quality is unwavering. We work closely with local farmers and suppliers to ensure that every ingredient we use is fresh, sustainable, and of the highest standard. Whether it’s our hand-formed patties, homemade sauces, or our locally baked buns, every component of a BurgerLab burger is crafted with care. Beyond the food, we believe in creating a welcoming environment where everyone feels like part of the family. Whether you're here for a casual lunch with friends, a family dinner, or a fun night out, our goal is to make you feel at home. The experience at BurgerLab is all about great food, great company, and a laid-back, lively atmosphere. It’s this focus on customer satisfaction, combined with our passion for innovation, that has set us apart in an increasingly competitive food scene.</p>
        <div class="flex justify-center">
          <img src="../assets/burger.svg" alt="" class="h-80 w-80">
        </div>
      </div>
      <div>
        <div class="flex justify-center md:justify-start">
          <img src="../assets/ceo.png" alt="ceo-photo" class="rounded-lg contrast-150">
        </div>
        <h3 class="font-AntonRegular text-light-primary text-4xl my-4">Our CEO - Tomas Zelenak</h3>
        <p class="text-gray-secondary text-sm md:text-base">Tomas Zelenak, the CEO of BurgerLab, is the visionary behind the restaurant’s success. With a background in both hospitality and entrepreneurship, Tomas set out to create a burger place that blends delicious food with a memorable dining experience. His commitment to quality ingredients, innovative flavors, and exceptional customer service has been the driving force behind the brand’s growth. Tomas is hands-on in every aspect of the business, ensuring that each burger served is a perfect balance of taste and freshness, and that each guest leaves with a smile. His passion for food and hospitality continues to inspire BurgerLaba to push boundaries and raise the bar in the burger industry.</p>
      </div>
    </div>
  </section>
</template>
