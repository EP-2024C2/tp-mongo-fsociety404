const { Router } = require('express')
const { ProductoControllers } = require('../controllers')
const { existsById, validateSchema } = require('../middlewares/middleware')
const { Producto } = require('../models')
const productoSchema = require('../schemas/producto_schemas')

const route = Router()
route.get('/', ProductoControllers.getAllProductos)
route.get('/:id', existsById(Producto), ProductoControllers.getProductoById)
route.post('/', validateSchema(productoSchema), ProductoControllers.addProducto)
route.put('/:id', validateSchema(productoSchema), existsById(Producto), ProductoControllers.updateProducto)
route.delete('/:id', existsById(Producto), ProductoControllers.deleteProducto)
route.post('/:id/fabricantes', existsById(Producto), ProductoControllers.associateFabricanteAProductoById)
route.get('/:id/fabricantes', existsById(Producto), ProductoControllers.getAllFabricantesDeProducto)
route.delete('/:id/fabricantes', existsById(Producto), ProductoControllers.deleteAllFabricatesDeProducto)
route.post('/:id/componentes', existsById(Producto), ProductoControllers.associateComponenteAProductoById)
route.get('/:id/componentes', existsById(Producto), ProductoControllers.getAllComponentesDeProducto)
route.delete('/:id/componentes', existsById(Producto), ProductoControllers.deleteAllComponentesDeProducto)

route.get('/:id/componente/:id', existsById(Producto), ProductoControllers.getComponenteById)
route.post('/:id/componente/', existsById(Producto), ProductoControllers.addComponente)
route.put('/:id/componente/:id', existsById(Producto), ProductoControllers.updateComponente)


module.exports = route
