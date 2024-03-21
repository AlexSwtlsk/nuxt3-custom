<script lang="ts" setup>
defineComponent({
  name: 'IndexPage',
})

const testOutput = useRuntimeConfig().public.test
</script>

<template>
  <div>
    <p class="text-red-500 font-bold">It workds</p>
    <p>{{ testOutput }}</p>
    <button>test</button>
    <button>testdd</button>
    <AppIcon
      name="Bell"
      class="h-6 w-6"
    />
  </div>
</template>
