$(document).ready(function () {
    $('#example').DataTable({
        responsive: true,
        dom: 'lrtip',
        "paging": false,
        "ordering": false,
        "info": false
    });

    var correo_electronico = {
        rules: {
            correo: {
                required: true,
                email: true
            }
        },
        messages: {
            correo: {
                required: "Por favor ingrese su correo electronico",
                email: "Favor de verificar el correo electronico ingresado"
            }
        }
    }

    $("#enviar").click(function (e) {
        $("#contacto").validate(correo_electronico);
        if ($("#contacto").valid()) {
            alert('todo bien ')
        }
    })
});