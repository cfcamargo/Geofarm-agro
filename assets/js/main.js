const menuNavigation = document.querySelector('#menu-navigation')
const mobileButtonOpen = document.querySelector(".mobal-icon-open")
const mobileButtonClose = document.querySelector(".mobal-icon-close")
const modalClose = document.querySelector('#modal-icon-close')
const modal = document.querySelector('.modal')
const openModal = document.querySelector('#modal')


mobileButtonOpen.addEventListener('click', ()=>{
    menuNavigation.classList.add('show')
    setTimeout(()=>{
        mobileButtonClose.classList.add('show')
    },300)
})

mobileButtonClose.addEventListener('click', ()=>{
    menuNavigation.classList.remove('show')
    mobileButtonClose.classList.remove('show')
})


const links = document.querySelectorAll('#menu-navigation li a');
for(const link of links){
    link.addEventListener('click', () => {
        menuNavigation.classList.remove('show')
        mobileButtonClose.classList.remove('show')
    })
};



// adicionando efeito scrool
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
const menuLogo = document.querySelector('#geo-logo')
function changeHeaderOnScroll() {

    if (window.scrollY >= navHeight){
        // scroll e maior q a altura do header
        header.classList.add('scroll')
        menuLogo.setAttribute('src', './assets/images/logos/geo_blue.png')

    } else {
        // scroll e menor q a altura do header
        header.classList.remove('scroll')
        menuLogo.setAttribute('src', './assets/images/logos/geo_white.png')


    }
}

openModal.addEventListener('click', ()=>{
    modal.classList.add('show')
})


modalClose.addEventListener('click', ()=>{
    modal.classList.remove('show')
})




window.addEventListener('scroll', () => {
    changeHeaderOnScroll()
});