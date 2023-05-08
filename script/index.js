const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () =>{
    if(window.scrollY > 0 ){
        navbar.classList.add('scroll')
    }else{
        navbar.classList.remove('scroll')
    }
})

const redirectToPage = (link) =>{
    window.location.href=link
}