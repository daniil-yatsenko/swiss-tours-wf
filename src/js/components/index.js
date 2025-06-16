// import { exampleComponent } from "./exampleComponent.js";
import { lenisInit } from "../global/lenis";
import { heroAnimation } from "./heroAnimation";
import { overviewAnimation } from "./overviewAnimation";

const lenis = lenisInit();
export { lenis };

export const componentsInit = (page = document) => {
  lenis.resize();
  heroAnimation();
  overviewAnimation();
  console.log("components init");
};

// needed only with Barba.js
export const componentsCleanup = (page = document) => {
  console.log("components cleanup");
};
