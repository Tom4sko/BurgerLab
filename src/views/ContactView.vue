<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'ContactView',
  components: {
    Icon
  },
  data() {
    return {};
  },
});
</script>

<template>
  <section class="bg-black-gradient px-12 md:px-24 lg:px-44 py-5 md:py-8 relative">
    <div class="absolute -top-80 left-0 hidden lg:block z-10">
      <img src="/contact/lightbulbs.png">
    </div>
    <div class="absolute top-96 -left-[150px] hidden md:block z-10">
      <img src="../assets/plus.svg">
    </div>
    <h2 class="text-center font-PacificoRegular text-light-primary text-[50px] mb-8 z-20">Reservation</h2>
    <div class="flex flex-col lg:flex-row justify-between gap-8 h-full">
      <form class="flex flex-col flex-1 gap-6">
        <input 
          type="text" 
          placeholder="Enter your email address" 
          class="w-full py-3 px-4 text-light-primary rounded-lg bg-transparent outline-none border-b-2 border-orange-primary"
        />
        <div class="flex flex-col sm:flex-row gap-6">
          <input 
            type="text" 
            placeholder="Date Of Reservation" 
            class="flex-1 py-3 px-4 text-light-primary rounded-lg bg-transparent outline-none border-b-2 border-orange-primary"
          />
          <input 
            type="text" 
            placeholder="Number of participants" 
            class="flex-1 py-3 px-4 text-light-primary rounded-lg bg-transparent outline-none border-b-2 border-orange-primary"
          />
        </div>
        <textarea 
          placeholder="Enter your wishes." 
          class="w-full px-4 text-light-primary rounded-lg bg-transparent outline-none border-b-2 border-orange-primary resize-y"
        ></textarea>
        <div>
          <input 
            type="submit" 
            value="Send Registration" 
            class="z-20 uppercase text-black-primary bg-orange-primary px-10 py-3 rounded-3xl font-AntonRegular text-xl max-w-60 flex justify-center items-center hover:bg-gray-primary hover:text-light-primary hover:scale-105 ease-in transition-all w-full"
          />
        </div>
      </form>
      <div class="flex-1 h-96">
        <iframe
          class="w-full h-full rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508616!2d144.95592631531694!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577769ad68ff6fd!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1690358395918!5m2!1sen!2sau"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
  
  <section class="bg-black-gradient px-12 md:px-24 lg:px-44 py-5 md:py-8 mb-16 lg:mb-0 relative">
    <div class="absolute bottom-44 -right-[120px] block z-10">
      <img src="../assets/plus.svg">
    </div>
    <div class="w-full h-auto md:h-96 flex flex-col md:flex-row justify-between">
        <div class="bg-transparent p-5 text-center flex flex-col items-center md:border-r-2 md:border-gray-secondary w-full transform transition-transform duration-300 hover:rotate-2 hover:scale-105">
          <Icon icon="mdi:clock-outline" class="h-32 w-32 text-orange-primary mt-4" />
          <h4 class="text-4xl font-AntonRegular text-light-primary">Open Times</h4>
          <ul class="text-gray-secondary mt-2">
            <li>Monday: 8:00 - 21:00</li>
            <li>Tuesday: 8:00 - 21:00</li>
            <li>Wednesday: 8:00 - 21:00</li>
            <li>Thursday: 8:00 - 21:00</li>
            <li>Friday: 9:00 - 23:00</li>
            <li>Saturday: 9:00 - 23:00</li>
          </ul>
        </div>
        <div class="bg-transparent p-5 text-center flex flex-col items-center w-full  transform transition-transform duration-300 hover:rotate-2 hover:scale-105">
          <Icon icon="ic:outline-phone" class="h-32 w-32 text-orange-primary mt-4" />
          <h4 class="text-4xl font-AntonRegular text-light-primary">Email</h4>
          <span class="text-gray-secondary mt-2">+421 903 055 055</span>
        </div>
        <div class="bg-transparent p-5 text-center flex flex-col items-center w-full md:border-l-2 md:border-gray-secondary  transform transition-transform duration-300 hover:rotate-2 hover:scale-105">
          <Icon icon="mdi:address-marker-outline" class="h-32 w-32 text-orange-primary mt-4" />
          <h4 class="text-4xl font-AntonRegular text-light-primary">Address</h4>
          <span class="text-gray-secondary mt-2">Nova 64, Bánov, 941 01</span>
        </div>
      </div>
  </section>
</template>

