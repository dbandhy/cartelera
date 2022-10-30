const fs = require('fs')

const { randomUUID } = require('crypto')


class Contenedor {
    #elementos
    constructor() {
        this.#elementos = []
    }

    guardar(elemento) {
        this.#elementos.push(elementos)
    }

    recuperarTodo() {
        return this.#elementos
    }

    obtenerID() {
        return id
    }
}

class ContenedorArchivo {
    #elementos
    #ruta
    constructor(ruta) {
        this.#ruta = ruta
        this.#elementos = []
        
    }

    async guardar(elemento) {
        this.#elementos.push(elemento)
        await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#elementos))
    }

    async recuperarTodo() {
        this.#elementos =  JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8'))
        return this.#elementos
    }

    async leerTodo() {
        await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#elementos))
        JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8'))
    }

    // async recuperarId() {
    
}

async function test() {

    const rutaArchivo = './elementos.txt'
    await fs.promises.writeFile(rutaArchivo, '[]')
    
    
    const contenedor = new ContenedorArchivo (rutaArchivo)

    await contenedor.guardar({
        id: randomUUID(),
        pelicula: "Argentina 1985"
    })
    
    await contenedor.guardar({
        id: randomUUID(),
        pelicula: "Contactados"
        
    })

    await contenedor.guardar({
        id: randomUUID(),
        pelicula: "Hollywood1212"
        
    })

    await contenedor.recuperarTodo()
    await contenedor.leerTodo()
    // await contenedor.recuperarId()
    
}

test()