import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="hero">
    <div class="hero__viewport">
      <img
        class="hero__image hero__image--1"
        src="${import.meta.env.BASE_URL}photos/exterior-1.png"
        alt="ARKA 123 exterior"
      />

      <img
        class="hero__image hero__image--2"
        src="${import.meta.env.BASE_URL}photos/exterior-2.png"
        alt="ARKA 123 windows"
      />

      <img
        class="hero__image hero__image--3"
        src="${import.meta.env.BASE_URL}photos/exterior-3.png"
        alt="ARKA 123 close view"
      />
      
      <img class="hero__image hero__image--4"
       src="${import.meta.env.BASE_URL}photos/entrance.png"
        alt="ARKA 123 entrance" 
      />
      
      <img class="hero__image hero__image--5"
       src="${import.meta.env.BASE_URL}photos/reception.png"
       alt="ARKA 123 reception" 
      />
      
      <img class="hero__image hero__image--6"
       src="${import.meta.env.BASE_URL}photos/interior-1.png"
       alt="ARKA 123 interior" 
      />
      
      <img class="hero__image hero__image--7"
       src="${import.meta.env.BASE_URL}photos/interior-2.png"
       alt="ARKA 123 interior view" 
      />
      
      <img class="hero__image hero__image--8"
       src="${import.meta.env.BASE_URL}photos/windows-1.png"
       alt="ARKA 123 windows" 
      />
      
      <img class="hero__image hero__image--9"
       src="${import.meta.env.BASE_URL}photos/windows-2.png"
       alt="ARKA 123 window view" 
      />
      
      <img class="hero__image hero__image--10"
       src="${import.meta.env.BASE_URL}photos/library.png"
       alt="View toward the National Library"
      />
      
      <img class="hero__character"
        src="${import.meta.env.BASE_URL}characters/hero-welcome.png"
        alt=""
        aria-hidden="true"
      />

      <div class="hero__vignette" aria-hidden="true"></div>

      <div class="hero__label">
        <span>АРКА 123</span>
        <span>Встречаемся напротив Библиотеки.</span>
      </div>
    </div>
  </main>
`;

const images = gsap.utils.toArray<HTMLElement>(".hero__image");

gsap.set(images, {
  transformOrigin: "center center",
  force3D: true,
});

gsap.set('.hero__character', {
  y: 30,
  force3D: true,
})

images.forEach((image, index) => {
  gsap.set(image, {
    xPercent: index % 2 === 0 ? -1 : 1,
    yPercent: index < 5 ? 0 : -1,
  });
});

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: () => (window.innerWidth <= 768 ? "+=7000" : "+=10000"),
    scrub: true,
    pin: ".hero__viewport",
  },
});

timeline
  .set(images[0], {
    scale: 1.05,
    xPercent: -1,
    yPercent: -1,
  })
  .to(images[0], {
    scale: 1.2,
    xPercent: 1,
    yPercent: 0,
    duration: 1,
    ease: "none",
  })
  .to(images[1], {
    opacity: 1,
    scale: 0.98,
    xPercent: -1,
    duration: 0.8,
    ease: "none",
  })
  .to(
    images[0],
    {
      opacity: 0,
      scale: 1.25,
      duration: 0.8,
      ease: "none",
    },
    "<",
  )
  .to(images[1], {
    scale: 1.2,
    xPercent: 1.5,
    yPercent: -1,
    duration: 1.5,
    ease: "none",
  })
  .to(images[2], {
    opacity: 1,
    scale: 0.98,
    xPercent: -1,
    duration: 0.8,
    ease: "none",
  })
  .to(
    images[1],
    {
      opacity: 0,
      scale: 1.25,
      duration: 0.8,
      ease: "none",
    },
    "<",
  )
  .to(images[2], {
    scale: 1.22,
    xPercent: 1.5,
    yPercent: -1,
    duration: 1.5,
    ease: "none",
  })
  .to(images[3], {
    opacity: 1,
    scale: 0.96,
    xPercent: 0,
    duration: 1,
    ease: "none",
  })
  .to(
    images[2],
    {
      opacity: 0,
      scale: 1.3,
      duration: 1,
      ease: "none",
    },
    "<",
  )
  .to(images[3], {
    scale: 1.2,
    xPercent: 0.5,
    yPercent: -2,
    duration: 2,
    ease: "none",
  })
  .to('.hero__character', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'none',
  })
  .to('.hero__character', {
    y: -4,
    duration: 1.2,
    ease: 'none',
  })
  .to(images[4], {
    opacity: 1,
    scale: 0.96,
    xPercent: 0,
    duration: 1,
    ease: "none",
  })
  .to(
    images[3],
    {
      opacity: 0,
      scale: 1.28,
      duration: 1,
      ease: "none",
    },
    "<",
  )
  .to(images[4], {
    scale: 1.18,
    xPercent: 0.5,
    yPercent: -1,
    duration: 2,
    ease: "none",
  })
  .to(images[5], {
    opacity: 1,
    scale: 0.97,
    xPercent: -0.5,
    duration: 1,
    ease: "none",
  })
  .to(
    images[4],
    {
      opacity: 0,
      scale: 1.27,
      duration: 1,
      ease: "none",
    },
    "<",
  )
  .to(images[5], {
    scale: 1.17,
    xPercent: 0.5,
    yPercent: -1,
    duration: 2,
    ease: "none",
  })
  .to(images[6], {
    opacity: 1,
    scale: 0.98,
    xPercent: -0.5,
    duration: 1,
    ease: "none",
  })
  .to(
    images[5],
    {
      opacity: 0,
      scale: 1.22,
      duration: 1,
      ease: "none",
    },
    "<",
  )
  .to(images[6], {
    scale: 1.16,
    xPercent: 0.5,
    yPercent: -1,
    duration: 1.5,
    ease: "none",
  })
  .to(images[7], {
    opacity: 1,
    scale: 0.97,
    xPercent: -0.5,
    duration: 1,
    ease: "none",
  })
  .to(
    images[6],
    {
      opacity: 0,
      scale: 1.22,
      duration: 1,
      ease: "none",
    },
    "<",
  )
  .to(images[7], {
    scale: 1.15,
    xPercent: 0,
    yPercent: -1,
    duration: 1.5,
    ease: "none",
  })

  .to(images[8], {
    opacity: 1,
    scale: 0.98,
    xPercent: -0.25,
    duration: 1,
    ease: "none",
  })
  .to(
    images[7],
    {
      opacity: 0,
      scale: 1.2,
      duration: 1,
      ease: "none",
    },
    "<",
  )
  .to(images[8], {
    scale: 1.12,
    xPercent: 0,
    yPercent: -0.5,
    duration: 1.5,
    ease: "none",
  })

  .to(images[9], {
    opacity: 1,
    scale: 0.98,
    xPercent: 0,
    duration: 1.2,
    ease: "none",
  })
  .to(
    images[8],
    {
      opacity: 0,
      scale: 1.18,
      duration: 1.2,
      ease: "none",
    },
    "<",
  )
  .to(images[9], {
    scale: 1.08,
    xPercent: 0,
    yPercent: -0.5,
    duration: 2,
    ease: "none",
  });
