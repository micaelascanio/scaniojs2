//variables con sus selectores html

let btn = $(".buttonC")

let contactForm = $(".contactForm")

let sendBtn = $("#sendBtn")

//objetos html con jquery

contactForm.append(`<input id = "name" class="form-control campos" type = "text" placeholder="Nombre y Apellido" autocomplete = "none">
            <input id = "dni" class="form-control campos" type = "number"  placeholder="DNI" autocomplete = "none">
            <input id = "email" class="form-control campos" type = "email" placeholder="Email" autocomplete = "none"> </form>`)

sendBtn.append(`<form><br>
<button type = "submit" class="btn btn-light btn-md buttonC" href="productos-detalle.html">ENVIAR</button>
</form>`)


//esta es la funcion que toma el value del input mail para enviar un alert y recargar la pagina

sendBtn.click((e) =>{

    e.preventDefault();

    let email = $("#email").val();

    alert(`Gracias por escribirnos, te contactaremos al siguiente email: ${email}`)

    location.reload()
})


