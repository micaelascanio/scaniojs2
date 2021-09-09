//variables con sus selectores html

let btn = $(".buttonC");

let contactForm = $(".contactForm");

let sendBtn = $("#sendBtn");



//objetos html con jquery

contactForm.append(`<input id = "inputName" class="form-control campos" type = "text"  placeholder="Nombre y Apellido" autocomplete="off">
<input id = "inputEmail" class="form-control campos" type = "email"   placeholder="Email" autocomplete="off">
<input id = "inputNumber" class="form-control campos" type = "number"  placeholder="Teléfono" autocomplete="off">
<input id = "inputMessage" class="form-control campos" type = "text" id="exampleFormControlTextarea1" rows="3" placeholder="Mensaje" autocomplete="off"></input>
`)

sendBtn.append(`<form><br>
<button type = "submit" class="btn btn-light btn-md buttonC"  data-toggle="modal" href="productos-detalle.html">ENVIAR</button>
</form><br>`)

//esta es la funcion que hace aparecer al modal

sendBtn.click((e) => {
    //debugger
    e.preventDefault();

    let modal = $("#myModal");

    let inputName = $("#name").val();

    let inputEmail = $("#inputEmail").val();

    let inputNumber = $("#inputNumber").val();

    let inputMessage = $("#inputMessage").val();


    modal.append(`<div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Atención</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body"> A continuación te rediregiremos al formulario de contacto. ¿Deseas continuar?</div>  
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-dismiss="modal">Continuar</button>
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
            </div>
        </div>
    </div>
    </div>`)

    
    //console.log (inputName,inputEmail,inputNumber,inputMessage)
    //alert(`Gracias por escribirnos, te contactaremos al siguiente email: ${email}`)
    
   $(modal).modal('show')
      

   // location.reload()
})

