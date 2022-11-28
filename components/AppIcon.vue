<template>
  <Component
    :is="icon"
  />
</template>

<script setup lang="ts">
import * as solid from '@heroicons/vue/24/solid/index'
import * as outline from '@heroicons/vue/24/outline/index'

interface Props {
  name: string
  outline?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  name: '',
  outline: false,
})

const icon = computed(() => {
  const localIcon = (props.outline ? outline : solid)[props.name + 'Icon']
  return (localIcon ?? solid.QuestionMarkCircleIcon)
})
</script>
