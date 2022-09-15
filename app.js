const cercle = document.querySelector('.cercle');
const imgs = document.querySelectorAll('span');

console.log(imgs);

const TL = gsap.timeline({paused:true});

// gsap.set peut modifier les propriétés des cibles

gsap.set(imgs, {scale: 0})

// on utilise gsap.timeline.to pour modifier les propriétés 

// ease : css transition 

TL
.to(imgs, {scale: 1, duration: 0.1, stagger: 0.25, ease: "elastic.out(1, 0.3)"});

cercle.addEventListener('mouseenter', ()=> {
    TL.play();
})
cercle.addEventListener('mouseout', () => {
    TL.reverse();
})