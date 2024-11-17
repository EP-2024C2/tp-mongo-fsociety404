// const { Componente, Producto } = require('../models')
// const controller = {}

//obtener tods los componentes
// controller.getAllComponentes = async (req, res) => {
//     try {
//         const componentes = await Componente.find({});
//         res.status(200).json(componentes);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

//obtener componentes por id
// controller.getComponenteById = async (req, res) => {
//     const componente = req.modelo || await Componente.findById(req.params.id);
//     res.status(200).json(componente);
// }

//crear un componente
// controller.addComponente = async (req, res) => {
    // const componenteData = req.body;

    // try {
    //     const componente = new Componente(componenteData)
    //     await componente.save()
    //     res.status(201).send(componente)

    // } catch (error) {
    //     res.status(500).json({ error: `error al intentar crear Componente: "${error}"` })
    // }




// }

//modificar los datos de un componente en particular
// controller.updateComponente = async (req, res) => {
//     const { nombre, descripcion } = req.body;

//     try {
//         const componente = await Componente.findByIdAndUpdate(req.params.id, {
//             nombre,
//             descripcion
//         }, { new: true });
//         res.status(200).json(componente)

//     } catch (error) {
//         res.status(500).json({ error: `error al intentar actualizar Componente: "${error}"` })
//     }
// }

//borrar un componente en particular
// controller.deleteComponente = async (req, res) => {
//     // const componente = req.modelo || await Componente.findByPk(req.params.id);
//     // const cantProductosAsociados = await componente.countProductos()
//     // if(cantProductosAsociados > 0) {
//     //     res.status(400).json({ message: `no se puede eliminar un componente si tiene productos asociados` });
//     //     return
//     // }
//     try {
//         await Componente.findByIdAndDelete(req.params.id );
//         res.status(200).json({ message: 'OK' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// obtiene los productos de un componente
// controller.getAllProductosDeComponente = async (req, res) => {
//     res.status(501).json({ error: "no implementado" });
//     // const idComponente = req.params.id
//     // const componente = await Componente.findByPk(idComponente, {
//     //     include: { model: Producto, as: "Productos" }
//     // });
//     // res.status(200).json(componente);
// }

// module.exports = controller