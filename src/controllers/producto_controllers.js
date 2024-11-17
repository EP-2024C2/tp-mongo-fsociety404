const { Producto, Fabricante, Componente } = require('../models');
const { description } = require('../schemas/producto_schemas');

const controller = {}

//obtener tods los productos
controller.getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.find({});
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//obtener productos por id
controller.getProductoById = async (req, res) => {
    const producto = req.modelo || await Producto.findById(req.params.id);
    res.status(200).json(producto);
}

//crear un producto
controller.addProducto = async (req, res) => {

    const productoData = req.body;
    try {
        const producto = new Producto(productoData)
        await producto.save()
        res.status(201).send(producto)

    } catch (error) {
        res.status(500).json({ error: `error al intentar crear Producto: "${error}"` })
    }
}

//modificar los datos de un producto en particular
controller.updateProducto = async (req, res) => {

    const { nombre, descripcion, precio, pathImg } = req.body;
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, {
            nombre,
            descripcion,
            precio,
            pathImg
        }, { new: true });
        res.status(200).json(producto)

    } catch (error) {
        res.status(500).json({ error: `error al intentar actualizar Producto: "${error}"` })
    }
}

//borrar un producto en particular
controller.deleteProducto = async (req, res) => {
    const producto = req.modelo || await Producto.findById(req.params.id);
    if(producto.componentes.length > 0) {
        res.status(500).json({ error: "no se puede eliminar un producto si tiene componentes asociados" });
        return
    }

    if(producto.fabricantes.length > 0) {
        res.status(500).json({ error: "no se puede eliminar un producto si tiene componentes asociados" });
        return
    }

    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'OK' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// asigna fabricante a un producto
controller.associateFabricanteAProductoById = async (req, res) => {
    const producto = req.modelo || await Producto.findById(req.params.id);

    const fabricantes = req.body;
    if (!Array.isArray(fabricantes)) {
        return res.status(500).json({ error: `se espera una lista de IDs de fabricantes` })
    }

    const fabricantesALiberar = producto.fabricantes.filter(f => !fabricantes.some((p) => f._id.equals(p)));
    const fabricantesAAgregar = fabricantes.filter(p => !producto.fabricantes.some((f) => f._id.equals(p)));
    try {

        // liberamos los fabricantes
        for (const idFabricante of fabricantesALiberar) {
            await Fabricante.updateOne(
                { _id: idFabricante },
                { $pull: { productos: producto._id } },
            );
            await Producto.updateOne(
                { _id: producto._id },
                { $pull: { fabricantes: idFabricante } },
            );
        }

        // asignamos fabricantes
        for (const idFabricante of fabricantesAAgregar) {

            const fabricante = await Fabricante.findById(idFabricante)
            if (!fabricante) {
                return res.status(404).json({ error: `no se encontró un fabricante con el id '${idFabricante}'` });
            }


            fabricante.productos.push(producto._id)
            await fabricante.save()

            producto.fabricantes.push(idFabricante)
        }
        await producto.save()
    } catch (err) {
        const msg = `error al asignar fabricantes a un producto: '${err}'`
        console.error(msg)
        return res.status(500).json({ error: msg })
    }

    res.status(200).json({ message: 'OK' });
}


// obtiene los fabricantes de un producto
controller.getAllFabricantesDeProducto = async (req, res) => {
    const idProducto = req.modelo || await Producto.findById(req.params.id);
    const fabricantes = await idProducto.populate({
        path: 'fabricantes',
        select: '-productos'
    });

    idProducto.componentes = undefined

    res.status(200).json(fabricantes);

}

// elimina la asociacion de fabricantes de un producto
controller.deleteAllFabricatesDeProducto = async (req, res) => {
    const producto = req.modelo || await Producto.findById(req.params.id);

    try {
        for (const idFabricante of producto.fabricantes) {
            await Fabricante.updateOne(
                { _id: idFabricante },
                { $pull: { productos: producto._id } },
            );
            await Producto.updateOne(
                { _id: producto._id },
                { $pull: { fabricantes: idFabricante } },
            );
        }
    
    } catch(e) {
        return res.status(500).json({ error: `error al eliminar asociación: ${e}` })
    }
    res.status(200).json({ message: 'OK' });
}



// asigna componentes a un producto
controller.associateComponenteAProductoById = async (req, res) => {
    const producto = req.modelo || await Producto.findById(req.params.id);

    const componentes = req.body;
    if (!Array.isArray(componentes)) {
        return res.status(500).json({ error: `se espera una lista de IDs de componentes` })
    }

    const componentesALiberar = await producto.componentes.filter(f => !componentes.some((p) => f._id.equals(p)));
    const componentesAAgregar = await componentes.filter(p => !producto.componentes.some((f) => f._id.equals(p)));
    try {

        // liberamos los componentes
        for (const idComponente of componentesALiberar) {
            console.log(idComponente)
            await Componente.updateOne(
                { _id: idComponente },
                { $pull: { productos: producto._id } },
            );
            await Producto.updateOne(
                { _id: producto._id },
                { $pull: { componentes: idComponente } },
            );
        }

        // asignamos componentes
        for (const idComponente of componentesAAgregar) {

            const componente = await Componente.findById(idComponente)
            if (!componente) {
                return res.status(404).json({ error: `no se encontró un componente con el id '${idComponente}'` });
            }

            componente.productos.push(producto._id)
            await componente.save()

            producto.componentes.push(idComponente)
        }
        await producto.save()
    } catch (err) {
        const msg = `error al asignar componentes a un producto: '${err}'`
        console.error(msg)
        return res.status(500).json({ error: msg })
    }

    res.status(200).json({ message: 'OK' });
}

// obtiene los componentes de un producto
controller.getAllComponentesDeProducto = async (req, res) => {
    const idProducto = req.modelo || await Producto.findById(req.params.id);
    const componentes = await idProducto.populate({
        path: 'componentes',
        select: '-productos' 
    });

    // res.status(200).json(producto);

}


controller.addComponente = async (req, res) => {

    const productoId = req.params.id
    try {
        const producto = await Producto.findByIdAndUpdate(
            productoId,
            { $push: { componentes: req.body } },  
            { new: true }  
        )
        res.status(201).json(producto.componentes[producto.componentes.length - 1])
    } catch (error) {
        res.status(500).json({ error: `error al intentar crear Componente: "${error}"` })
    }
}


controller.updateComponente = async (req, res) => { 
    const componenteId = req.params.idComponente; 
    const producto = req.modelo || await Producto.findById(req.params.id);
    const {nombre, descripcion} = req.body

    try {
        const componenteDeProducto = producto.componentes.id(componenteId)

        if (!componenteDeProducto) {
            return res.status(404).json({ mensaje: 'no se encontro el componente del producto' });
        }
        componenteDeProducto.nombre =  nombre
        componenteDeProducto.descripcion = descripcion
        producto.save()

        res.status(200).json(componenteDeProducto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Error al intentar actualizar Componente: "${error.message}"` });
    }
}

controller.deleteComponente = async(req, res) =>{
    const producto = req.modelo || await Producto.findById(req.params.id);
    const componenteId = req.params.idComponente; 
    
    try{
        const componenteDeProducto = producto.componentes.id(componenteId)

        if (!componenteDeProducto) {
            return res.status(404).json({ mensaje: 'no se encontro el componente del producto' });
        }
        
        producto.componentes = producto.componentes.filter(c => {
            return c._id != componenteDeProducto._id
        })
        producto.save()
        
    }catch(error){
        res.status(500).json({ error: `Error al intentar eliminar Componente: "${error.message}"` });
        return
    }
    res.status(200).json("OK")
}

module.exports = controller