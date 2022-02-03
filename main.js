


// funcion para cargar

document.getElementById("btn").addEventListener('click', recargar);

function recargar() {
  window.location.reload();

}

window.addEventListener("load", actualizarPagina); 

  function actualizarPagina () {

    document.getElementById("y").classList.add("hide");
  
// Mis Variables
 
    let palabrasAleatorias =  [ "murcielago", "javascript", "oracleone", "aluralatam"];
    let palabraOculta = "";

    let palabraUsuario = "";  // palabra que da el usuario
    let numeroVidas = 8;
    console.log(palabrasAleatorias);


    
    document.getElementById("d").addEventListener('click', comenzar);

    document.getElementById("vida").innerText = "Vidas ";
    
    document.getElementById('boton').addEventListener("click", verificar);
    
    document.getElementById("reglas").addEventListener('click', mostrarInfo);
    
     document.getElementById("cerrar-info").addEventListener('click', cerrarInfo);



    let btnP = document.getElementById("y");
    let inputP = document.getElementById("personalizado");



    btnP.addEventListener( "click", () => {
      palabrasAleatorias.splice(0)
     palabrasAleatorias.push(inputP.value);
      comenzar();
      
    });

  

  

    
  function comenzar () {


    document.getElementById("d").classList.add("btn-cerrar");
    document.getElementById("y").classList.add("btn-cerrar");
    document.getElementById("boton").classList.remove("ab");
    document.getElementById("personalizado").classList.add("ab");

    document.getElementById("letra").value = "";
    document.getElementById("letra").focus();

    
      palabraOculta = palabrasAleatorias[Math.floor(Math.random()*palabrasAleatorias.length)];
      
      
    console.log(palabraOculta);

    for (let i = 0; i < palabraOculta.length;   i++) {
        
        palabraUsuario = palabraUsuario + "_ ";
        
        
    }

    document.getElementById("frase").innerHTML = palabraUsuario;

  }

  
  function verificar() {

    document.getElementById("btn").classList.add("ab");
     
   
    let cuadro = document.getElementById("lienzo");
    let contexto = cuadro.getContext('2d');
 
    let letra = document.getElementById("letra").value.toLowerCase();
    

    letra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    
        palabraOculta = palabraOculta.toLowerCase();
        
    let nuevaPalabra = "";

        

    for (let i = 0; i < palabraOculta.length; i++) {
      

        if (letra == palabraOculta[i]) {
          
          nuevaPalabra = nuevaPalabra + letra + " ";
         
          
        } else {
          
          nuevaPalabra = nuevaPalabra + palabraUsuario [i*2] + " ";
        
          
        }

     }


     


     
    if (nuevaPalabra == palabraUsuario) {
      
        numeroVidas--;
        document.getElementById("vida").innerText = "Vidas ";
       
    }

    if (numeroVidas == 7) {

      document.getElementById("vida-ocho").classList.add("one");
      vidaSiete();
    }
    

    if (numeroVidas == 6) {
      
      document.getElementById("vida-siete").classList.add("one");
      vidaSeis();
    }
    
    
    if (numeroVidas == 5) {
      
      document.getElementById("vida-seis").classList.add("one");
      vidaCinco();
    }
    
    if (numeroVidas == 4) {
      
      document.getElementById("vida-cinco").classList.add("one");
      vidaCuatro();
    }
    
    if (numeroVidas == 3) {
      
      document.getElementById("vida-cuatro").classList.add("one")
      vidaTres();
    }
    
    if (numeroVidas == 2) {
      
      
      document.getElementById("vida-tres").classList.add("one")
      vidaDos();
    }
    
    if (numeroVidas == 1) {
      
        
      document.getElementById("vida-dos").classList.add("one")
      vidaUno();
    }

    if (numeroVidas == 0) {
      console.log(palabraOculta);
      document.getElementById("vida-uno").classList.add("one")
      
      document.getElementById("vida").innerText = "La palabra era: " + palabraOculta;
      vidaCero();
    }
    
    palabraUsuario = nuevaPalabra;
    document.getElementById("frase").innerHTML = palabraUsuario;
    



    
    if (numeroVidas == 0) {
      
      document.getElementById("resultados").classList.add("perder"); 
      document.getElementById("resultados").innerHTML = "Has sido eliminado!"
      document.getElementById("perder").classList.remove("lo");
      document.getElementById("perder").classList.add("lose");
      document.getElementById("btn").classList.remove("ab");
      document.getElementById("boton").classList.add("ab");

      

    /*  setTimeout ( () => document.getElementById("resultados").innerHTML = "", 5000);
      setTimeout ( () => document.getElementById("perder").innerHTML = "" , 5000);
      setTimeout ( () => document.getElementById("perder").classList.add("lo") , 5000);  */
      
    } 

    if (palabraUsuario.search("_") == -1) {

      document.getElementById("resultados").classList.add("ganar"); 
      document.getElementById("resultados").innerHTML = "Has ganado!"
      document.getElementById("ganar").classList.remove("lo");
      document.getElementById("ganar").classList.add("estrella");

      

    /*  setTimeout ( () => document.getElementById("resultados").innerHTML = "", 5000);
      setTimeout ( () => document.getElementById("ganar").classList.add("lo") , 5000);
      setTimeout ( () => document.getElementById("ganar").innerHTML = "" , 5000); */
      document.getElementById("btn").classList.remove("ab");
      document.getElementById("boton").classList.add("ab");
    }
    
    document.getElementById("letra").value = "";
    document.getElementById("letra").focus();
    
    
   
  }
  
  function mostrarInfo () {
    
    let infoMostrada = document.getElementById("informacion");
    infoMostrada.classList.remove("info-oculta");
    infoMostrada.classList.add("info-mostrar");
    
  }

  
   function  cerrarInfo () {
    
    let infoBorrada = document.getElementById("informacion");
    infoBorrada.classList.remove("info-mostrar");
    infoBorrada.classList.add("info-oculta");
  }

  

}
