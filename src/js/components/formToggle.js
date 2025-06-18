import { gsap } from "gsap";

const formToggleInit = () => {
  const toggles = document.querySelectorAll(".contact_toggle");

  console.log("form toggle init");

  toggles.forEach((toggle) => {
    const options = toggle.querySelectorAll(".contact_toggle-option");

    if (!options) return;

    options.forEach((option) => {
      const observer = new MutationObserver(() => {
        const value = option.querySelector(".w-radio-input");

        if (value && value.classList.contains("w--redirected-checked")) {
          options.forEach((opt) => {
            opt.classList.remove("is-checked");
          });
          option.classList.add("is-checked");
        }
      });

      const target = option.querySelector(".w-radio-input");
      if (target) {
        observer.observe(target, {
          attributes: true,
          attributeFilter: ["class"],
        });
      }
    });
  });
};

export { formToggleInit };
