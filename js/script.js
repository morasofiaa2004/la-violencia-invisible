/* ---------------- */
/* PANTALLA DE INICIO */
/* ---------------- */

const texto = document.getElementById("texto");

if(texto){

    texto.textContent = "Había un reflejo en la habitación";

    texto.addEventListener("click", function(){

        window.location.href = "pantalla2.html";

    });

}



/* ---------------- */
/* BLOQUE INICIAL */
/* ---------------- */


/* busca el div violeta dentro del HTML */
const violeta = document.getElementById("violeta");

let pasoAzul = 0;

let pasoVerde = 0;

let pasoAzulGrande = 0;


if(violeta){

    const rojo = document.getElementById("rojo");

    const cama = document.querySelector(".foto-cama");

    const cables = document.querySelector(".foto-cables");

    const escribiendo = document.getElementById("escribiendo");

    const conectado = document.getElementById("conectado");


    if(cama && rojo && cables && escribiendo && conectado){

        conectado.addEventListener("click", function(event){

            event.stopPropagation();

            rojo.style.width = "30%";

            conectado.style.display = "none";

            cama.style.width = "70%";

            cama.style.right = "24px";

            cama.style.left = "auto";

            cama.style.bottom = "24px";

            cama.style.top = "auto";

            cables.style.width = "100%";

            cables.style.display = "block";

            cables.style.top = "0";

            cables.style.left = "0";

            cables.style.height = "100%";

            cables.style.objectFit = "cover";

            cables.style.transform = "rotate(0deg)";

            violeta.classList.remove("oculto");

            escribiendo.classList.remove("oculto");

        });
    }


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

        <div id="verde" style="display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <img class="foto-luz" src="imagenes/luz.png" alt="luz">
        </div>

    `;

    /* innerHTML reemplaza contenido interno */

    /* antes:
       violeta vacío */

    /* después:
       azul + verde */


    const azul = document.getElementById("azul");

    const verde = document.getElementById("verde");

    /* busca los nuevos divs recién creados */


    azul.textContent = "La luz llegó antes";

    azul.addEventListener("click", cambiarTextoAzul);

    verde.addEventListener("click", cambiarTextoVerde);

    /* agrega click a ambos */

}


function cambiarTextoAzul(event){

    event.stopPropagation();

    const azul = event.currentTarget;

    pasoAzul++;

    if(pasoAzul === 1){

        azul.textContent = "antes que tu voz";

    }
    else if(pasoAzul === 2){

        azul.textContent = "antes que vos";

    }
    else{

        azul.removeEventListener("click", cambiarTextoAzul);

        dividirAzul(event);

    }

}



function cambiarTextoVerde(event){

    event.stopPropagation();

    const verde = event.currentTarget;

    pasoVerde++;

    if(pasoVerde === 1){

        const luz = verde.querySelector(".foto-luz");

        if(luz){
            luz.remove();
        }

        verde.textContent = "me gustaba cuando aparecías";

        verde.style.alignItems = "center";

        verde.style.justifyContent = "center";

        verde.style.textAlign = "center";

        verde.style.color = "white";

        verde.style.fontFamily = "monospace";

        verde.style.fontSize = "19px";

    }
    else if(pasoVerde === 2){

        verde.textContent = "tu nombre todavía hacía algo";

    }
    else{

        verde.removeEventListener("click", cambiarTextoVerde);

        verde.removeAttribute("style");

        dividirVerde(event);

    }

}



function cambiarTextoAzulGrande(event){

    event.stopPropagation();

    const azulGrande = event.currentTarget;

    pasoAzulGrande++;

    if(pasoAzulGrande === 1){

        azulGrande.textContent = "";

        azulGrande.style.alignItems = "center";

        azulGrande.style.justifyContent = "center";

        azulGrande.style.backgroundColor = "#2e0202";

        const img = document.createElement("img");

        img.src = "imagenes/perfil.png";

        img.alt = "perfil";

        img.className = "foto-perfil";

        azulGrande.appendChild(img);

    }
    else{

        azulGrande.removeEventListener("click", cambiarTextoAzulGrande);

        azulGrande.removeAttribute("style");

        azulGrande.style.backgroundColor = "#2e0202";

        azulGrande.innerHTML = `

            <div class="miniAzul"></div>

            <div class="miniAzul"></div>

        `;

        const minis = azulGrande.querySelectorAll(".miniAzul");

        minis[0].textContent = "no sé si eras vos";

        minis[1].textContent = "¿o solo era un recuerdo?";

        function configurarMini(mini, primerTexto, segundoTexto){

            mini.style.color = "white";

            mini.style.fontFamily = "monospace";

            mini.style.fontSize = "16px";

            mini.style.display = "flex";

            mini.style.alignItems = "center";

            mini.style.justifyContent = "center";

            mini.style.textAlign = "center";

            mini.style.padding = "20px";

            mini.style.boxSizing = "border-box";

            mini.style.backgroundColor = "#2e0202";

            let paso = 0;

            mini.addEventListener("click", function(e){

                e.stopPropagation();

                paso++;

                if(paso === 1){

                    mini.textContent = segundoTexto;

                }

            });

        }

        configurarMini(minis[0], "no sé si eras vos", "o lo que quedaba");

        configurarMini(minis[1], "¿o solo era un recuerdo?", "¿o prueba?");

    }

}





/* ---------------- */
/* AZUL → GRANDE + CHICO */
/* ---------------- */

function dividirAzul(event){

    event.stopPropagation();

    const azul = document.getElementById("azul");

    azul.style.display = "block";


    azul.innerHTML = `

        <div class="azulGrande"></div>

        <div class="azulChico"></div>

    `;


    azul.removeEventListener("click", dividirAzul);


    /* busca azulGrande recién creado */
    const azulGrande = azul.querySelector(".azulGrande");


    /* agrega click */
    azulGrande.textContent = "pasé tu foto con el dedo";

    azulGrande.style.alignItems = "center";

    azulGrande.style.justifyContent = "center";

    azulGrande.style.textAlign = "center";

    azulGrande.style.color = "white";

    azulGrande.style.fontFamily = "monospace";

    azulGrande.style.fontSize = "19px";

    azulGrande.style.paddingTop = "60px";

    azulGrande.style.boxSizing = "border-box";

    azulGrande.style.backgroundColor = "#2e0202";

    azulGrande.addEventListener("click", cambiarTextoAzulGrande);
    
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
