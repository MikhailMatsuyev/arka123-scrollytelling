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
    end: '+=3000',
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
