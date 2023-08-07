// MENU RESPONSIVE

var btnMenuOpen = document.getElementById("btnMenuOpen"), 
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");


    // Click abrir
btnMenuOpen.addEventListener("click", function(){
    menuResponsive.classList.add("active");
});

// Click cerrar
btnMenuClose.addEventListener("click", function(){
    menuResponsive.classList.remove("active");
});


 // Cerrar menú con elementos de enlace
 enlaces.addEventListener("click", function() {
    menuResponsive.style.animationDelay = "0.5s";
    menuResponsive.classList.remove("active");

  });


  //SLIDER DE PRODUCTOS 

var contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

    // Evento para boton derecho

    btnDerecho.addEventListener("click", function(){

        contenedor.scrollLeft += contenedor.offsetWidth;
    });


    // Evento para boton izquierdo

    btnIzquierdo.addEventListener("click", function(){

        contenedor.scrollLeft -= contenedor.offsetWidth;
    });


    //VALIDACIÓN DE FORMULARIO SECCIÓN CONTACTOS

    var formulario = document.getElementById("formulario")

    function validar(e){
        var inputNombre = document.getElementById("nombre"), inputEmail = document.getElementById("email"), inputComments = document.getElementById("comentarios");

        if(inputEmail.value == 0 || inputNombre.value == 0 || inputComments.value == 0 ){
            e.preventDefault();
            alert("Datos vacíos");
        }else{
            e.preventDefault;
            alert("Datos enviados");
            inputNombre.value = "";
            inputComments.value = "";
            inputEmail.value = "";
        }
    }
         //Eventos del formulario
    formulario.addEventListener("submit",validar);
    
