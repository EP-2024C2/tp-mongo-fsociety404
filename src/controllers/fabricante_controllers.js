const { Fabricante, Producto } = require('../models')
const controller = {}

// obtiene todos los fabricantes
controller.getAllFabricantes = async (req, res) => {
    try {
        const fabricantes = await Fabricante.find({});
        res.status(200).json(fabricantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// obtener fabricantes por id
controller.getFabricanteById = async (req, res) => {
    const fabricante = req.modelo || await Fabricante.findById(req.params.id);
    res.status(200).json(fabricante);
}

// permite crear un fabricante
controller.addFabricante = async (req, res) => {
    const fabricanteData = req.body;
    try {
        const fab = new Fabricante(fabricanteData)
        await fab.save()
        res.status(201).send(fab)

    } catch (error) {
        res.status(500).json({ error: `error al intentar crear: "${error}"` })
    }

}

// permite modificar un fabricante
controller.updateFabricante = async (req, res) => {

    const { nombre, nroContacto, direccion, pathImgPerfil } = req.body

    try {
        const fabricante = await Fabricante.findByIdAndUpdate(req.params.id, {
            nombre,
            nroContacto,
            direccion,
            pathImgPerfil
        }, { new: true });
        res.status(200).json(fabricante)

    } catch (error) {
        res.status(500).json({ error: `error al intentar crear: "${error}"` })
    }
}

// permite eliminar un fabricante
controller.deleteFabricante = async (req, res) => {
    // const fabricante = req.modelo || await Fabricante.findById(req.params.id);
    //const cantProductosAsociados = await fabricante.countProductos()
    // if(cantProductosAsociados > 0) {
    //     res.status(400).json({ message: `no se puede eliminar un fabricante si tiene productos asociados` });
    //     return
    // }

    try {
        await Fabricante.findByIdAndDelete( req.params.id );
        res.status(200).json({ message: 'OK' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// obtiene los productos de un fabricante
controller.getAllProductosDeFabricante = async (req, res) => {
    res.status(501).json({ error: "no implementado" });
    // const idFabricante = req.params.id
    // const fabricante = await Fabricante.findByPk(idFabricante, {
    //     include: { model: Producto, as: "Productos" }
    // });
    // res.status(200).json(fabricante);
}

module.exports = controller