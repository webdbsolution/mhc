const public = document.querySelector(".dPublico");
const eleitoral = document.querySelector(".dEleitoral");
const trabalho = document.querySelector(".dTrabalho");
const penal = document.querySelector(".dPenal");
const text = document.querySelector(".text");

const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");
const logo = document.querySelector(".logo");
const exit = document.querySelector(".exit");

const links = document.querySelectorAll(".link");


text.innerHTML = "";

if (eleitoral.classList.contains("selected")) eleitoral.classList.remove("selected")
if (trabalho.classList.contains("selected")) trabalho.classList.remove("selected")
if (penal.classList.contains("selected")) penal.classList.remove("selected")

public.classList.add("selected")

let notices = [document.createElement("h1"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")]

notices[0].innerHTML = "Direito Público";
notices[1].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, id sapiente laudantium quo iusto maxime facere! Sapiente sunt facilis consectetur sequi, dolorum molestiae illum pariatur cumque. Corrupti saepe distinctio modi.";
notices[2].innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minima similique tempora. Totam, similique doloremque? Tenetur, quibusdam ratione! Dolore nesciunt iste quos labore maxime sequi omnis blanditiis hic iusto laborum!";
notices[3].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat nobis adipisci earum recusandae iure possimus porro. Possimus quod illum voluptates, vel minima dolore, error quia dolor enim necessitatibus ipsa?";
notices[4].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis maxime labore libero autem aperiam necessitatibus alias expedita blanditiis nemo voluptas nisi doloribus atque, esse saepe repellendus quae quia molestias.";

notices.map((notice) => {
    text.appendChild(notice);
})

public.addEventListener("click", (e) => {
    text.innerHTML = "";

    if (eleitoral.classList.contains("selected")) eleitoral.classList.remove("selected")
    if (trabalho.classList.contains("selected")) trabalho.classList.remove("selected")
    if (penal.classList.contains("selected")) penal.classList.remove("selected")

    public.classList.add("selected")

    let notices = [document.createElement("h1"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")]

    notices[0].innerHTML = "Direito Público";
    notices[1].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, id sapiente laudantium quo iusto maxime facere! Sapiente sunt facilis consectetur sequi, dolorum molestiae illum pariatur cumque. Corrupti saepe distinctio modi.";
    notices[2].innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minima similique tempora. Totam, similique doloremque? Tenetur, quibusdam ratione! Dolore nesciunt iste quos labore maxime sequi omnis blanditiis hic iusto laborum!";
    notices[3].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat nobis adipisci earum recusandae iure possimus porro. Possimus quod illum voluptates, vel minima dolore, error quia dolor enim necessitatibus ipsa?";
    notices[4].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis maxime labore libero autem aperiam necessitatibus alias expedita blanditiis nemo voluptas nisi doloribus atque, esse saepe repellendus quae quia molestias.";

    notices.map((notice) => {
        text.appendChild(notice);
    })
})

eleitoral.addEventListener("click", (e) => {
    text.innerHTML = "";

    if (public.classList.contains("selected")) public.classList.remove("selected")
    if (trabalho.classList.contains("selected")) trabalho.classList.remove("selected")
    if (penal.classList.contains("selected")) penal.classList.remove("selected")

    eleitoral.classList.add("selected")

    let notices = [document.createElement("h1"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")]

    notices[0].innerHTML = "Direito Eleitoral";
    notices[1].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, id sapiente laudantium quo iusto maxime facere! Sapiente sunt facilis consectetur sequi, dolorum molestiae illum pariatur cumque. Corrupti saepe distinctio modi.";
    notices[2].innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minima similique tempora. Totam, similique doloremque? Tenetur, quibusdam ratione! Dolore nesciunt iste quos labore maxime sequi omnis blanditiis hic iusto laborum!";
    notices[3].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat nobis adipisci earum recusandae iure possimus porro. Possimus quod illum voluptates, vel minima dolore, error quia dolor enim necessitatibus ipsa?";
    notices[4].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis maxime labore libero autem aperiam necessitatibus alias expedita blanditiis nemo voluptas nisi doloribus atque, esse saepe repellendus quae quia molestias.";


    notices.map((notice) => {
        text.appendChild(notice);
    })
})


trabalho.addEventListener("click", (e) => {
    text.innerHTML = "";

    if (public.classList.contains("selected")) public.classList.remove("selected")
    if (eleitoral.classList.contains("selected")) eleitoral.classList.remove("selected")
    if (penal.classList.contains("selected")) penal.classList.remove("selected")

    trabalho.classList.add("selected")

    let notices = [document.createElement("h1"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")]

    notices[0].innerHTML = "Direito Civil e Processual Civil";
    notices[1].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, id sapiente laudantium quo iusto maxime facere! Sapiente sunt facilis consectetur sequi, dolorum molestiae illum pariatur cumque. Corrupti saepe distinctio modi.";
    notices[2].innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minima similique tempora. Totam, similique doloremque? Tenetur, quibusdam ratione! Dolore nesciunt iste quos labore maxime sequi omnis blanditiis hic iusto laborum!";
    notices[3].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat nobis adipisci earum recusandae iure possimus porro. Possimus quod illum voluptates, vel minima dolore, error quia dolor enim necessitatibus ipsa?";
    notices[4].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis maxime labore libero autem aperiam necessitatibus alias expedita blanditiis nemo voluptas nisi doloribus atque, esse saepe repellendus quae quia molestias.";


    notices.map((notice) => {
        text.appendChild(notice);
    })
})


penal.addEventListener("click", (e) => {
    text.innerHTML = "";

    if (public.classList.contains("selected")) public.classList.remove("selected")
    if (eleitoral.classList.contains("selected")) eleitoral.classList.remove("selected")
    if (trabalho.classList.contains("selected")) trabalho.classList.remove("selected")

    penal.classList.add("selected")

    let notices = [document.createElement("h1"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")]

    notices[0].innerHTML = "Direito Empresarial Trabalhista";
    notices[1].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, id sapiente laudantium quo iusto maxime facere! Sapiente sunt facilis consectetur sequi, dolorum molestiae illum pariatur cumque. Corrupti saepe distinctio modi.";
    notices[2].innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minima similique tempora. Totam, similique doloremque? Tenetur, quibusdam ratione! Dolore nesciunt iste quos labore maxime sequi omnis blanditiis hic iusto laborum!";
    notices[3].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat nobis adipisci earum recusandae iure possimus porro. Possimus quod illum voluptates, vel minima dolore, error quia dolor enim necessitatibus ipsa?";
    notices[4].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis maxime labore libero autem aperiam necessitatibus alias expedita blanditiis nemo voluptas nisi doloribus atque, esse saepe repellendus quae quia molestias.";


    notices.map((notice) => {
        text.appendChild(notice);
    })
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

for (link of links) {
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
            items: 3
        }
    }
})
