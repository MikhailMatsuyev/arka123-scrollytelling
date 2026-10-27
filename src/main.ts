import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="hero">
    <div class="hero__viewport">
      <img
        class="hero__image hero__image--1"
        src="/photos/exterior-1.png"
        alt="ARKA 123 exterior"
      />

      <img
        class="hero__image hero__image--2"
        src="/photos/exterior-2.png"
        alt="ARKA 123 windows"
      />

      <img
        class="hero__image hero__image--3"
        src="/photos/exterior-3.png"
        alt="ARKA 123 close view"
      />
      
      <img class="hero__image hero__image--4"
       src="/photos/entrance.png"
        alt="ARKA 123 entrance" 
      />
      
      <img class="hero__image hero__image--5"
       src="/photos/reception.png"
        alt="ARKA 123 reception" 
      />
      
      <img class="hero__image hero__image--6"
       src="/photos/interior-1.png"
        alt="ARKA 123 interior" 
      />
      
      <img class="hero__image hero__image--7"
       src="/photos/interior-2.png"
        alt="ARKA 123 interior view" 
      />

      <div class="hero__label">
        <span>АРКА 123</span>
        <span>Встречаемся напротив Библиотеки.</span>
      </div>
    </div>
  </main>
`

const images = gsap.utils.toArray<HTMLElement>('.hero__image')

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: '+=7000',
    scrub: true,
    pin: '.hero__viewport',
  },
})

timeline
  .set(images[0], {
    scale: 1.05,
    xPercent: -1,
    yPercent: -1,
  })
  .to(images[0], {
    scale: 1.2,
    xPercent: 2,
    yPercent: 0,
    duration: 1,
  })
  .to(images[1], {
    opacity: 1,
    scale: 1.05,
    xPercent: -2,
    duration: 0.8,
  })
  .to(images[0], {
    opacity: 0,
    duration: 0.7,
  }, '<')
  .to(images[1], {
    scale: 1.22,
    xPercent: 2,
    yPercent: -1,
    duration: 1,
  })
  .to(images[2], {
    opacity: 1,
    scale: 1.05,
    xPercent: -2,
    duration: 0.8,
  })
  .to(images[1], {
    opacity: 0,
    duration: 0.7,
  }, '<')
  .to(images[2], {
    scale: 1.2,
    xPercent: 2,
    yPercent: 0,
    duration: 1,
  })
  .to(images[3], {
    opacity: 1,
    scale: 1.08,
    xPercent: 0,
    duration: 1,
  })
  .to(images[2], {
    opacity: 0,
    scale: 1.22,
    duration: 1,
  }, '<')
  .to(images[3], {
    scale: 1.16,
    duration: 1,
  })
  .to(images[4], {
    opacity: 1,
    scale: 1.08,
    xPercent: 0,
    duration: 1,
  })
  .to(images[3], {
    opacity: 0,
    scale: 1.2,
    duration: 1,
  }, '<')
  .to(images[4], {
    scale: 1.16,
    xPercent: 1,
    duration: 1,
  })
  .to(images[5], {
    opacity: 1,
    scale: 1.06,
    xPercent: -1,
    duration: 1,
  })
  .to(images[4], {
    opacity: 0,
    scale: 1.2,
    duration: 1,
  }, '<')
  .to(images[5], {
    scale: 1.16,
    xPercent: 2,
    yPercent: -1,
    duration: 1,
  })
  .to(images[6], {
    opacity: 1,
    scale: 1.05,
    xPercent: -2,
    duration: 1,
  })
  .to(images[5], {
    opacity: 0,
    scale: 1.2,
    duration: 1,
  }, '<')
  .to(images[6], {
    scale: 1.18,
    xPercent: 2,
    yPercent: -1,
    duration: 1,
  })
