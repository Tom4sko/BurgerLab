<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuDetailView',
  props: {
      itemName: {
        type: String,
        require: true,
      },
      itemPrice: {
        type: String,
        require: true,
      },
      itemWeight: {
        type: String,
        require: true,
      },
      itemTime: {
        type: String,
        require: true,
      },
      itemMilk: {
        type: String,
        require: true,
      },
      itemDescription: {
        type: String,
        require: true,
      }
    },
  
});
</script>

<template>
  <div>
    <h1>Detail produktu: {{ itemName }}</h1>
    <h1>Cena: {{ itemPrice }}</h1>
    <p>Hmotnosť: {{ itemWeight }}g</p>
    <p>Čas prípravy: {{ itemTime }} min</p>
    <p>Mlieko: {{ itemMilk }}</p>
    <p>Popis: {{ itemDescription }}</p>
  </div>
</template>