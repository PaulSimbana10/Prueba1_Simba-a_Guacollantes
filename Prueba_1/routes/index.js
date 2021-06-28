//traemos el paquete
const {Router} = require('express');
const data = require

//iniciamos router
const router = Router();

//correccion de los endpoint
router
    .get("/per-par/:id", (req, res) => {
        var id
        const { params:{id}} = req;

    })
    .get("/array/:users", (req, res) => {
        res.json
        ("Lista de usuarios");
    })
    .get("/numpagina/:persona",(req, res) => {

        //console.log(req.query);
        const { query: {nombre, apellido} } = req;
    
        //const nombre = req.query.nombre;
        //const apellido = req.query.apellido;
    
        res.json({
            saludo: `Hola soy ${nombre} ${apellido}`
        });
    
    })
    .get('/genero/numpagina:persona', (req, res) => {

        const { params: {nombre} } = req;
        res.json({
            nombre: nombre
        })
    });




//crear un nuevo archivo de rutas
module.exports.RouterIndex = router

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }

