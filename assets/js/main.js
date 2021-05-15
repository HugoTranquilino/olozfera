$(document).ready(function () {
    // datatable
    $('#example').DataTable({
        responsive: true,
        dom: 'lrtip',
        "paging": false,
        "ordering": false,
        "info": false
    });

    // validacion email
    var correo_electronico = {
        rules: {
            correo: {
                required: true,
                email: true
            }
        },
        messages: {
            correo: {
                required: "Por favor ingrese su correo electrónico",
                email: "Favor de verificar el correo electrónico ingresado"
            }
        }
    }

    $("#enviar").click(function (e) {
        $("#contacto").validate(correo_electronico);
        if ($("#contacto").valid()) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tú información ha sido guardada',
                showConfirmButton: false,
                timer: 1500
            })
            $(this).attr("disabled", "disabled");
            $("#enviar").css('background', '#f6f6f6');
            $("#enviar").css('color', 'black');
        }
    })
});