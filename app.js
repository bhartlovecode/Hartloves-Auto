console.log(firebase)

//Animation for menu button in navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    //Toggling the navigation
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

            //Animating the links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }

            else{
                link.style.animation = 
            `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');

    });


}


const app = ()=>{
    navSlide()
}

app()