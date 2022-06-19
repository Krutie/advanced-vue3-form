<template>
  <div style="width: 100%; position: fixed">
    <FormProgress />
    <div class="nav">
      <button
        type="button"
        :class="{ disabled: isFirstField }"
        class="form-button"
        @click="$emit('back')"
        @keyup.page-up="$emit('back')"
      >
        <Icon icon="ep:arrow-up-bold" />
      </button>

      <button
        type="button"
        :class="{ disabled: isLastField }"
        class="form-button"
        @click="$emit('next')"
        @keyup.page-down="$emit('next')"
      >
        <Icon icon="ep:arrow-down-bold" />
      </button>
    </div>
  </div>
</template>
<script setup>
import FormProgress from "./FormProgress.vue";
import { Icon } from "@iconify/vue";

defineEmits(["back", "next"]);

defineProps({
  isFirstField: {
    type: Boolean,
    default: true,
  },
  isLastField: {
    type: Boolean,
    default: false,
  },
});
</script>
