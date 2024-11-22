<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  emits: ['close'],
});
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]"
    @click.self="$emit('close')"
  >
    <div class="relative bg-white p-6 rounded-lg w-11/12 sm:w-1/3">
      <div class="flex justify-between items-center mb-4">
        <span @click="$emit('close')" class="text-orange-primary font-bold text-lg cursor-pointer">
          Close
        </span>
        <h2 class="text-xl font-bold text-center flex-1">{{ title }}</h2>
        <span class="w-[48px]"></span>
      </div>

      <div class="mb-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
