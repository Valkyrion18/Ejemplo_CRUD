let formulario = document.getElementById('formulario')
let btncorreo = document.getElementById('btnCorreo')
let btneditar = document.getElementById('btnEditar')
let btneliminar = document.getElementById('btnEliminar')

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('label-edit').style.display = 'none'
    document.getElementById('id').style.display = 'none'
    document.getElementById('id').readOnly = true
})

let email = document.getElementById('email')

email.addEventListener('input', () => {
    document.getElementById('id').style.display = 'none'
    document.getElementById('label-edit').style.display = 'none'
})

formulario.addEventListener('submit', async e => {
    e.preventDefault()
    let name = document.getElementById('name').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value

    let resp = await fetch('http://localhost:4003/usuarios', {
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: lastname,
            correo: email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    let data = resp.json()
    console.log(data);
})

btncorreo.addEventListener('click', async () => {

    document.getElementById('id').style.display = 'block'
    document.getElementById('label-edit').style.display = 'block'

    let email = document.getElementById('email').value

    // if (email != 'undefined'){
    //     document.getElementById('id').style.display = 'block'
    //     document.getElementById('label-edit').style.display = 'block'
    // }

    let resp = await fetch('http://localhost:4003/usuarios')
    let data = await resp.json()

    let modificar = data.find(user => user.correo === email)
    console.log(modificar);

    const { nombre, apellido, correo, id } = modificar

    document.getElementById('name').value = nombre
    document.getElementById('lastname').value = apellido
    document.getElementById('email').value = correo
    document.getElementById('id').value = id
})

btneditar.addEventListener('click', async () => {
    let idModificar = document.getElementById('id').value
    let nameModificar = document.getElementById('name').value
    let lastNameModificar = document.getElementById('lastname').value
    let emailModificar = document.getElementById('email').value

    let resp = await fetch(`http://localhost:4003/usuarios/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: idModificar,
            nombre: nameModificar,
            apellido: lastNameModificar,
            correo: emailModificar
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    let data = resp.json()
    console.log(data);
})


btneliminar.addEventListener('click', async () => {
    let idEliminar = document.getElementById('id').value

    let resp = await fetch(`http://localhost:4003/usuarios/${idEliminar}`, {
        method: 'DELETE',
    })
    let data = resp.json()
    console.log(data);

})