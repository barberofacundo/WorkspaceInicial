let Formulario = document.getElementById('form');

Formulario.addEventListener('submit', function(event){
    let email= document.getElementById('floatingInput');
    let miInputDeContraseña = document.getElementById('floatingPassword');

    let micontra = miInputDeContraseña.value;

   
     if (!(email.length >0) && !(micontra.length > 0)) {
         event.preventDefault();
         alert('Debe ingresar al menos 1 caracteres');
        } else {
         event.preventDefault();
         window.location.href = 'portada.html';
        }

});

window.google = function(){

         window.location.href = 'portada.html';
        };
    



