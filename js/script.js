/* ---------------- */
/* PANTALLA DE INICIO */
/* ---------------- */

const texto = document.getElementById("texto");

if(texto){

    /* estamos en index.html */

    texto.textContent = "Te vi en línea pero no estabas ahí.";

    texto.addEventListener("click", function(){

        window.location.href = "pantalla2.html";

    });

}



/* ---------------- */
/* BLOQUE INICIAL */
/* ---------------- */

const violeta = document.getElementById("violeta");

if(violeta){

    /* agrega escucha de click */
    /* si hacés click llama a dividir() */
    violeta.addEventListener("click", dividir);

}




/* ---------------- */
/* VIOLETA → AZUL + VERDE */
/* ---------------- */

function dividir(event){

    /* event = el evento que acaba de ocurrir */

    /* en este caso:
       el click */

    /* event podría llamarse e
       o cualquier otro nombre */

    /* pero event suele usarse
       porque describe lo que contiene */


    event.stopPropagation();

    /* frena la propagación del click */

    /* propagación = que el click siga subiendo */

    /* ejemplo:

       miniVerde
       dentro de verde
       dentro de violeta

       click
       ↑
       podría seguir subiendo
    */

    /* stopPropagation le dice:

       frenate acá

       no subas más
    */


    violeta.removeEventListener("click", dividir);

    /* elimina el listener */

    /* listener = escucha */

    /* antes:
       violeta escucha clicks */

    /* después:
       deja de escuchar */

    /* así violeta sólo se divide una vez */


    violeta.innerHTML = `

        <div id="azul"></div>

        <div id="verde"></div>

    `;

    /* innerHTML reemplaza contenido interno */

    /* antes:
       violeta vacío */

    /* después:
       azul + verde */


    const azul = document.getElementById("azul");

    const verde = document.getElementById("verde");

    /* busca los nuevos divs recién creados */


    azul.addEventListener("click", dividirAzul);

    verde.addEventListener("click", dividirVerde);

    /* agrega click a ambos */

}




/* ---------------- */
/* AZUL → GRANDE + CHICO */
/* ---------------- */

function dividirAzul(event){

    event.stopPropagation();

    const azul = document.getElementById("azul");


    azul.innerHTML = `

        <div class="azulGrande"></div>

        <div class="azulChico"></div>

    `;


    azul.removeEventListener("click", dividirAzul);


    /* busca azulGrande recién creado */
    const azulGrande = azul.querySelector(".azulGrande");


    /* agrega click */
    azulGrande.addEventListener("click", dividirAzulGrande);
    
    const azulChico = azul.querySelector(".azulChico");
    
    azulChico.addEventListener("click", dividirAzulChico);

}

/* ---------------- */
/* AZUL GRANDE → DOS MITADES */
/* ---------------- */

function dividirAzulGrande(event){

    event.stopPropagation();


    const azulGrande = event.currentTarget;


    azulGrande.removeEventListener("click", dividirAzulGrande);


    azulGrande.innerHTML = `

        <div class="miniAzul"></div>

        <div class="miniAzul"></div>

    `;

}

/* ---------------- */
/* AZUL CHICO → DOS MITADES VERTICALES */
/* ---------------- */

function dividirAzulChico(event){

    event.stopPropagation();
    /* evita que el click siga propagándose */


    const azulChico = event.currentTarget;
    /* guarda el azulChico exacto clickeado */


    azulChico.removeEventListener("click", dividirAzulChico);
    /* evita que vuelva a dividirse */


    azulChico.innerHTML = `

        <div class="miniAzulChico"></div>

        <div class="miniAzulChico"></div>

    `;
    /* lo reemplaza por dos bloques verticales */

}



/* ---------------- */
/* VERDE → DOS MINI VERDES */
/* ---------------- */

function dividirVerde(event){

    event.stopPropagation();


    const verde = event.currentTarget;

    /* currentTarget devuelve:

       el elemento exacto que tiene
       este listener de click */

    /* en este caso:
       el verde clickeado */

    /* sirve para trabajar exactamente
       sobre ese bloque */


    verde.removeEventListener("click", dividirVerde);


    verde.innerHTML = `

        <div class="miniVerde"></div>

        <div class="miniVerde"></div>

    `;

    /* verde se reemplaza por dos miniVerde */


    const minis = verde.querySelectorAll(".miniVerde");

    /* busca TODOS los .miniVerde
       que estén dentro de verde */

    /* devuelve una lista */


    minis.forEach(function(mini){

        /* forEach recorre una lista
           uno por uno */

        /* sería:

           mini arriba
           ↓

           mini abajo
        */


        mini.addEventListener("click", dividirMiniVerde);

        /* agrega click individual a cada uno */

    });

}




/* ---------------- */
/* MINI VERDE → 4 CUADRADOS */
/* ---------------- */

function dividirMiniVerde(event){

    event.stopPropagation();


    const mini = event.currentTarget;

    /* guarda el miniVerde exacto
       que recibió el click */


    mini.removeEventListener("click", dividirMiniVerde);

    /* evita que vuelva a dividirse */


    mini.innerHTML = `

        <div class="cuadradoVerde"></div>

        <div class="cuadradoVerde"></div>

        <div class="cuadradoVerde"></div>

        <div class="cuadradoVerde"></div>

    `;

    /* reemplaza ese miniVerde
       por 4 cuadrados */

}