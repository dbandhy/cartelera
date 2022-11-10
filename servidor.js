

const Archivo = require('./contenedor.js')
const express = require('express')
const servidor = express()
const archivo = new Archivo("productos.json")

servidor.get('/', (req, respuesta) => {
    respuesta.json('Bienvenida a la cartelera')
});
servidor.get('/cartelera', async (peticion, respuesta) => {
    const cartelera = await archivo.leer()
    respuesta.json(cartelera)
});

servidor.get('/carteleraRandom', async (peticion, respuesta) => {
    const cartelera = await archivo.leer();
     const maximo = cartelera.length;
    const randomNumber = generarNumero(1, maximo);
    const carteleraRandom = await archivo.getById(randomNumber);
    respuesta.send(carteleraRandom)
});

const generarNumero =
//Math.floor(Math.random()*4)+1;
(min, max) => {
    return Math.floor((Math.random() * (max+1 -min)) + min);
}


function conectar(puerto = 0) {
    return new Promise((resolve, reject) => {
        const servidorConectador = servidor.listen(puerto, () => { 
            resolve(servidorConectador)
            console.log(`conectado al puerto `)
        })
        servidorConectador.on("error", error => reject(error))
    })
}

module.exports =  { conectar }