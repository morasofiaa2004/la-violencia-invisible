const pantalla = document.getElementById("pantalla");

// bloque inicial
crearBloque(pantalla);

function crearBloque(contenedor) {

  const bloque = document.createElement("div");
  bloque.classList.add("bloque");

  bloque.innerText = "click";

  contenedor.appendChild(bloque);

  bloque.addEventListener("click", dividir);
}

function dividir(e) {

  e.stopPropagation();

  const bloque = e.currentTarget;

  // evita dividir infinitamente
  if (bloque.dataset.dividido) return;

  bloque.dataset.dividido = true;

  bloque.innerHTML = "";

  // decide división horizontal o vertical
  const vertical = Math.random() > 0.5;

  bloque.style.display = "flex";
  bloque.style.flexDirection = vertical ? "row" : "column";

  crearBloque(bloque);
  crearBloque(bloque);
}
