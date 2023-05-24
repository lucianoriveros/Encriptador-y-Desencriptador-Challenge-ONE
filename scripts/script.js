// MENSAJE DE BIENVENIDA
  window.onload=function(){
    Swal.fire({
        showConfirmButton: false,
        title: '¡Bienvenido/a!',
        text:'Espero que te guste ',
        padding: '6em 3em 8em 3em',
        color: '#000',
        timer: 4000000,
        timerProgressBar: true,
        background: 'linear-gradient(to right, #fc5c7d, #6a82fb)' ,
        backdrop: `
          url("img/butterfly.gif")
          top
          no-repeat
        
        `,
        
      });

  }

// ENCRIPTAR TEXTO
function encriptar(){

    var texto = document.getElementById("text-area").value;

    if (texto == "") {
      txtVacio();
      document.getElementById('delete').style.display='flex';
      document.getElementById('delete-2').style.display='flex';
      document.getElementById('copiar').style.display='none';
      texto = "Ingrese el texto a encriptar o desencriptar";
      document.getElementById('text-result').innerHTML=texto;
      document.getElementById('text-result').style.color='#000000'
      document.getElementById('text-result').style.fontSize='1rem';
      document.getElementById('text-result').style.width='100%';
      document.getElementById('text-result').style.height='auto';
    }else{

        
        var textoCifrado = texto.replace(/e/igm,'enter');
        var textoCifrado = textoCifrado.replace(/o/igm,'ober');
        var textoCifrado = textoCifrado.replace(/i/igm,'imes');
        var textoCifrado = textoCifrado.replace(/a/igm,'ai');
        var textoCifrado = textoCifrado.replace(/u/igm,'ufat');
        
        document.getElementById("delete").style.display="none";
        document.getElementById('delete-2').style.display='none';
        document.getElementById("text-result").innerHTML=textoCifrado;
        document.getElementById('text-result').style.margin='auto';
        document.getElementById('text-result').style.color='#0A3871'
        document.getElementById('text-result').style.fontSize='22px';
        document.getElementById('text-result').style.width='90%';
        document.getElementById('text-result').style.height='90%';
        document.getElementById("copiar").style.display="flex";
        
        let title = 'encriptado';
        success(title); 
    
    }
}

// DESENCRIPTAR TEXTO
function desencriptar(){

    var texto = document.getElementById("text-area").value;

    if (texto == "") {
        txtVacio();
        document.getElementById('delete').style.display='flex';
        document.getElementById('delete-2').style.display='flex';
        document.getElementById('copiar').style.display='none';
        texto = "Ingrese el texto a encriptar o desencriptar";
        document.getElementById('text-result').innerHTML=texto;
        document.getElementById('text-result').style.color='#000000'
        document.getElementById('text-result').style.fontSize='1rem';
        document.getElementById('text-result').style.width='100%';
        document.getElementById('text-result').style.height='auto';
    }else{
        
        
        var textoCifrado = texto.replace(/enter/igm,'e');
        var textoCifrado = textoCifrado.replace(/ober/igm,'o');
        var textoCifrado = textoCifrado.replace(/imes/igm,'i');
        var textoCifrado = textoCifrado.replace(/ai/igm,'a');
        var textoCifrado = textoCifrado.replace(/ufat/igm,'u');
        
        document.getElementById('delete').style.display='none';
        document.getElementById('delete-2').style.display='none';
        document.getElementById('text-result').innerHTML=textoCifrado;
        document.getElementById('text-result').style.margin='auto';
        document.getElementById('text-result').style.color='#0A3871'
        document.getElementById('text-result').style.fontSize='22px';
        document.getElementById('text-result').style.width='90%';
        document.getElementById('text-result').style.height='90%';
        document.getElementById('copiar').style.display='flex';
        
        let title = 'desencriptado';
        success(title); 
        
    }
}

// COPIAR TEXTO
function copiar(){

   var c = document.createElement("input");
   c.setAttribute("value", document.getElementById('text-result').innerHTML);
   document.body.appendChild(c);
   c.select();
   document.execCommand("copy");
   document.body.removeChild(c);
   
   let title = 'copiado';
    success(title);
}

// PEGAR TEXTO
// function pegar(){

//     var p = document.getElementById("text-result");
//     p.setAttribute("value", document.getElementById('text-area').value);
// }

function txtVacio() {
    const Toast = Swal.mixin({
        toast: true,
        iconColor: 'black',
        position: 'bottom-right',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        customClass: {
          popup: 'colored-toast'
        },
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Error , igresar texto',
      })
}

function success(title) {
    const Toast = Swal.mixin({
        toast: true,
        iconColor: 'black',
        position: 'bottom-right',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        customClass: {
          popup: 'colored-toast'
        },
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      
      Toast.fire({
        icon: 'success',
        title: 'Texto '+title+' con éxito'
      });
}