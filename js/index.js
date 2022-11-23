import { areas } from "../mocks/mocks.js"

const publico = document.querySelector(".dPublico");
const eleitoral = document.querySelector(".dEleitoral");
const trabalho = document.querySelector(".dTrabalho");
const penal = document.querySelector(".dPenal");
const text = document.querySelector(".text");

const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");
const logo = document.querySelector(".logo");
const exit = document.querySelector(".exit");

const links = document.querySelectorAll(".link");

const menuScroll = document.querySelector(".menu-scroll")

function criaDescricao(titulo) {
    let notices = [document.createElement("h1"), document.createElement("p")]

    notices[0].innerHTML = areas[areas.findIndex(u => u.titulo == titulo)].titulo;
    notices[1].innerHTML = areas[areas.findIndex(u => u.titulo == titulo)].conteudo;

    notices.map((notice) => {
        text.appendChild(notice);
    })
}

text.innerHTML = "";

if (eleitoral.classList.contains("selected")) eleitoral.classList.remove("selected")
if (trabalho.classList.contains("selected")) trabalho.classList.remove("selected")
if (penal.classList.contains("selected")) penal.classList.remove("selected")

publico.classList.add("selected")

criaDescricao("Direito Público");

publico.addEventListener("click", (e) => {
    text.innerHTML = "";

    if (eleitoral.classList.contains("selected")) eleitoral.classList.remove("selected")
    if (trabalho.classList.contains("selected")) trabalho.classList.remove("selected")
    if (penal.classList.contains("selected")) penal.classList.remove("selected")

    publico.classList.add("selected")

    criaDescricao("Direito Público");
})

eleitoral.addEventListener("click", (e) => {
    text.innerHTML = "";

    if (publico.classList.contains("selected")) publico.classList.remove("selected")
    if (trabalho.classList.contains("selected")) trabalho.classList.remove("selected")
    if (penal.classList.contains("selected")) penal.classList.remove("selected")

    eleitoral.classList.add("selected")
    criaDescricao("Direito Eleitoral");
})


trabalho.addEventListener("click", (e) => {
    text.innerHTML = "";

    if (publico.classList.contains("selected")) publico.classList.remove("selected")
    if (eleitoral.classList.contains("selected")) eleitoral.classList.remove("selected")
    if (penal.classList.contains("selected")) penal.classList.remove("selected")

    trabalho.classList.add("selected")

    criaDescricao("Direito Civil");
})


penal.addEventListener("click", (e) => {
    text.innerHTML = "";

    if (publico.classList.contains("selected")) publico.classList.remove("selected")
    if (eleitoral.classList.contains("selected")) eleitoral.classList.remove("selected")
    if (trabalho.classList.contains("selected")) trabalho.classList.remove("selected")

    penal.classList.add("selected")

    criaDescricao("Direito Trabalhista");
})

menu.addEventListener("click", (e) => {
    e.preventDefault();
    menuList.classList.remove("remove");
    menu.classList.remove("active");
    logo.classList.remove("active");
    menuList.classList.add("active");
    menu.classList.add("remove");
    logo.classList.add("remove");
})

exit.addEventListener("click", (e) => {
    e.preventDefault();
    menuList.classList.remove("active");
    menu.classList.remove("remove");
    logo.classList.remove("remove");
    menuList.classList.add("remove");
    menu.classList.add("active");
    logo.classList.add("active");
})

for (let link of links) {
    link.addEventListener("click", (e) => {
        menuList.classList.remove("active");
        menu.classList.remove("remove");
        logo.classList.remove("remove");
        menuList.classList.add("remove");
        menu.classList.add("active");
        logo.classList.add("active");
    })
}

$('#team').owlCarousel({
    loop: false,
    nav: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

$('#notices').owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})


$(function () {
    var nav = $('.menu-scroll');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            nav.removeClass("remove");
            $('body').css('padding-top', 70);
        } else {
            nav.addClass("remove");
            $('body').css('padding-top', 0);
        }
    });
});