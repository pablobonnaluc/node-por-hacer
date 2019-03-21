

const argv = require ('./config/yargs').argv;
var colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch ( comando ){
    case "crear":
        let tareaPorHacer = porHacer.crear(argv.descripcion)
        console.log(tareaPorHacer);
        break;
    case "listar":
        let listado = porHacer.getListado();
        for (let tarea of listado){
            console.log("======Tarea por Hacer=========".red);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log("==============================".red);
        }
        // console.log("Mostrar todas las tareas por hacer");
        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
        break;
    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("comando no es reconocido");
}