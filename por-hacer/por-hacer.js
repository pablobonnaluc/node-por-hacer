
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () =>{

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data , (err) => {
        if (err) {
            throw new Error ("No se pudo grabar",err);
        } 
    });
}

const cargarDB = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    }
    catch (error){
        listadoPorHacer = [];
    }
    
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = ( descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado:false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const actualizar = ( descripcion , completado = true ) =>{

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if (index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    } else{
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();

    /* OPCION 1 */
    let nuevolistado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    })

    if ( nuevolistado.length == listadoPorHacer.length){
        return false;
    } else {
        listadoPorHacer = nuevolistado;
        guardarDB();

        return true
    }


    /* OPCION 2 */

    /*let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if (index >= 0){
        let tarea = listadoPorHacer.splice(index,1);
        
        guardarDB();
        return true
    } else{
        return false;
    }*/

}

module.exports ={
    crear,
    getListado,
    actualizar,
    borrar
}