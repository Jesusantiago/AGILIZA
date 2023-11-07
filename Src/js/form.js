const form = document.querySelector("#formContact");

form.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(this)

    const response = await fetch(this.action, {
        method : this.method,
        form : formData,
        headers: {
            "Accept" : "application/json"
        }
    })

    if(response.ok){
        form.reset()
        alert("Su correo ha sido mandajo. Muchas gracias, recibiras una responda pronta.")
    }else{
        alert("No se pudo enviar")
    }
}


