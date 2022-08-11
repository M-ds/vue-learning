import { createApp, DirectiveBinding } from "vue";
import App from "./App.vue";

const app = createApp(App);

/**
 * Het is mogelijk om directives aan te passen op een lokaal niveau.
 * Dit kan via de options api. Dus bv
 * <p>
 * directives: {
 *  naamFunctie() {
 *    beforeMount(el: HTMLElement, binding: DirectiveBinding) {
 *      el.style.color = "purple";
 *    }
 *  }
 * }
 * <p>
 */

app.directive("purple", {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    el.style.color = "purple";
  },
});

app.directive("switching-color", {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    const modifiers = binding.modifiers;
    if (modifiers.underline) {
      el.style.textDecoration = "underline";
    }
    if (modifiers.textcenter) {
      el.style.textAlign = "center";
    }

    const speeds = {
      slow: 2000,
      normal: 1000,
      fast: 500,
      crazy: 100,
    };
    const speedName: string = binding.arg || "normal";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const speed = speeds[speedName];
    const colors = binding.value;
    let i = 0;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    el.interval = setInterval(() => {
      el.style.color = colors[i++];
      if (i > colors.length - 1) {
        i = 0;
      }
    }, speed);
  },
  /*
  Het is niet mogelijk om elementen door te sturen in verschillende hooks zoals beforeMount en beforeUnmount.
  Daarom zetten we een functie op het element.
   */
  beforeUnmount(el: HTMLElement) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    clearInterval(el.interval);
  },
});

app.mount("#app");
