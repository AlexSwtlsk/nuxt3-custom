<template>
  <Component
    :is="icon"
  />
</template>

<script setup lang="ts">
import * as solid from '@heroicons/vue/solid/index.js'
import * as outline from '@heroicons/vue/outline/index.js'

const props = defineProps({
  name: {
    type: String,
    default: null,
    validator: (value: string) => value && !value.toLowerCase().includes('icon'),
  },
  outline: { type: Boolean, default: false },
})

const icon = computed(() => {
  const localIcon = (props.outline ? outline : solid)[props.name + 'Icon']
  return localIcon ?? solid.QuestionMarkCircleIcon
})
</script>
