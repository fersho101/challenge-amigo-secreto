// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosArr = []
let amigo = ''

const agregarAmigo = () => {
    let nuevoAmigo = document.getElementById('amigo').value
    nuevoAmigo = validarNombre(nuevoAmigo)
    nuevoAmigo = eliminaNombresDuplicados(nuevoAmigo)
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

    if (nuevoAmigo) {
        amigosArr.push(nuevoAmigo)
        limpiarInput()
        dezplegarLista()
        // console.log(amigosArr)
    }
}

const validarNombre = amigo => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/
    amigo = amigo.trim()

    amigo = amigo.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')
    amigo = amigo.replace(/\s+/g, ' ')

    if (regex.test(amigo)) {
        return amigo
    } else {
        alert(
            'Ingrese un nombre de amigo valido, solo se permiten letras, con o sin acento.'
        )
        limpiarInput()
        return null
    }
}

const limpiarInput = () => {
    document.getElementById('amigo').value = ''
}

const dezplegarLista = () => {
    let listaAmigos = document.getElementById('listaAmigos')

    listaAmigos.innerHTML = ''
    amigosArr.forEach(amigo => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`
    })
}

const eliminaNombresDuplicados =  amigo => {
    if(amigosArr.includes(amigo)) {
        alert('Nombre de amigo ya incluido, por favor agrege un nombre de amigo nuevo.')
        limpiarInput()
        return null
    } else {
        return amigo
    }
}
