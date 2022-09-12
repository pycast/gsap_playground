const cercle = document.querySelector('.cercle');
const imgs = document.querySelectorAll('span');

console.log(imgs);

const TL = gsap.timeline({paused:true});

TL
.to(imgs, {scale: 1, duration: 0.1, stagger: 0.25, ease: "elastic.out(1, 0.3)"});

cercle.addEventListener('mouseenter', ()=> {
    TL.play();
})
cercle.addEventListener('mouseout', () => {
    TL.reverse();
})