// crea la constante "violeta" y busca el div violeta del HTML
const violeta = document.getElementById("violeta");


// cuando hace click en violeta
// ejecuta la función dividir
violeta.addEventListener("click", dividir);



// FUNCIÓN QUE DIVIDE VIOLETA
function dividir(event) {

    // evita propagación del click
    event.stopPropagation();


    // evita que violeta vuelva a dividirse
    violeta.removeEventListener("click", dividir);


    // crea azul y verde
    violeta.innerHTML = `

        <div id="azul"></div>

        <div id="verde"></div>

    `;


    // busca verde
    const verde = document.getElementById("verde");


    // click en verde
    verde.addEventListener("click", dividirVerde);

}



// FUNCIÓN QUE DIVIDE VERDE
function dividirVerde(event) {

    // evita propagación
    event.stopPropagation();


    // busca verde
    const verde = document.getElementById("verde");


    // divide verde en dos partes horizontales
    verde.innerHTML = `

        <div class="miniVerde"></div>

        <div class="miniVerde"></div>

    `;

}
