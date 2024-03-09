var darkButton = document.querySelector(".darkTheme");

darkButton.onclick = function(){
    darkButton.classList.toggle("button-Active")
    document.body.classList.toggle("dark-color")
}



function subirFoto() {
    // Obtener el input de tipo file y el div de vista previa
    var inputFoto = document.getElementById('inputFoto');
    var vistaPrevia = document.getElementById('vistaPrevia');

    // Obtener el archivo seleccionado
    var archivo = inputFoto.files[0];

    // Verificar si se seleccionó un archivo
    if (archivo) {
        // Crear un objeto FileReader para leer el contenido del archivo
        var lector = new FileReader();

        // Definir la función de retorno de llamada cuando la lectura esté completa
        lector.onload = function (e) {
            // Crear un elemento de imagen para la vista previa
            var img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Vista previa de la foto';

            // Limpiar el div de vista previa antes de agregar la nueva imagen
            vistaPrevia.innerHTML = '';

            // Agregar la imagen al div de vista previa
            vistaPrevia.appendChild(img);
        };

        // Leer el contenido del archivo como una URL de datos (base64)
        lector.readAsDataURL(archivo);
    } else {
        alert('Por favor, selecciona una foto antes de intentar subirla.');
    }


}