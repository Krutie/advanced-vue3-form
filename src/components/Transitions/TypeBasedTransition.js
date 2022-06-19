// Converted to Vue 3
import { h, Transition } from "vue";

const TYPE_MAP = {
  fadeInOut: {
    enter: "fadeIn",
    leave: "fadeOut",
    duration: 650,
  },
  fadeUpDown: {
    enter: "fadeInUp",
    leave: "fadeOutDown",
    duration: 650,
  },
};

const TypeBasedTransition = ({ transitionType = "fadeUpDown" }, { slots }) => {
  let enterClass =
    "animate__animated animate__" + TYPE_MAP[transitionType].enter;
  let leaveClass =
    "animate__animated animate__" + TYPE_MAP[transitionType].leave;

  var props = {
    name: "type-based-transition",
    mode: "out-in",
    enterActiveClass: enterClass,
    leaveActiveClass: leaveClass,
    duration: TYPE_MAP[transitionType].duration,
  };
  // return the render function
  return h(Transition, props, slots);
};

export default TypeBasedTransition;
