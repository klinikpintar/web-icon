<script setup lang="ts">
import Icons from './index'
</script>

<template>
  <div class="p-4">
    <h3 class="border-b mb-4 pb-2">Icon Set</h3>
    <div class="grid grid-cols-10 gap-4">
      <div v-for="key in Object.keys(Icons)" class="border rounded flex flex-col">
        <div class="grow flex items-center justify-center bg-gray-100 py-2">
          <component :is="`Icon${key}`" width="50" class="fill-primary"/>
        </div>
        <div class="text-xs text-center border-t px-2 py-2">{{ key }}</div>
      </div>
    </div>
  </div>
</template>
