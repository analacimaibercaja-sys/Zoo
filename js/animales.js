document.addEventListener('DOMContentLoaded', function() {
    const kangaroo = document.getElementById("kangaroo");
    const mainContent = document.querySelector(".main-content");

    function startKangarooAnimation() {
        if (kangaroo) {
            kangaroo.classList.add("animate");
        }
    }

    function onKangarooAnimationEnd() {
        kangaroo.classList.remove("animate");
        kangaroo.style.display = "none";
        
        if (mainContent) {
            mainContent.classList.add("show");
        }
        
        initializeAnimals();
    }

    if (kangaroo) {
        kangaroo.addEventListener("animationend", onKangarooAnimationEnd, false);
        startKangarooAnimation();
    } else {
         if (mainContent) {
            mainContent.classList.add("show");
        }
        initializeAnimals();
    }

    const animalsInfo = [
        {
            title: "Pato silvestre",
            data: [
                {
                    subtitle: "¡El agua les hace cosquillas, pero no los moja! 💦",
                    text: "Los patos silvestres tienen plumas tan especiales que el agua se desliza por encima como si fueran <strong>impermeables</strong> naturales. Por eso pueden nadar sin empaparse ni tener frío."
                },
                {
                    subtitle: "Duermen con un ojo abierto 👁️💤",
                    text: "A veces, cuando descansan en grupo, cada pato de la orilla del grupo mantiene <em>un ojo abierto</em> para vigilar si viene un zorro o un halcón. ¡Así todos pueden dormir tranquilos por turnos!"
                },
                {
                    subtitle: "¡Los patitos creen que tú puedes ser su mamá! 🐣",
                    text: "Cuando nacen, los patitos siguen al primer ser vivo que ven moverse. Si ven a una persona, pueden pensar: <em>¡Esa es mi mamá pato!</em> y la seguirán a todas partes."
                }
            ]
        },
        {
            title: "El león",
            data: [
                {
                    subtitle: "¡El león es el único gato que vive en familia! 🐾",
                    text: "Se reúnen en grupos llamados manadas, donde las leonas cazan juntas y los leones protegen a todos."
                },
                {
                    subtitle: "Su rugido se oye muy, muy lejos 🌍",
                    text: "¡Hasta a 8 kilómetros de distancia! Es su manera de decir <a href='ecosistemas.html' >'este es mi territorio'</a>."
                },
                {
                    subtitle: "Duermen un montón 😴",
                    text: "Los leones pueden dormir más de 18 horas al día. ¡Qué vida más tranquila!"
                }
            ]
        },
        {
            title: "La cebra",
            data: [
                {
                    subtitle: "Sus rayas las ayudan a esconderse 🌾",
                    text: "Cuando están juntas, las rayas se confunden y los depredadores no distinguen a una sola."
                },
                {
                    subtitle: "Las rayas también espantan insectos 🦟",
                    text: "Los mosquitos se confunden con los patrones blancos y negros y prefieren no picarlas."
                },
                {
                    subtitle: "Se comunican con las orejas 👂",
                    text: "Si una cebra tiene las orejas hacia atrás, ¡está enojada! Si las tiene derechas, está tranquila."
                }
            ]
        },
        {
            title: "El oso",
            data: [
                {
                    subtitle: "Los osos no hibernan de verdad ❄️",
                    text: "No duermen todo el invierno, pero sí descansan mucho y bajan su ritmo. Si hace calor, ¡hasta pueden despertarse a comer!"
                },
                {
                    subtitle: "Tienen un olfato increíble 👃",
                    text: "Pueden oler comida a más de 20 km de distancia."
                },
                {
                    subtitle: "Sus patas son como raquetas de nieve 🐾",
                    text: "Grandes y anchas, perfectas para caminar sobre la nieve sin hundirse."
                }
            ]
        },
        {
            title: "El rinoceronte",
            data: [
                {
                    subtitle: "Les encanta revolcarse en el barro 🪣",
                    text: "Así se refrescan y el barro los protege del sol y los insectos."
                },
                {
                    subtitle: "Pueden pesar más que un coche 🚗",
                    text: "¡Un rinoceronte adulto puede llegar a pesar hasta 2 toneladas!"
                },
                {
                    subtitle: "Ven poco, pero huelen genial 👃",
                    text: "Aunque su vista es mala, su olfato y oído son tan buenos que no se les escapa <em>nada<em>."
                }
            ]
        }
    ];

    function showAnimalInfo(index) {
        const animal = animalsInfo[index];
        const container = document.getElementById('info-animal');
        
        let html = `<h3 class="text-center mb-4">${animal.title}</h3>`;
        
        //animal.data.forEach(item => {
        for(const item of animal.data){
            html += `
                <div class="mb-3">
                    <h5 class="text">${item.subtitle}</h5>
                    <p class="mb-0">${item.text}</p>
                </div>
            `;
        }
        //});
        
        container.innerHTML = html;
    }

    function initializeAnimals() {
        showAnimalInfo(0);

        const carousel = document.getElementById('carouselAnimals');
        if (carousel) {
            carousel.addEventListener('slid.bs.carousel', function(event) {
                const index = event.to;
                showAnimalInfo(index);
            });
        }
    }
});