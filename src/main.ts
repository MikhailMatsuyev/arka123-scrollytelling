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
      
      <img class="hero__image hero__image--8"
       src="/photos/windows-1.png"
       alt="ARKA 123 windows" 
      />
      
      <img class="hero__image hero__image--9"
       src="/photos/windows-2.png"
       alt="ARKA 123 window view" 
      />
      
      <img class="hero__image hero__image--10"
       src="/photos/library.png"
       alt="View toward the National Library"
      />
      
      <div class="hero__character" aria-hidden="true"></div>

      <div class="hero__vignette" aria-hidden="true"></div>

      <div class="hero__label">
        <span>АРКА 123</span>
        <span>Встречаемся напротив Библиотеки.</span>
      </div>
    </div>
  </main>
`

const images = gsap.utils.toArray<HTMLElement>('.hero__image')

const depth = images.map((_, index) => {
  if (index <= 2) return 0.92
  if (index <= 4) return 0.96
  if (index <= 6) return 1
  if (index <= 8) return 1.04
  return 1.08
})

gsap.set(images, {
  transformOrigin: 'center center',
  force3D: true,
})

const cameraDepth = {
  exterior: 1,
  entrance: 1.15,
  reception: 1.2,
  interior: 1.25,
  windows: 1.15,
  library: 1.08,
}

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: () => window.innerWidth <= 768 ? '+=7000' : '+=10000',
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
    ease: 'none',
  })
  .to(images[1], {
    opacity: 1,
    scale: 1.03,
    xPercent: -2,
    duration: 0.8,
    ease: 'none',
  })
  .to(images[0], {
    opacity: 0,
    scale: 1.25,
    duration: 0.8,
    ease: 'none',
  }, '<')
  .to(images[1], {
    scale: 1.2,
    xPercent: 3,
    yPercent: -1,
    duration: 1.5,
    ease: 'none',
  })
  .to(images[2], {
    opacity: 1,
    scale: 1.03,
    xPercent: -2,
    duration: 0.8,
    ease: 'none',
  })
  .to(images[1], {
    opacity: 0,
    scale: 1.25,
    duration: 0.8,
    ease: 'none',
  }, '<')
  .to(images[2], {
    scale: 1.22,
    xPercent: 3,
    yPercent: -1,
    duration: 1.5,
    ease: 'none',
  })
  .to(images[3], {
    opacity: 1,
    scale: 1.02,
    xPercent: 0,
    duration: 1,
    ease: 'none',
  })
  .to(images[2], {
    opacity: 0,
    scale: 1.26,
    duration: 1,
    ease: 'none',
  }, '<')
  .to(images[3], {
    scale: 1.18,
    xPercent: 1,
    yPercent: -2,
    duration: 2,
    ease: 'none',
  })
  .to(images[4], {
    opacity: 1,
    scale: 1.02,
    xPercent: 0,
    duration: 1,
    ease: 'none',
  })
  .to(images[3], {
    opacity: 0,
    scale: 1.24,
    duration: 1,
    ease: 'none',
  }, '<')
  .to(images[4], {
    scale: 1.18,
    xPercent: 2,
    yPercent: -1,
    duration: 2,
    ease: 'none',
  })
  .to(images[5], {
    opacity: 1,
    scale: 1.02,
    xPercent: -1,
    duration: 1,
    ease: 'none',
  })
  .to(images[4], {
    opacity: 0,
    scale: 1.24,
    duration: 1,
    ease: 'none',
  }, '<')
  .to(images[5], {
    scale: 1.18,
    xPercent: 3,
    yPercent: -2,
    duration: 2,
    ease: 'none',
  })
  .to(images[6], {
    opacity: 1,
    scale: 1.05,
    xPercent: -2,
    duration: 1,
    ease: 'none',
  })
  .to(images[5], {
    opacity: 0,
    scale: 1.2,
    duration: 1,
    ease: 'none',
  }, '<')
  .to(images[6], {
    scale: 1.18,
    xPercent: 2,
    yPercent: -1,
    duration: 1,
    ease: 'none',
  })
  .to(images[7], {
    opacity: 1,
    scale: 1.05,
    xPercent: -2,
    duration: 1,
    ease: 'none',
  })
  .to(images[6], {
    opacity: 0,
    scale: 1.2,
    duration: 1,
    ease: 'none',
  }, '<')
  .to(images[7], {
    scale: 1.18,
    xPercent: 2,
    yPercent: -1,
    duration: 1,
    ease: 'none',
  })

  .to(images[8], {
    opacity: 1,
    scale: 1.04,
    xPercent: -1,
    duration: 1,
    ease: 'none',
  })
  .to(images[7], {
    opacity: 0,
    scale: 1.18,
    duration: 1,
    ease: 'none',
  }, '<')
  .to(images[8], {
    scale: 1.16,
    xPercent: 2,
    duration: 1,
    ease: 'none',
  })

  .to(images[9], {
    opacity: 1,
    scale: 1.03,
    xPercent: 0,
    duration: 1,
    ease: 'none',
  })
  .to(images[8], {
    opacity: 0,
    scale: 1.18,
    duration: 1,
    ease: 'none',
  }, '<')
  .to(images[9], {
    scale: 1.1,
    xPercent: 0,
    yPercent: -1,
    duration: 1.5,
    ease: 'none',
  })

