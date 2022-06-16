<template>
  <div>
    <FormProgress />
    <div class="nav">
      <div :class="{ 'disabled': formState.isFirst }" class="form-button" @click="$emit('back')">
        <Icon icon="ep:arrow-up-bold" />
      </div>

      <div :class="{ 'disabled': formState.isLast }" class="form-button" @click="$emit('next')">
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
