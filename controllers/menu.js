const btnMobile = document.querySelector('#btn-mobile').addEventListener('click',(event) =>{
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('#nav')
  nav.classList.toggle('active');
})



