<template>
  <div style="width: 100%; position: fixed;">
    <FormProgress />
    <div class="nav">
      <div :class="{ 'disabled': formState.isFirstField }" class="form-button" @click="$emit('back')">
        <Icon icon="ep:arrow-up-bold" />
      </div>

      <div :class="{ 'disabled': formState.isLastField }" class="form-button" @click="$emit('next')">
        <Icon icon="ep:arrow-down-bold" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue'
import FormProgress from './FormProgress.vue'
import { Icon } from '@iconify/vue';

/**
 * Inject
 */
const formState = inject('formState')

</script>
