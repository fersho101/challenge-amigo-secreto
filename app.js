// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosArr = []
let amigo = ''
let listaAmigos = ''

// Agrega nombre de amigo a la lista
const agregarAmigo = () => {
    let nuevoAmigo = document.getElementById('amigo').value
    nuevoAmigo = validarNombre(nuevoAmigo)
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

    if (nuevoAmigo) {
        amigosArr.push(nuevoAmigo)
        desplegarLista()
        limpiarInput()
    }
    return
}

// Valida nombres validos
const validarNombre = amigo => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/
    amigo = amigo.trim() // Elimina espacios vacios al principio y al final

    amigo = amigo.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '') // elimina caracteres invalidos.
    amigo = amigo.replace(/\s+/g, ' ') // Elimina espacios mayores a uno entre palabras.
    amigo = eliminarAcentos(amigo)

    if (amigo.length < 2) {
        alert(
            'El nombre debe tener al menos 2 caracteres válidos. Solo se permiten letras, con o sin acento. Caracteres inválidos se eliminarán del nombre.'
        )
        limpiarInput()
    } else {
        if (regex.test(amigo)) {
            let arrTest = amigosArr.map(e => e.toLowerCase())
            let amigoTest = amigo.toLowerCase()
            // console.log(arrTest, amigoTest)
            if (arrTest.includes(amigoTest)) {
                alert('Nombre de amigo duplicado, agregue uno nuevo o pruebe su suerte!!')
                limpiarInput()
                return
            }
            return amigo
        }
    }
}

// Elimina acentos
function eliminarAcentos(cadena) {
    return cadena.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
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
    //Comprueba arreglo no vacio
    if (amigosArr.length === 0) {
        alert(
            'Lista de amigos vacía. Agregue al menos 1 nombre... aunque ya conocerás el resultado 😒.'
        )
        return
    }

    // Seleccionando amigo secreto de manera aleatoria

    let amigoSecreto = amigosArr[Math.floor(Math.random() * amigosArr.length)]

    let resultado = document.getElementById('resultado')

    listaAmigos.innerHTML = ''

    resultado.innerHTML = `Amigo Secreto: ${amigoSecreto}`
        // resultado !== '' ? `Amigo Secreto: ${amigoSecreto}` : ''
    amigosArr = []

    // Habilitar y deshabilitar botones de reiniciar y sortear

    document.getElementById('btn-sortear').style.display = 'none'

    document.getElementById('btn-reiniciar').style.display = 'flex'

    //Deshabilitar campo input y boton añadir

    let Addbtn = document.getElementById('button-add')
    Addbtn.disabled = true

    let input = document.getElementById('amigo')
    input.disabled = true

    return
}

//Reiniciar juego
const reiniciarJuego = () => {
    document.getElementById('btn-reiniciar').style.display = 'none'

    document.getElementById('btn-sortear').style.display = 'flex'

    document.getElementById('resultado').innerHTML = ''

    // Habilitar campo input y boton añadir
    let input = document.getElementById('amigo')
    input.disabled = false

    let Addbtn = document.getElementById('button-add')
    Addbtn.disabled = false

    limpiarInput()
    return
}

document
    .getElementById('btn-reiniciar')
    .addEventListener('click', reiniciarJuego)
