////CONFIGURACION
//agrupar opciones en común en la variable opc
let opc = {
        base: {
            //es un valor requerido
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            //valor por defecto en caso de no enviarlo
            default: 10
        }
    }
    //forma optimizada de añadir comandos
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opc)
    .command('crear', 'Crea un archivo de la tabla multiplicar', opc)
    .help()
    .argv
    //exportar módulo
module.exports = {
    argv
}