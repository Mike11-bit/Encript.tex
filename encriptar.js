function validarTexto() {
  let textarea = document.getElementById('nombre');
  let texto = textarea.value;
  let contieneMayusculas = /[A-Z]/.test(texto);
  let mensajeError = document.getElementById('mensajeError'); // Declara la variable aquí

  if (contieneMayusculas) {
    mensajeError.textContent = 'El texto solo puede contener letras minúsculas.';
    return false; 
  } else {
    mensajeError.textContent = 'Texto válido.';
    return true;
  }
}

function encriptar() {
  let inNombre = document.getElementById("nombre");
  let nombre = inNombre.value; 
  let nombreEncriptado = "";

  if (validarTexto()) { 
      if (nombre !== "") {
          for (let index = 0; index < nombre.length; index++) {
              let letra = nombre.charAt(index);
              let codigoAscii = letra.charCodeAt(0);
              let codigoEncriptado = codigoAscii + 1;
              let letraEncriptada = String.fromCharCode(codigoEncriptado);
              nombreEncriptado += letraEncriptada;
          }

          localStorage.setItem("nombre", nombreEncriptado); 
          window.location.href = "index2.html";
      } else {
          alert("Debes escribir en el cuadro de texto para poder encriptar");
      }
  } 
}
     
  
  function mostrarNombre() {
    let nombre = localStorage.getItem("nombre");
  
    if (nombre) { 
      document.getElementById("nombre2").value = "" + nombre;

    }
  }
  
  window.onload = mostrarNombre;

  function copiar() {
    const copi = document.getElementById("nombre2");
    const textoACopiar = copi.value; 
  
    if (textoACopiar) { 
      copi.select(); 
      document.execCommand('copy'); 
  
      
      document.getElementById("nombre3").value = textoACopiar;
  
      
      alert('lo que se copiio es    '+ copi.value+  '  Y se envio para Desencriptar');
    } else {
      alert('No hay texto para copiar.');
    }
  }


  function Desencriptar() {
    let inNombre = document.getElementById("nombre3");
    let nombre = inNombre.value; 
    let nombreEncriptado = "";
  
    if (nombre !== "") {
      for (let index = 0; index < nombre.length; index++) {
        let letra = nombre.charAt(index);
        let codigoAscii = letra.charCodeAt(0);
        let codigoEncriptado = codigoAscii - 1;
        let letraEncriptada = String.fromCharCode(codigoEncriptado);
        nombreEncriptado += letraEncriptada;
      }
  
      localStorage.setItem("nombre", nombreEncriptado); // Guarda el nombre encriptado
      window.location.href = "index2.html";
    } else {
      alert(" No hay nada en el cuadro para desncriptar");
    }
  }

  function encriptar1() {
    
    window.location.href = "../index.html"; // Redirección
}
   













  



