const tl = gsap.timeline();

gsap.set(".content", {
    opacity: 0,
    y: '100vh'
})

gsap.set(".overflow div", {
    yPercent: '103'
})

gsap.set(".navbar", {
    y: '-100px',
    opacity: 0
})

tl.to(".loader", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    top: 0,
    duration: 3,
    ease: 'power4.inOut'
})
.to(".content", {
    opacity: 1,
    y: 0,
    duration: 1.3,
    ease: 'expo.Out'
}, '-=1.3')
.to(".overflow div", {
    yPercent: 0,
    duration: 0.5,
    stagger: 0.1,
}, '-=0.4')
.to(".navbar", {
    y: 0,
    opacity: 1
}, '-=0.4')
