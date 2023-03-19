
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
let cards = document.querySelectorAll('.card');

//Mexer botão

menu.addEventListener('click', AnimateHamb)

function AnimateHamb() {
    span.classList.toggle('ativo')
    span.classList.toggle('invisivel')

}

//Scroll Menu Abrir/Fechar

menu.addEventListener('click', () => {
    if (span.classList.contains('ativo')) {
        menuBar.classList.remove('scroll-menu-sair')
        menuBar.classList.add('scroll-menu')
    } else {
        menuBar.classList.remove('scroll-menu')
        menuBar.classList.add('scroll-menu-sair')
    }
})


//Trocar Tema
function themeSwitch() {
    aside.classList.toggle('light-mode-medio')
    main.classList.toggle('light-mode-claro')
    header.classList.toggle('light-mode-escuro')
    footer.classList.toggle('light-mode-escuro')
    menuBar.classList.toggle('light-mode-menu')

    if (menuBar.classList.contains('light-mode-menu')) {
        span.style.setProperty('--colorSpan', '#000')
        seta.style.fill = "#000"

    } else {
        span.style.setProperty('--colorSpan', '#fff')
        seta.style.fill = "#fff"

    }

    cards.forEach(card => {
        if(card !== null){
            card.classList.toggle('light-mode-medio')
        }
    });


    if (about !== null) {
        about.classList.toggle('light-mode-escuro')
    }
    if (experience !== null) {
        experience.classList.toggle('light-mode-escuro')
    }

    
}

if (localStorage.getItem('tema') == undefined) {
    localStorage.setItem('tema', 'escuro')
}

if (localStorage.getItem('tema') == 'claro') {
    button.classList.add('button-right')
    containerSwitcher.style.backgroundColor = '#14a5ff'
    containerSwitcher.style.border = '2px solid #14a5ff'
    themeSwitch();
} else if (localStorage.getItem('tema') == 'escuro') {
    button.classList.add('button-left')
    containerSwitcher.style.backgroundColor = '#111'
    containerSwitcher.style.border = '2px solid #111'
}


function toggleButton() {
if((localStorage.getItem('tema') == 'claro') && (button.classList.contains('button-right')))  {
    button.classList.add('button-left')
    button.classList.remove('button-right')
    localStorage.setItem('tema', 'escuro')
    containerSwitcher.style.backgroundColor = '#111'
    containerSwitcher.style.border = '2px solid #111'
    themeSwitch()
}else if((localStorage.getItem('tema') == 'escuro') && (button.classList.contains('button-left')))  {
    button.classList.add('button-right')
    button.classList.remove('button-left')
    localStorage.setItem('tema', 'claro')
    containerSwitcher.style.backgroundColor = '#14a5ff'
    containerSwitcher.style.border = '2px solid #14a5ff'
    themeSwitch()
}
}