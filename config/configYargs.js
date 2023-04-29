const { check } = require('yargs');

const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    demandOption: true,
                    type: 'numbr',
                    describe:'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'Listar',
                    demandOption:false,
                    type: 'boolean',
                    describe: 'Listar las tablas de multiplicar',
                    default: false
                })
                .option('h',{
                    alias: 'Hasta',
                    demandOption:false,
                    type:'number',
                    describe:'Define hasta donde implementar el limite',
                    default:10
                })
                .check((argv,option)=>{
                    console.log('yargs',argv);
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;
module.exports = argv;