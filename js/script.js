// variaveis botão hamburguer
let menu = document.querySelector('.menu')
let span = document.querySelector('span')
//variaveis menu
let menuBar = document.querySelector('.container-links-menu')
let linkAbout = document.querySelector('#link-about');
let linkProjects = document.querySelector('#link-projects');
let linkContact = document.querySelector('#link-contact');

//variaveis theme switcher
let button = document.querySelector('.button')
let containerSwitcher = document.querySelector('.container-button')

//variaveis das areas para serem trocadas pelo theme switcher
let aside = document.querySelector('aside')
let main = document.querySelector('main')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
let about = document.querySelector('#about')
let experience = document.querySelector('#experience')
let seta = document.querySelector('svg')
let card1 = document.querySelector('#card1')
let card2 = document.querySelector('#card2')
let card3 = document.querySelector('#card3') 

//Mexer botão

menu.addEventListener('click', AnimateHamb)

function AnimateHamb(){
    span.classList.toggle('ativo')
    span.classList.toggle('invisivel')
        
}

//Scroll Menu Abrir/Fechar

menu.addEventListener('click', () =>{
    if(span.classList.contains('ativo')){
        menuBar.classList.remove('scroll-menu-sair')
        menuBar.classList.add('scroll-menu')
    }else{
        menuBar.classList.remove('scroll-menu')
        menuBar.classList.add('scroll-menu-sair')
    }
})

//Se a página scrollar fechar menu
window.addEventListener('scroll', ()=>{
    if (menuBar.classList.contains('scroll-menu')){

        menuBar.classList.toggle('scroll-menu-sair')
        menuBar.classList.remove('scroll-menu')
        AnimateHamb();
    }
})



//Trocar Tema
function themeSwitch(){
    aside.classList.toggle('light-mode-medio')
    main.classList.toggle('light-mode-claro')
    header.classList.toggle('light-mode-escuro')
    footer.classList.toggle('light-mode-escuro')
    menuBar.classList.toggle('light-mode-menu')
    
    if(menuBar.classList.contains('light-mode-menu')){
        containerSwitcher.style.backgroundColor = '#14a5ff'
        containerSwitcher.style.border = '2px solid #14a5ff'
        span.style.setProperty('--colorSpan', '#000')
        seta.style.fill = "#000"

    }else{
        containerSwitcher.style.backgroundColor = '#111'
        containerSwitcher.style.border = '2px solid #111'
        span.style.setProperty('--colorSpan', '#fff')
        seta.style.fill = "#fff"

    }

    if(card1 !== null){
        card1.classList.toggle('light-mode-medio')
    }
    if(card2 !== null){
        card2.classList.toggle('light-mode-medio')
    }
    if(card3 !== null){
        card3.classList.toggle('light-mode-medio')
    }
    if(about !== null){
        about.classList.toggle('light-mode-escuro')
    }
    if(experience !== null){
        experience.classList.toggle('light-mode-escuro')
    }
}

function toggleButton(){
    if(button.classList.contains('button-right')){
        button.classList.toggle('button-left')
        button.classList.toggle('button-right')
        themeSwitch() 

    }else if(button.classList.contains('button-left')){
        button.classList.toggle('button-right')
        button.classList.toggle('button-left')
        themeSwitch()
    }
    else{
        button.classList.toggle('button-right')
        themeSwitch()
    }
  }
  



