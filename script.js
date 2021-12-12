const navbarBtn = document.querySelector('.navbar__btn')
const navbarLinks = document.querySelector('.navbar__links')


navbarBtn.addEventListener('click', function(){
    let value = navbarLinks.classList.contains('navbar__collapse')
    if(value){
        navbarLinks.classList.remove('navbar__collapse')
        navbarBtn.classList.remove('change')
       
    }
    else{
        navbarLinks.classList.add('navbar__collapse')
        navbarBtn.classList.add('change')
      
    }
})
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const container = document.querySelector('.gallery-container');

let counter = 0;
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000, fill: "forwards"})
    if(counter===34){
        counter = 0
    }
    counter++;
    container.style.backgroundImage = `url(slide-${counter}.jpg)`
}
function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000, fill: "forwards"})
    if(counter===0){
        counter = 35
    }
    counter--;
    container.style.backgroundImage = `url(slide-${counter}.jpg)`
}