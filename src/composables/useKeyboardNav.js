import { onMounted, onBeforeUnmount } from "vue";

export function useKeyboardNav(emits, formState) {
  function keyTest(e) {
    if (e.code === "ArrowLeft" && !formState.value.isFirstField) {
      emits("back");
    }

    if (e.code === "ArrowRight" && !formState.value.isLastField) {
      emits("next");
    }
  }

  onMounted(() => {
    window.addEventListener("keydown", keyTest);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("keydown", keyTest);
  });
}
