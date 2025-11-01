// js/animales.js
document.addEventListener('DOMContentLoaded', function() {
    // Información de cada animal
    const animalesInfo = [
        {
            titulo: "Pato silvestre",
            datos: [
                {
                    subtitulo: "¡El agua les hace cosquillas, pero no los moja! 💦",
                    texto: "Los patos silvestres tienen plumas tan especiales que el agua se desliza por encima como si fueran <strong>impermeables</strong> naturales. Por eso pueden nadar sin empaparse ni tener frío."
                },
                {
                    subtitulo: "Duermen con un ojo abierto 👁️💤",
                    texto: "A veces, cuando descansan en grupo, cada pato de la orilla del grupo mantiene <em>un ojo abierto</em> para vigilar si viene un zorro o un halcón. ¡Así todos pueden dormir tranquilos por turnos!"
                },
                {
                    subtitulo: "¡Los patitos creen que tú puedes ser su mamá! 🐣",
                    texto: "Cuando nacen, los patitos siguen al primer ser vivo que ven moverse. Si ven a una persona, pueden pensar: <em>¡Esa es mi mamá pato!</em> y la seguirán a todas partes."
                }
            ]
        },
        {
            titulo: "El león",
            datos: [
                {
                    subtitulo: "¡El león es el único gato que vive en familia! 🐾",
                    texto: "Se reúnen en grupos llamados manadas, donde las leonas cazan juntas y los leones protegen a todos."
                },
                {
                    subtitulo: "Su rugido se oye muy, muy lejos 🌍",
                    texto: "¡Hasta a 8 kilómetros de distancia! Es su manera de decir 'este es mi territorio'."
                },
                {
                    subtitulo: "Duermen un montón 😴",
                    texto: "Los leones pueden dormir más de 18 horas al día. ¡Qué vida más tranquila!"
                }
            ]
        },
        {
            titulo: "La cebra",
            datos: [
                {
                    subtitulo: "Sus rayas las ayudan a esconderse 🌾",
                    texto: "Cuando están juntas, las rayas se confunden y los depredadores no distinguen a una sola."
                },
                {
                    subtitulo: "Las rayas también espantan insectos 🦟",
                    texto: "Los mosquitos se confunden con los patrones blancos y negros y prefieren no picarlas."
                },
                {
                    subtitulo: "Se comunican con las orejas 👂",
                    texto: "Si una cebra tiene las orejas hacia atrás, ¡está enojada! Si las tiene derechas, está tranquila."
                }
            ]
        },
        {
            titulo: "El oso",
            datos: [
                {
                    subtitulo: "Los osos no hibernan de verdad ❄️",
                    texto: "No duermen todo el invierno, pero sí descansan mucho y bajan su ritmo. Si hace calor, ¡hasta pueden despertarse a comer!"
                },
                {
                    subtitulo: "Tienen un olfato increíble 👃",
                    texto: "Pueden oler comida a más de 20 km de distancia."
                },
                {
                    subtitulo: "Sus patas son como raquetas de nieve 🐾",
                    texto: "Grandes y anchas, perfectas para caminar sobre la nieve sin hundirse."
                }
            ]
        },
        {
            titulo: "El rinoceronte",
            datos: [
                {
                    subtitulo: "Les encanta revolcarse en el barro 🪣",
                    texto: "Así se refrescan y el barro los protege del sol y los insectos."
                },
                {
                    subtitulo: "Pueden pesar más que un coche 🚗",
                    texto: "¡Un rinoceronte adulto puede llegar a pesar hasta 2 toneladas!"
                },
                {
                    subtitulo: "Ven poco, pero huelen genial 👃",
                    texto: "Aunque su vista es mala, su olfato y oído son tan buenos que no se les escapa nada."
                }
            ]
        }
    ];

    // Función para mostrar información del animal
    function mostrarInfoAnimal(index) {
        const animal = animalesInfo[index];
        const contenedor = document.getElementById('info-animal');
        
        let html = `<h3 class="text-center mb-4">${animal.titulo}</h3>`;
        
        animal.datos.forEach(dato => {
            html += `
                <div class="mb-3">
                    <h5 text">${dato.subtitulo}</h5>
                    <p class="mb-0">${dato.texto}</p>
                </div>
            `;
        });
        
        contenedor.innerHTML = html;
    }

    // Inicializar con el primer animal
    mostrarInfoAnimal(0);

    // Escuchar cambios en el carrusel
    const carrusel = document.getElementById('carouselAnimals');
    if (carrusel) {
        carrusel.addEventListener('slid.bs.carousel', function(event) {
            const index = event.to;
            mostrarInfoAnimal(index);
        });
    }
});