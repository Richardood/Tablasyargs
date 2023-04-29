const argv = require('./config/configYargs.js');
const { crearArchivo } = require('./helpers/crearArchivo.js');




console.clear();
crearArchivo(argv.b,argv.l,argv.h)
    .then(console.log)
    .catch(console.warn);
