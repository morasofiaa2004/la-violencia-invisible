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

    // tamaños irregulares
    bloque.style.flexGrow =
        Math.floor(Math.random() * 4) + 1;

    bloque.style.flexBasis =
        Math.floor(Math.random() * 250 + 180) + "px";

    // color random
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

    // tamaño mínimo
    if (
        bloque.offsetWidth < 180 ||
        bloque.offsetHeight < 140
    ) {
        return;
    }

    // evita dividir dos veces
    if (bloque.dataset.dividido) return;

    bloque.dataset.dividido = true;

    bloque.innerHTML = "";

    bloque.style.display = "flex";

    // dirección random
    const vertical = Math.random() > 0.5;

    bloque.style.flexDirection =
        vertical ? "row" : "column";

    // entre 2 y 3 viñetas
    const cantidad =
        Math.floor(Math.random() * 2) + 2;

    for (let i = 0; i < cantidad; i++) {

        crearBloque(bloque, nivel + 1);
    }
}
