function validateBody(schema) {
    return function (req, res, next) {
        try {
            console.log("body",req.body);
            Joi.assert(req.body, schema, {abortEarly: false})
            next();
        } catch (err) {
            console.log("error",err);
            next(err);
        }
    }
}