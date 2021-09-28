/******************************
 *  VARIABLES 
 *****************************/





let btn = $(".buttonC");

let contactForm = $(".contactForm");

let sendBtn = $("#sendBtn");




//Variable para LIGHTMODE




const lightMode = () => {
    $("body").css("background-color", "white")
    $("nav").css({
        "background-color": "white",
        "color": "grey",
    })
    $("div").css("background-color", "white")
    $("section").css("background-color", "white")
    $(".buttonC").css({
        "background-color": "white",
        "color": "grey",
    })
    $(".campos").css("color", "black")
    $("input").css("background-color", "white")

    localStorage.setItem("theme", "light")
}


//Variable para DARKMODE 


const darkMode = () => {
    $("body").css("background-color", "black")
    $("nav").css({
        "background-color": "black",
        "color": "white",
    })
    $("div").css({
        "background-color": "black",
        "color": "white",
    })
    $("section").css({
        "background-color": "black",
        "color": "white",
    })
    $(".buttonC").css({
        "background-color": "lightgrey",
        "color": "black",
    })
    $(".campos").css("color", "white")
    $("input").css({
        "background-color": "lightgrey",
        "border-color": "grey",
    })


    localStorage.setItem("theme", "dark")
}






/******************************
 *  OBJETO CON JQUERY 
 *****************************/




contactForm.append(`<input id = "inputName" class="form-control campos" type = "text"  placeholder="Nombre y Apellido" autocomplete="off">
<input id = "inputEmail" class="form-control campos" type = "email"   placeholder="Email" autocomplete="off">
<input id = "inputNumber" class="form-control campos" type = "number"  placeholder="Teléfono" autocomplete="off">
<input id = "inputMessage" class="form-control campos" type = "text" id="exampleFormControlTextarea1" rows="3" placeholder="Mensaje" autocomplete="off"></input>
`)



sendBtn.append(`<form><br>
<button type = "submit" class="btn btn-light btn-md buttonC"  data-toggle="modal" href="productos-detalle.html">ENVIAR</button>
</form><br>`)






/******************************
 *  EVENTOS Y FUNCIONES 
 *****************************/





sendBtn.click((e) => {

    e.preventDefault();

    let modal = $("#myModal");

    let inputName = $("#name").val();

    let inputEmail = $("#inputEmail").val();

    let inputNumber = $("#inputNumber").val();

    let inputMessage = $("#inputMessage").val();

    if (inputEmail == "") {

        Swal.fire({
            icon: 'error',
            title: '¡Espera!',
            text: 'Email es un campo requerido, presiona OK para completarlo',

        })
    }
    else {
        Swal.fire(`<p class="campos">Gracias por escribirnos, te contactaremos al siguiente email: ${inputEmail}</p>`)

    }

})


//Funcion para el DARKMODE

$("#darkModeButton").on("click", () => {

    if (localStorage.getItem("theme") == "dark") {
        lightMode()
    }
    else {
        darkMode()
    }
})