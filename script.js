/*==================================================
    ABANDONADOS
    script.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
        MENU COM SCROLL
    ==============================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /*==============================================
        MENU ATIVO
    ==============================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 180;
            const height = section.clientHeight;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("ativo");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("ativo");

            }

        });

    });


    /*==============================================
        BOTÃO VOLTAR AO TOPO
    ==============================================*/

    const btnTopo = document.querySelector('a[href="#topo"]');

    if (btnTopo) {

        btnTopo.addEventListener("click", function (e) {

            e.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /*==============================================
        COMPARTILHAMENTO
    ==============================================*/

    const url = window.location.href;

    const titulo = "Conheça o projeto Abandonados 🐾";

    const texto = "Ajude a conscientizar sobre o abandono de animais!";

    const redes = document.querySelectorAll(".redes a");

    if (redes.length >= 4) {

        // WhatsApp
        redes[0].onclick = () => {

            window.open(

                `https://wa.me/?text=${encodeURIComponent(texto + " " + url)}`,

                "_blank"

            );

        };

        // Facebook
        redes[1].onclick = () => {

            window.open(

                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,

                "_blank"

            );

        };

        // Instagram
        redes[2].onclick = () => {

            window.open(

                "https://www.instagram.com/",

                "_blank"

            );

        };

        // Copiar link
        redes[3].onclick = async () => {

            try {

                await navigator.clipboard.writeText(url);

                alert("✅ Link copiado!");

            } catch {

                alert("Não foi possível copiar o link.");

            }

        };

    }


    /*==============================================
        CONTADORES
    ==============================================*/

    const counters = document.querySelectorAll("[data-counter]");

    counters.forEach(counter => {

        let iniciou = false;

        function animar() {

            const topo = counter.getBoundingClientRect().top;

            if (topo < window.innerHeight && !iniciou) {

                iniciou = true;

                const alvo = Number(counter.dataset.counter);

                let atual = 0;

                const incremento = Math.ceil(alvo / 100);

                const timer = setInterval(() => {

                    atual += incremento;

                    if (atual >= alvo) {

                        atual = alvo;

                        clearInterval(timer);

                    }

                    counter.innerHTML = atual.toLocaleString("pt-BR");

                }, 20);

            }

        }

        window.addEventListener("scroll", animar);

        animar();

    });


    /*==============================================
        PARALLAX HERO
    ==============================================*/

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        const y = window.scrollY * 0.25;

        hero.style.backgroundPosition = `center ${y}px`;

    });


    /*==============================================
        EFEITO DE ENTRADA
    ==============================================*/

    const elementos = document.querySelectorAll(".card, .imagem, .texto");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("mostrar");

            }

        });

    }, {

        threshold: .15

    });

    elementos.forEach(el => observer.observe(el));

});