module.exports = function (req, res, next) {
    let isHeadless = req.get('is-headless')
    req.isHeadless = !!isHeadless;
    next()
}
