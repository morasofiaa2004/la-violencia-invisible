const pantalla = document.getElementById("pantalla");

const colores = [
    "#2b0000",
    "#3d0000",
    "#4a0404",
    "#5c0808",
    "#6e0b0b",
    "#7f1010",
    "#8b0505"
];

// viñeta inicial
crearBloque(pantalla, 0);

function crearBloque(contenedor, nivel) {

    const bloque = document.createElement("div");

    bloque.classList.add("bloque");

    bloque.style.backgroundColor =
        colores[Math.floor(Math.random() * colores.length)];

    bloque.dataset.nivel = nivel;

    bloque.innerHTML = `
        <div class="contenido">
            click
        </div>
    `;

    contenedor.appendChild(bloque);

    bloque.addEventListener("click", dividir);
}

function dividir(e) {

    e.stopPropagation();

    const bloque = e.currentTarget;

    const nivel =
        parseInt(bloque.dataset.nivel);

    // límite de tamaño
    if (
        bloque.offsetWidth < 260 ||
        bloque.offsetHeight < 180
    ) {
        return;
    }

    // evita duplicar divisiones
    if (bloque.dataset.dividido) return;

    bloque.dataset.dividido = true;

    bloque.innerHTML = "";

    bloque.style.display = "flex";

    // alterna según profundidad
    if (nivel % 2 == 0) {

        // divide horizontalmente
        bloque.style.flexDirection = "column";

    } else {

        // divide verticalmente
        bloque.style.flexDirection = "row";
    }

    // crea dos nuevas viñetas
    crearBloque(bloque, nivel + 1);
    crearBloque(bloque, nivel + 1);
}
