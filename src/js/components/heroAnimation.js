import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { lenis } from ".";

gsap.defaults({ duration: 0.3, ease: "expo.inOut" });

const heroAnimation = () => {
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);
  const overlay = document.querySelector(".overlay");
  const heroCaption = SplitText.create(".hero_caption-wrapper");
  const heroTitle = SplitText.create(".hero_heading-1");
  const titleLine1 = heroTitle.lines[0];
  const titleLine2 = heroTitle.lines[1];
  const buttonsWrapper = document.querySelector(".hero_buttons-wrapper");
  const heroShowreel = document.querySelector(".hero_lighbox");
  const heroShowreelCaption = document.querySelector(".hero_showreel-caption");

  const heroSection = document.querySelector(".section_hero");

  const tl = gsap.timeline(); // main timeline
  const scrollTl = gsap.timeline({ paused: true }); // additional timeline, related to hero only

  scrollTl.to(titleLine1, { x: "100%", ease: "linear" }, 0);
  scrollTl.to(titleLine2, { x: "200%", ease: "linear" }, 0);
  scrollTl.to(
    [heroShowreel, heroShowreelCaption],
    { x: "-40vw", ease: "linear" },
    0
  );

  tl.set([heroShowreel, heroShowreelCaption], {
    opacity: 0,
    x: "105%",
  });
  tl.set(buttonsWrapper.children, { opacity: 0, x: "-100%" });
  tl.set(heroCaption.words, { opacity: 0 });
  tl.set([titleLine1, titleLine2], { overflow: "hidden" });
  tl.set([titleLine1, titleLine2], { y: "210%", opacity: 0 });

  ScrollTrigger.create({
    trigger: heroSection,
    start: "top top",
    end: "bottom top",
    scrub: true,
    animation: scrollTl,
  });

  tl.to(overlay, { opacity: 0, display: "none" });
  tl.to([heroCaption.words], { opacity: 1, stagger: 0.25, duration: 0.4 });
  tl.to([titleLine1, titleLine2], {
    y: "0%",
    opacity: 1,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.4,
  });
  tl.to([heroShowreel, heroShowreelCaption], {
    opacity: 1,
    x: "0%",
    duration: 0.5,
    delay: 0.3,
    ease: "expo.out",
  });
  tl.to(
    [buttonsWrapper.children],
    {
      x: "0%",
      opacity: 1,
      stagger: -0.15,
    },
    "<"
  );
};

export { heroAnimation };
