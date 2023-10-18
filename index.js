const botaoMenu = document.querySelector('.menu__header')
const menu = document.querySelector('.container__nav--header')

botaoMenu.addEventListener('click', () =>{
    menu.classList.toggle('container__nav--header--ativo')
})
