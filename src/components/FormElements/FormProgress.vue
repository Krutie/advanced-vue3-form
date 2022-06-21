<template>
  <div class="bar" ref="bar" />
</template>
<script setup>
import { ref, inject, computed, watch } from "vue";
import gsap from "gsap";

const bar = ref(null);

/**
 * Inject
 */
const { formState } = inject("vueform");

/**
 * Computed percent of the form completion
 */
const percent = computed(() => {
  return (formState.value.activeField / formState.value.formLength) * 100;
});

/**
 * Watch for changes in completion-percent over time
 */
watch(percent, (newVal) => {
  let tl = gsap.timeline();
  tl.to(bar.value, {
    duration: 1,
    width: newVal + "%",
  });
});
</script>
