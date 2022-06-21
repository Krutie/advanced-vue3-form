import { ref, computed } from "vue";

export function useForm(formLength) {
  /**
   * Returned
   * **/
  const formData = ref({});

  /**
   * Returned
   * **/
  const formState = ref({
    activeField: 0,
    valid: true,
    next: true,
    formLength: formLength,
    isLastField: computed(() => {
      return formState.value.activeField === formLength;
    }),
    isFirstField: computed(() => {
      return formState.value.activeField < 1;
    }),
    errorLength: 0,
  });

  /**
   * Returned
   * **/
  function validateField(value) {
    formState.value.valid = value;
  }

  /**
   * Returned
   * **/
  function onSubmit() {
    if (formState.value.errorLength > 0) {
      validateField(false);
    } else {
      validateField(true);
      next();
    }
  }

  /**
   * Returned
   * **/
  function back() {
    formState.value.next = false;
    formState.value.activeField--;
  }

  function next() {
    formState.value.next = true;
    formState.value.activeField++;
  }

  return {
    formData,
    formState,
    validateField,
    onSubmit,
    back,
  };
}
