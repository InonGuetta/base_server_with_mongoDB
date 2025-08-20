export function validateMiddlewares(req, res, next) {
    const header = req.headers['x-key-play'];
    if(!header || header.trim() === ''){
        return res.status(401).json({'msg':'Missing or empty x-key-play header'})
    }
    next()
}