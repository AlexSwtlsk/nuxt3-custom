<template>
  <Component
    :is="icon"
  />
</template>

<script setup lang="ts">
import * as solidImport from '@heroicons/vue/24/solid'
import * as outlineImport from '@heroicons/vue/24/outline'

interface Props {
  name: string
  outline?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  name: '',
  outline: false,
})

const icon = computed(() => {
  const localIcon = (props.outline ? outlineImport : solidImport)[props.name + 'Icon']
  return (localIcon ?? solidImport.QuestionMarkCircleIcon)
})
</script>
