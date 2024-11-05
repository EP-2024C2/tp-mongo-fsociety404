const { Componente, Producto } = require('../models')
const controller = {}

//obtener tods los componentes
controller.getAllComponentes = async (req, res) => {
    res.status(501).json({ error : "no implementado" });

    // try {
    //     const componentes = await Componente.findAll();
    //     res.status(200).json(componentes);
    // } catch (error) {
    //     res.status(500).json({ error : error.message });
    // }
}

//obtener componentes por id
controller.getComponenteById = async (req, res) => {
    res.status(501).json({ error : "no implementado" });
    // const componente = req.modelo || await Componente.findByPk(req.params.id);
    // res.status(200).json(componente);
}

//crear un componente
controller.addComponente = async (req, res) => {
    res.status(501).json({ error : "no implementado" });

    // const componente = req.body;

    // try {
    //     const resultado = await Componente.create({
    //         nombre: componente.nombre,
    //         descripcion: componente.descripcion
    //     })
    //     res.status(201).send(resultado)

    // } catch (error) {
    //     res.status(500).json({ error : `error al intentar crear Componente: "${error}"` })
    // }
}

//modificar los datos de un componente en particular
controller.updateComponente = async (req, res) => {
    res.status(501).json({ error : "no implementado" });
    // const componenteActualizado = req.body;
    // try {
    //     await Componente.update({
    //         nombre: componenteActualizado.nombre,
    //         descripcion: componenteActualizado.descripcion
    //     }, { where: { id: req.params.id } })
    //     const componenteModificado = await Componente.findByPk(req.params.id);
    //     res.status(200).json(componenteModificado)

    // } catch (error) {
    //     res.status(500).json({ error: `error al intentar actualizar Componente: "${error}"` })
    // }
}

//borrar un componente en particular
controller.deleteComponente = async (req, res) => {
    res.status(501).json({ error : "no implementado" });
    // const componente = req.modelo || await Componente.findByPk(req.params.id);
    // const cantProductosAsociados = await componente.countProductos()
    // if(cantProductosAsociados > 0) {
    //     res.status(400).json({ message: `no se puede eliminar un componente si tiene productos asociados` });
    //     return
    // }
    // try {
    //     await Componente.destroy({ where: { id: req.params.id } });
    //     res.status(200).json({ message: 'OK' });
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
}

// obtiene los productos de un componente
controller.getAllProductosDeComponente = async (req, res) => {
    res.status(501).json({ error : "no implementado" });
    // const idComponente = req.params.id
    // const componente = await Componente.findByPk(idComponente, {
    //     include: { model: Producto, as: "Productos" }
    // });
    // res.status(200).json(componente);
}

module.exports = controller