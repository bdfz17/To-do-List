//Inicializacion 
const modal_categoria = document.querySelector("#modal_categoria");
const categoriaNueva = document.getElementById("nombre_categoria");
const contenedorCategorias=document.getElementById("pestañas");
        
//Cargar categorías guardadas al inicio
document.addEventListener("DOMContentLoaded", () => {
    const categorias = JSON.parse(localStorage.getItem("categorias")) || [];
    categorias.forEach(nombrePestaña=> {
        agregarCategoriaDOM(nombrePestaña);
    });
});

//Métodos asociados a las categorías
function mostrarCategoria(){
    modal_categoria.showModal();
}

function cerrarCategoria(){
    document.getElementById("nombre_categoria").value="";
    modal_categoria.close();
}

function guardarCategoria(){
    const nombrePestaña = categoriaNueva.value.trim();
    if(nombrePestaña!=""){
        agregarCategoriaDOM(nombrePestaña);
        guardarCategoriaLocal(nombrePestaña);
        modal_categoria.close();
    } else{
        alert("Escriba un nombre para la categoria");
    }
}

function agregarCategoriaDOM(nombrePestaña) {
      const pestaña = document.createElement("a");
      pestaña.textContent = nombrePestaña;
      pestaña.classList.add("pestaña");
      contenedorCategorias.appendChild(pestaña);
    }

function guardarCategoriaLocal(nombrePestaña) {
    let categorias = JSON.parse(localStorage.getItem("categorias")) || [];
    categorias.push(nombrePestaña);
    localStorage.setItem("categorias", JSON.stringify(categorias));
}



