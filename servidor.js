
const express = require('express')

const servidor = express()

servidor.get('/cartelera', (peticion, respuesta) => {
    respuesta.json('Todas las películas disponibles')
})

servidor.get('/carteleraRandom', (peticion, respuesta) => {
    respuesta.send('Película escogida al azar')
})

function conectar(puerto = 0) {
    return new Promise((resolve, reject) => {
        const servidorConectador = servidor.listen(puerto, () => { 
            resolve(servidorConectador)//console.log(`conectado al puerto `)
        })
        servidorConectador.on("error", error => reject(error))
    })
}

module.exports =  { conectar }