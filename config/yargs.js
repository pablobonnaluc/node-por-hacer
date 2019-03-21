const descripcion = {
        demand:true,
        alias: 'd'
    }


const completado = {
        alias:'c',
        default: true
    
}

const argv = require('yargs')
                .command('crear','crea un elemento por hacer',{descripcion})
                .command('actualizar','actualiza el estado completado de una tarea',{
                        descripcion,
                        completado
                })
                .command('listar','Lista todas las tareas')
                .command('borrar','Borra una tarea',{descripcion})
                .help()
                .argv;

module.exports = {
    argv
}
