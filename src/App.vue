<script setup lang="ts">
import { groupBy, filter } from 'lodash'
import { ref, computed } from 'vue'
import Icons from './index'
const search = ref(null)
const color = ref('primary')
const grouped = groupBy(Icons, 'group')
const filtered = computed(() => {
  let results = []
  if (search.value) {
    results = filter(Icons, (icon) => {
      return icon.name.toLowerCase().includes(search.value.toLowerCase()) ||
        icon.group.toLowerCase().includes(search.value.toLowerCase())
    })
  }
  return results
})
</script>

<template>
  <div class="p-4">
    <h3 class="border-b mb-4 pb-2 flex items-center place-content-between">
      <strong>Klinikpintar WEB Icons</strong>
      <input v-model="search" type="text" class="border rounded-sm px-2 py-1" placeholder="Pencarian"/>
      <div class="flex items-center">
        <span>Color:</span>
        <select v-model="color" class="border rounded-sm px-2 ml-2">
          <option value="primary" selected>Primary</option>
          <option value="red-500">Red</option>
          <option value="green-500">Green</option>
          <option value="blue-500">Blue</option>
          <option value="yellow-500">Yellow</option>
        </select>
      </div>
    </h3>
    <template v-if="search">
      <div v-if="!filtered.length" class="text-center text-gray-400 pt-10">No icon found</div>
      <template v-else>
        <div class="grid grid-cols-10 gap-4 mb-4">
          <div v-for="icon in filtered" class="border rounded flex flex-col">
            <div class="grow flex items-center justify-center bg-gray-100 py-2">
              <component :is="`Icon${icon.name}`" :class="`text-${color}`"/>
            </div>
            <div class="text-xs text-center border-t px-2 py-2" v-html="icon.name.replace(search, '<mark>' + search + '</mark>')"/>
          </div>
        </div>
      </template>
    </template>
    <template v-else>
      <div v-for="group in Object.keys(grouped)">
        <div class="border-b mb-4 pb-2">{{ group }}</div>
        <div class="grid grid-cols-10 gap-4 mb-4">
          <div v-for="icon in Object.values(grouped[group])" class="border rounded flex flex-col">
            <div class="grow flex items-center justify-center bg-gray-100 py-2">
              <component :is="`Icon${icon.name}`" :class="`text-${color}`"/>
            </div>
            <div class="text-xs text-center border-t px-2 py-2">{{ icon.name }}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
