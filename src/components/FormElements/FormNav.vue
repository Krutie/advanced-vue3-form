<template>
  <div style="width: 100%; position: fixed">
    <FormProgress />
    <div class="nav">
      <button
        type="button"
        :class="{ disabled: formState.isFirstField }"
        class="form-button"
        @click="$emit('back')"
        @keyup.page-up="$emit('back')"
      >
        <Icon icon="ep:arrow-up-bold" />
      </button>

      <button
        type="button"
        :class="{ disabled: formState.isLastField }"
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
import { inject } from "vue";
import FormProgress from "./FormProgress.vue";
import { Icon } from "@iconify/vue";

defineEmits(["back", "next"]);
/**
 * Inject
 */
const formState = inject("formState");
</script>
