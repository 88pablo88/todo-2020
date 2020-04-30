const fs = require('fs')

let listadoPorHacer = []

const grabarDB = () =>{
  
    const listadoPorHacerUpdated = JSON.stringify(listadoPorHacer)

    fs.writeFile('DB/data.json', listadoPorHacerUpdated, (err)=>{
        if(err){
           throw new Error('no se pudo grabar', err)
        }

    })

}


 const cargarDb = ()=>{
     listadoPorHacer = require('../DB/data.json') 
    }

const crear = (descripcion)=>{  //esta funcion de crear tarea recibe la tareas desde app.js 

    try{
        cargarDb()                //carga la base de datos (nuestro listado de tareas) 
    }catch{                                           //y lo guarda en nuestro array para no sobre escribir al grabar la db              
        listadoPorHacer = []                           
    }

    const tarea = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(tarea)                      //actualizamos nuestro array de tareas

    grabarDB()                                       //ejecutamos grabar db que sobre escribe el archivo json con uno nuevo formado por el array actualizado       

    return tarea
}

const getListado = ()=>{
    cargarDb()
    return listadoPorHacer;
}


const actualizarListado = (descripcion, completado=true)=>{

    cargarDb();

    let indexTarea =  listadoPorHacer.findIndex((tarea)=>{
        return tarea.descripcion === descripcion
    }) 

    if(indexTarea >= 0){
        listadoPorHacer[indexTarea].completado = completado
        grabarDB()
    }
    else{
        console.log('no existe esta tarea');

    }

}

const borrarTarea = (descripcion)=>{
    cargarDb();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion}
        )

      
    
        if(nuevoListado.length === listadoPorHacer.length){
            return false
        }
        else{
            listadoPorHacer = nuevoListado

            grabarDB()
            return true
        } 

    



}


module.exports = {
    crear,
    getListado,
    actualizarListado,
    borrarTarea
}