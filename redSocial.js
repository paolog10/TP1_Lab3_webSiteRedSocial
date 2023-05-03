window.onload=Iniciar; //si usamos defer, no colocar esta linea

function Iniciar() {
  let seguirPerfil = document.getElementById('btnSeguir');
  seguirPerfil.addEventListener("click", SeguirPerfil);

  let agregarComentarios = document.getElementById('agregarComentario');
  agregarComentarios.addEventListener("click", GenerarComentarios);

  let botonlike = document.getElementById('btnLike');
  botonlike.addEventListener("click", DarLike);
}

function SeguirPerfil(evento) {
  evento.preventDefault(); // Evita que se recargue la página al enviar el formulario

  let seguirPerfil = document.getElementById('btnSeguir');
  if (seguirPerfil.textContent === 'Seguir') {
    seguirPerfil.textContent = 'Dejar de seguir'; //La propiedad textContent para establecer el texto del párrafo. representa el contenido de texto del nodo y sus descendientes
    return;
  } else {
    seguirPerfil.textContent = 'Seguir';
    return;
  }
}

function DarLike(evento) {
  evento.preventDefault(); 
  
  let likes = document.getElementById('mostrarCantidadLikes');
  let cantidadLikes = 200;
  cantidadLikes++;
  likes.innerHTML = `${cantidadLikes} Likes`;
  likes.disabled = true; //deshabilito el botón
  return;
};

function GenerarComentarios(evento) {
  evento.preventDefault();
  
  let fecha = new Date();
  let inputUsuario = document.getElementById('txtUsuario').value;
  let inputComentario = document.getElementById('inputComentario').value;
  let listaComentarios = document.getElementById('ulMostrarComentarios');
  
  //validación básica /^\s+$/.test(inputUsuario) no haya solamente espacios
  if (inputUsuario === "" || inputUsuario == null || inputUsuario.length == 0  || /^\s+$/.test(inputUsuario) || inputComentario === "" || inputComentario == null || inputComentario.length == 0 || inputComentario.length > 1500) {
    
    let fecha = new Date();
    //let mensajeError = document.getElementById("mensajeError");
    let mensajeError = document.getElementById('ulMostrarComentarios');
    let parrafo = document.createElement("p");
    parrafo.innerHTML = `-Error!!! Usuario o comentario no válido. Verifique -- ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;

    //agrego la etiqueta p al elemento con el id "mensajeError"
    mensajeError.appendChild(parrafo);
    return false; //se retorna false y el formulario no se envía.
  }else{
    //creo etiquetas
    let strong = document.createElement("strong");
    let nuevoComentario = document.createElement("p");
    
    //agrego texto(variables en este caso a las etiquetas) -- No le hice el botón eliminar, le agregué fecha y hora del comentario
    var textoStrong = document.createTextNode(`${inputUsuario} `);
    var contenido = document.createTextNode(`${inputComentario} -- ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}`);
    
    //appendeo
    strong.appendChild(textoStrong);
    nuevoComentario.appendChild(strong);
    nuevoComentario.appendChild(contenido);
    listaComentarios.appendChild(nuevoComentario);

    //dejo vacío los campos
    document.getElementById('txtUsuario').value = "";
    document.getElementById('inputComentario').value = "";
    return;
  }
}


