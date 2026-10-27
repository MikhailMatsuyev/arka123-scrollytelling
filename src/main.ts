import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

app.innerHTML = `
  <main class="hero">
    <div class="hero__viewport">
      <div class="hero__scene">
        <img
          class="hero__image hero__image--1"
          src="/photos/exterior-1.webp"
          alt="ARKA 123 exterior"
        />

        <img
          class="hero__image hero__image--2"
          src="/photos/exterior-2.webp"
          alt=""
        />

        <img
          class="hero__image hero__image--3"
          src="/photos/exterior-3.webp"
          alt=""
        />
      </div>

      <div class="hero__label">
        <span>АРКА 123</span>
      </div>
    </div>
  </main>
`

const scene = document.querySelector<HTMLElement>('.hero__scene')
const image1 = document.querySelector<HTMLImageElement>('.hero__image--1')
const image2 = document.querySelector<HTMLImageElement>('.hero__image--2')
const image3 = document.querySelector<HTMLImageElement>('.hero__image--3')

if (!scene || !image1 || !image2 || !image3) {
  throw new Error('Hero elements not found')
}

gsap.set(image2, { opacity: 0 })
gsap.set(image3, { opacity: 0 })

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
  .to(image1, {
    scale: 1.12,
    xPercent: -2,
    yPercent: -1,
    duration: 1,
    ease: 'none',
  })
  .to(image2, {
    opacity: 1,
    scale: 1.04,
    duration: 0.8,
    ease: 'none',
  })
  .to(image1, {
    opacity: 0,
    duration: 0.35,
    ease: 'none',
  })
  .to(image2, {
    scale: 1.16,
    xPercent: -2,
    yPercent: -1,
    duration: 1,
    ease: 'none',
  })
  .to(image3, {
    opacity: 1,
    scale: 1.03,
    duration: 0.8,
    ease: 'none',
  })
  .to(image2, {
    opacity: 0,
    duration: 0.35,
    ease: 'none',
  })
  .to(image3, {
    scale: 1.14,
    xPercent: -2,
    yPercent: -1,
    duration: 1,
    ease: 'none',
  })
