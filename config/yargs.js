
const descripcion = {

    alias: 'd',
    demand: true,
    desc: 'descripcion de la tarea por hacer'

} 

const completado = {

    alias: 'c',
    default: true,
    desc: 'marca como completado la tarea'

}


const argv = require('yargs')
.command('crear', 'Crea una tarea', {
    descripcion
})
.command('actualizar', "Actualiza listado de tareas",{
    descripcion,
    completado

})
.command('borrar', 'borra la tarea elegida', {
    descripcion
})
.help().argv


module.exports = {
    argv
}