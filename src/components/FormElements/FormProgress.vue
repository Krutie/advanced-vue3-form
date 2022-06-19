<template>
  <div class="bar" />
</template>
<script setup>
import { inject, computed, watch } from "vue";
import gsap from "gsap";

/**
 * Inject
 */
const formState = inject("formState");

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
  let el = document.getElementsByClassName("bar");
  let tl = gsap.timeline();
  tl.to(el, {
    duration: 1,
    width: newVal + "%",
  });
});
</script>
