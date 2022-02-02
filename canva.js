



    let cuadro = document.getElementById("lienzo");
    let contexto = cuadro.getContext('2d');


    function vidaSiete() {
        
        contexto.moveTo(180,270)
        contexto.lineTo(140, 350)
        contexto.lineWidth = 8
       
        contexto.stroke();
    }

    function vidaSeis() {
        contexto.moveTo(180,270)
        contexto.lineTo(220, 350)
        contexto.stroke();
    }

    function vidaCinco() {
        contexto.moveTo(180,141)
        contexto.lineTo(180, 270)
        contexto.stroke();
    
    }

    function vidaCuatro() {
        contexto.moveTo(180,141)
        contexto.lineTo(280, 165)
        contexto.stroke();
    
    }

    function vidaTres() {
        contexto.moveTo(75,163)
        contexto.lineTo(180, 141)
        contexto.stroke();
        contexto.beginPath();
        
    }

    function vidaDos() {
        contexto.arc(180,110,30,0,2*Math.PI)
        contexto.stroke();

      
        
    }

    function vidaUno() {
        
   
    contexto.fillRect(180, 20, 8, 60 )
        
    }

    function vidaCero() {
        
    contexto.fillRect(0,20,180,10)
    
    }










    


 

    
  
