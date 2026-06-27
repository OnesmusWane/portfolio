<script setup lang="ts">
const props = defineProps<{ percent: number; colorClass: string; height?: string }>()
const ready = ref(false)
onMounted(() => nextTick(() => { ready.value = true }))
</script>

<template>
  <div
    class="transition-all duration-700 ease-out rounded-sm"
    :class="[props.colorClass, props.height ?? 'h-full']"
    :style="{ width: ready ? `${props.percent}%` : '0%' }"
  />
</template>
