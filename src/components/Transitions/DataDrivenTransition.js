// Converted to Vue 3
import { h, Transition } from "vue";
const DataDrivenTransition = ({ isNext = true }, { slots }) => {
  const animClass = "animate__animated animate__";
  var props = {
    appear: true,
    name: "data-driven-transition",
    mode: "out-in",
    appearActiveClass: animClass + "fadeInUp",
    enterActiveClass: isNext
      ? animClass + "fadeInUp"
      : animClass + "fadeInDown",
    leaveActiveClass: isNext
      ? animClass + "fadeOutUp"
      : animClass + "fadeOutDown",
    duration: 1000,
  };
  return h(Transition, props, slots);
};
export default DataDrivenTransition;
