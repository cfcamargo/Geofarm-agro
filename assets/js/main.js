const menuNavigation = document.querySelector('#menu-navigation')
const mobileButtonOpen = document.querySelector(".mobal-icon-open i")
const mobileButtonClose = document.querySelector(".mobal-icon-close")


// abrir e fechar menu mobile
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



//fechar menu mobile ao clicar em algum link
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



// modal de certificado
const modalClose = document.querySelector('#modal-icon-close')
const modal = document.querySelector('.modal')
const openModalButton = document.querySelector('#modal')
openModalButton.addEventListener('click', ()=>{
    modal.classList.add('show')
})


modalClose.addEventListener('click', ()=>{
    modal.classList.remove('show')
})




window.addEventListener('scroll', () => {
    changeHeaderOnScroll()
});



// Configuração da biblioteca swipper para o slide

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  // Faq 

  const faqs = document.querySelectorAll('.faq')

  faqs.forEach(faq => {
      faq.addEventListener('click', ()=>{
          faq.classList.toggle('active')
      })
  })


  const copy = document.querySelector('#copy')

  const data = new Date()
  year = data.getFullYear()

  copy.innerHTML = `<i><img src="/assets/images/faveicon.ico" alt="Logo"></i>© Copyright 2010 - ${year} Geofarm Agricultura de Precisão LTDA`
  


