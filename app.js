const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors')


let comando = argv._[0]


switch(comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);

        //console.log(tarea);
        break

    case 'listar':
        const listado = porHacer.getListado()
        for(let tarea of listado){

          console.log(`Tarea : ${tarea.descripcion}`.green)
            if(tarea.completado){
                console.log(`Completada?: ${tarea.completado}`.green);
            }
            else{console.log(`Completada?: ${tarea.completado}`.red);
        }
        }
        break

    case 'actualizar':
        porHacer.actualizarListado(argv.descripcion, argv.completado)
        break

    case 'borrar':
        let borrado = porHacer.borrarTarea(argv.descripcion) 
        console.log(borrado);
        break   

    default:
        console.log('comando no reconodido');
        }

        


