const btnMobile = document.querySelector('#btn-mobile').addEventListener('click',toggleMenu)

function toggleMenu(event){
    const nav = document.querySelector('#nav')
  nav.classList.toggle('active');
}


