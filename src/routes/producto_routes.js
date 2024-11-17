const { Router } = require('express')
const { ProductoControllers } = require('../controllers')
const { existsById, validateSchema } = require('../middlewares/middleware')
const { Producto } = require('../models')
const productoSchema = require('../schemas/producto_schemas')
const componenteSchema = require('../schemas/componente_schemas')

const route = Router()
route.get('/', ProductoControllers.getAllProductos)
route.get('/:id', existsById(Producto), ProductoControllers.getProductoById)
route.post('/', validateSchema(productoSchema), ProductoControllers.addProducto)
route.put('/:id', validateSchema(productoSchema), existsById(Producto), ProductoControllers.updateProducto)
route.delete('/:id', existsById(Producto), ProductoControllers.deleteProducto)
route.post('/:id/fabricantes', existsById(Producto), ProductoControllers.associateFabricanteAProductoById)
route.get('/:id/fabricantes', existsById(Producto), ProductoControllers.getAllFabricantesDeProducto)
route.delete('/:id/fabricantes', existsById(Producto), ProductoControllers.deleteAllFabricatesDeProducto)
route.get('/:id/componentes', existsById(Producto), ProductoControllers.getAllComponentesDeProducto)



route.post('/:id/componentes/', validateSchema(componenteSchema), ProductoControllers.addComponente)
route.put('/:id/componentes/:idComponente', existsById(Producto),validateSchema(componenteSchema), ProductoControllers.updateComponente)
route.delete('/:id/componentes/:idComponente', existsById(Producto), ProductoControllers.deleteComponente)


module.exports = route
