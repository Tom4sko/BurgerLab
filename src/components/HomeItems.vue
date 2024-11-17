<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeItems',
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="w-24 lg:w-36 h-24 lg:h-36 bg-gray-primary rounded-lg p-2 border-2 border-gray-secondary z-10">
    <img :src="imgUrl" alt="Burger" class="w-full h-full object-cover rounded-lg hover:scale-150 transition-all">
  </div>
</template>
