import { onMounted, onBeforeUnmount } from "vue";

export function useKeyboardNav(emits, formState) {
  function handleKeyPress(e) {
    if (e.code === "ArrowLeft" && !formState.value.isFirstField) {
      emits("back");
    }

    if (e.code === "ArrowRight" && !formState.value.isLastField) {
      emits("next");
    }
  }

  onMounted(() => {
    window.addEventListener("keydown", handleKeyPress);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeyPress);
  });
}
