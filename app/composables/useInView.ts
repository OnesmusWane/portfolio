export function useInView(threshold = 0.15) {
  const target = ref<HTMLElement | null>(null)
  const isInView = ref(false)

  onMounted(() => {
    if (!target.value) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isInView.value = true
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(target.value)
  })

  return { target, isInView }
}
