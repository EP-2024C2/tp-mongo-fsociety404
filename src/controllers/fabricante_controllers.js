const { Fabricante, Producto } = require('../models')
const controller = {}

// obtiene todos los fabricantes
controller.getAllFabricantes = async (req, res) => {
    res.status(501).json({ error : "no implementado" });
    // try {
    //     const fabricantes = await Fabricante.findAll();
    //     res.status(200).json(fabricantes);
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
}

// obtener fabricantes por id
controller.getFabricanteById = async (req, res) => {
    res.status(501).json({ error : "no implementado" });
    // const fabricante = req.modelo || await Fabricante.findByPk(req.params.id);
    // res.status(200).json(fabricante);
}

// permite crear un fabricante
controller.addFabricante = async (req, res) => {
    res.status(501).json({ error : "no implementado" });
    // const fabricante = req.body;
    // try {
    //     const resultado = await Fabricante.create({
    //         nombre: fabricante.nombre,
    //         direccion: fabricante.direccion,
    //         numeroContacto: fabricante.numeroContacto,
    //         pathImgPerfil: fabricante.pathImgPerfil,
    //     })
    //     res.status(201).send(resultado)

    // } catch (error) {
    //     res.status(500).json({ error: `error al intentar crear: "${error}"` })
    // }
}

// permite modificar un fabricante
controller.updateFabricante = async (req, res) => {
    res.status(501).json({ error : "no implementado" });
    // const fabricanteActualizado = req.body;
    // try {
    //     await Fabricante.update({
    //         nombre: fabricanteActualizado.nombre,
    //         direccion: fabricanteActualizado.direccion,
    //         numeroContacto: fabricanteActualizado.numeroContacto,
    //         pathImgPerfil: fabricanteActualizado.pathImgPerfil,
    //     }, { where: { id: req.params.id } })
    //     const fabricanteModificado = await Fabricante.findByPk(req.params.id);
    //     res.status(200).json(fabricanteModificado)

    // } catch (error) {
    //     res.status(500).json({ error: `error al intentar crear: "${error}"` })
    // }
}

// permite eliminar un fabricante
controller.deleteFabricante = async (req, res) => {
    res.status(501).json({ error : "no implementado" });
    // const fabricante = req.modelo || await Fabricante.findByPk(req.params.id);
    // const cantProductosAsociados = await fabricante.countProductos()
    // if(cantProductosAsociados > 0) {
    //     res.status(400).json({ message: `no se puede eliminar un fabricante si tiene productos asociados` });
    //     return
    // }

    // try {
    //     await Fabricante.destroy({ where: { id: req.params.id } });
    //     res.status(200).json({ message: 'OK' });
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
}


// obtiene los productos de un fabricante
controller.getAllProductosDeFabricante = async (req, res) => {
    res.status(501).json({ error : "no implementado" });
    // const idFabricante = req.params.id
    // const fabricante = await Fabricante.findByPk(idFabricante, {
    //     include: { model: Producto, as: "Productos" }
    // });
    // res.status(200).json(fabricante);
}

module.exports = controller