



    let cuadro = document.getElementById("lienzo");
    let contexto = cuadro.getContext('2d');
    
    contexto.fillStyle = "white"
    
    
    
    
    function vidaSiete() {
        
        contexto.fillStyle = '#b90c77', 'border: 1 solid blak;';
        contexto.fillRect(20,20, 14, 330)
        contexto.lineCap = 'round';
        contexto.fillRect(20,20, 45, 20)
        contexto.linecap = "round";
       
            contexto.beginPath();
            contexto.strokeStyle = '#b90c77';
            contexto.lineWidth = 10;
            contexto.moveTo(25,100);
            contexto.lineTo(60,35);
            contexto.stroke();
            contexto.lineCap = 'round';

            

        contexto.beginPath();
        contexto.strokeStyle = '#b90c77';
        contexto.lineWidth = 8;
        contexto.moveTo(0,350)
        contexto.lineTo(27, 320)
        contexto.lineTo(53, 350)
        contexto.fill(); 
        contexto.stroke();
        contexto.lineCap = 'round';
            
        
    }   


    function vidaSeis() {
    
    contexto.fillRect(20,20,160,20)
    contexto.fillRect(180, 20, 8, 60 )
    contexto.lineCap = 'round';
            
    }


    function vidaCinco() {

      contexto.beginPath();
      contexto.strokeStyle = 'white';
      contexto.lineWidth = 8;
      contexto.arc(180,110,30,0,2*Math.PI)      
      contexto.stroke();
      contexto.lineCap = 'round';

                
    }
         

    function vidaCuatro() {

        contexto.beginPath();
        contexto.strokeStyle = 'white';
        contexto.lineWidth = 8;
        contexto.moveTo(119,163)
        contexto.lineTo(180, 141)     
        contexto.stroke();
        contexto.lineCap = 'round';
            
           
    }


    function vidaTres() {

        contexto.beginPath();
        contexto.strokeStyle = 'white';
        contexto.lineWidth = 8;
        contexto.moveTo(180,141)
        contexto.lineTo(245, 165)    
        contexto.stroke();
        contexto.lineCap = 'round';
        
    }


    function vidaDos() {

        contexto.beginPath();
        contexto.strokeStyle = 'white';
        contexto.lineWidth = 8;
        contexto.moveTo(180,141)
        contexto.lineTo(180, 270)    
        contexto.stroke();
        contexto.lineCap = 'round';
    
    }



    function vidaUno() {

        contexto.beginPath();
        contexto.strokeStyle = 'white';
        contexto.lineWidth = 8;
        contexto.moveTo(180,270)
        contexto.lineTo(200, 330)   
        contexto.stroke();
        contexto.lineCap = 'round';
        
    }

  

    function vidaCero() {

        contexto.beginPath();
        contexto.strokeStyle = 'white';
        contexto.lineWidth = 8;
        contexto.moveTo(180,270)
        contexto.lineTo(160, 330)  
        contexto.stroke();

        
        contexto.beginPath();
        contexto.strokeStyle = 'white';
        contexto.lineWidth = 3;
        contexto.arc(171,99,5,0,2*Math.PI)
        contexto.stroke();

        contexto.beginPath();
        contexto.strokeStyle = 'white';
        contexto.lineWidth = 3;
        contexto.arc(190,99,5,0,2*Math.PI)
        contexto.stroke();

        contexto.beginPath();
        contexto.strokeStyle = 'white';
        contexto.arc(180,127,13,0,1*Math.PI,true)
        contexto.stroke();
        contexto.lineWidth = 3;
        contexto.lineCap = 'round';
        


        
       
    }







    


 

    
  
