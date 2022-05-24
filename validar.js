window.onload = paginaCargada;

function paginaCargada()
{
    // Evento que captura el envio del formulario
    var boton = document.getElementById("enviodato");
    boton.onclick = validarFormulario;
};

// Función para validar el formulario.
function validarFormulario()
{
    var edad = document.getElementById("dato1");
    if(edad.value == "")
    {
      alert("ingrese un dato");
      return;
    }
    document.getElementById("respuesta").submit();
}