const existsById = (Model) => {
    return async (req, res, next) => {
        const id = req.params.id
        const modelName = Model.modelName
        const model = await Model.findById(id)
        if (!model) {
            return res.status(404).json({
                message: `El ${modelName} con id ${id} no fue encontrado`
            })
        }
        req.modelo = model
        next()
    }
}

const validateSchema = (schema) => {
    return async (req, res, next) => {
        const result = schema.validate(req.body, { abortEarly: false })
        if (result.error) {
            return res.status(400).json(
                {
                    errores: result.error.details.map(error => ({
                        error: error.message
                    })
                    )
                }
            )
        }
        next()
    }
}


module.exports = { existsById, validateSchema }