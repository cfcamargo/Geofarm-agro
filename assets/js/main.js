const menuNavigation = document.querySelector('#menu-navigation')
const mobileButtonOpen = document.querySelector(".mobal-icon-open")
const mobileButtonClose = document.querySelector(".mobal-icon-close")

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