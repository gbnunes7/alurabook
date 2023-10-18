const botaoMenu2 = document.querySelector('.link__header--tablet')
const menu2 = document.querySelector('.container__nav--header')

botaoMenu2.addEventListener('click', () =>{
    menu2.classList.toggle('container__nav--header--ativo')
})
