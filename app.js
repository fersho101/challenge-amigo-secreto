// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosArr = []
let amigo = ''
let listaAmigos = ''

// Agrega nombre de amigo a la lista
const agregarAmigo = () => {
    let nuevoAmigo = document.getElementById('amigo').value
    nuevoAmigo = validarNombre(nuevoAmigo)
    nuevoAmigo = eliminaNombresDuplicados(nuevoAmigo, amigosArr)

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

    if (nuevoAmigo) {
        amigosArr.push(nuevoAmigo)
        limpiarInput()
        desplegarLista()
        console.log(amigosArr)
    }
}

// Valida nombres validos
const validarNombre = amigo => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/
    amigo = amigo.trim() // Elimina espacios vacios al princio y al final

    amigo = amigo.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '') // elimina caracteres invalidos.
    amigo = amigo.replace(/\s+/g, ' ') // Elimina espacios mayores a uno entre palabras.

    if (amigo.length < 2) {
        alert(
            'El nombre debe tener al menos 2 caracteres válidos. Solo se permiten letras, con o sin acento. Caracteres inválidos se eliminarán del nombre.'
        )
        limpiarInput()
        return null
    } else {
        if (regex.test(amigo)) {
            return amigo
        }
        return null
    }
}

//Valida nombres duplicados
const eliminaNombresDuplicados = (nom, arr) => {
    nomNormalizado = normalizarCadena(nom)
    if (arr.some(elem => normalizarCadena(elem) === nomNormalizado)) {
        alert('Nombre de amigo ya incluido, agregue un nuevo')
        limpiarInput()
        return null
    } else {
        return nom
    }
}

//Normalizar cadena
const normalizarCadena = cadena => {
    return cadena
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
}

//Limpia input
const limpiarInput = () => {
    document.getElementById('amigo').value = ''
}

//Desplega lista de amigos capturados
const desplegarLista = () => {
    listaAmigos = document.getElementById('listaAmigos')

    listaAmigos.innerHTML = ''
    amigosArr.forEach(amigo => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`
    })
}

//Sortea amigo
const sortearAmigo = () => {
    //Comprueba arrglo no vacio
    if (amigosArr.length === 0) {
        alert(
            'Lista de amigos vacía. Agregue al menos 1 nombre... aunque ya conocerás el resultado 😒.'
        )
        return
    }

    let amigoSecreto = amigosArr[Math.floor(Math.random() * amigosArr.length)]

    let resultado = document.getElementById('resultado')
    listaAmigos.innerHTML = ''

    resultado.innerHTML = `Amigo Secreto: ${amigoSecreto}`
    amigosArr = []

    document.getElementById('btn-sortear').style.display = 'none'
    document.getElementById('btn-reiniciar').style.display = 'flex'
    return
}

//Reiniciar juego
const reiniciarJuego = () => {
    document.getElementById('btn-reiniciar').style.display = 'none'
    document.getElementById('btn-sortear').style.display = 'flex'
    document.getElementById('resultado').innerHTML = ''

    document
        .getElementById('btn-reiniciar')
        .addEventListener('click', reiniciarJuego)
}
