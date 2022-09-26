<script setup lang="ts">
import { ref } from 'vue'
import Icons from './index'
const color = ref('primary')
</script>

<template>
  <div class="p-4">
    <h3 class="border-b mb-4 pb-2 flex place-content-between">
      Icon Set
      <select v-model="color" class="border rounded-sm px-2">
        <option value="primary" selected>Primary</option>
        <option value="red-500">Red</option>
        <option value="green-500">Green</option>
        <option value="blue-500">Blue</option>
        <option value="yellow-500">Yellow</option>
      </select>
    </h3>
    <div class="grid grid-cols-10 gap-4">
      <div v-for="key in Object.keys(Icons)" class="border rounded flex flex-col">
        <div class="grow flex items-center justify-center bg-gray-100 py-2">
          <component :is="`Icon${key}`" :class="`text-${color}`"/>
        </div>
        <div class="text-xs text-center border-t px-2 py-2">{{ key }}</div>
      </div>
    </div>
  </div>
</template>
