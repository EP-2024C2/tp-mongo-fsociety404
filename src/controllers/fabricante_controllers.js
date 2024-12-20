const { Fabricante, Producto } = require('../models')
const controller = {}
const mongoose = require('../db/server').mongoose;



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
        const fabricante = new Fabricante(fabricanteData)
        await fabricante.save()
        res.status(201).send(fabricante)

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
    const fabricante = req.modelo || await Fabricante.findById(req.params.id);
    if(fabricante.productos.length > 0) {
        res.status(500).json({ error: "no se puede eliminar un fabricante si tiene productos asociados" });
        return
    }

    try {
        await Fabricante.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(500).json({ error: error.message });
        return
    }
    res.status(200).json({ message: 'OK' });
}


// obtiene los productos de un fabricante
controller.getAllProductosDeFabricante = async (req, res) => { 
    const fabricante = req.modelo || await Fabricante.findById(req.params.id);
    const fabricantesConproductos = await fabricante.populate({
        path: 'productos',
        select: '-fabricantes -componentes'
    });


    res.status(200).json(fabricantesConproductos);
}

module.exports = controller