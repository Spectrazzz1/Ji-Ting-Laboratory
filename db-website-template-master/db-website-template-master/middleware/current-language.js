const locales = require('../data/locales')

const supported = Object.keys(locales.supported)

let r = "^\/(({locales})(\\/){0,1})"
r = r.replace("{locales}", supported.join("|"))

const regex = new RegExp(r);

module.exports = function (req, res, next) {
    let matches = req.url.match(regex)

    let locale = locales.default
    if (matches && supported.includes(matches[2])) {
        locale = matches[2]
        req.langHref = '/' + locale
    }

    req.lang = locale
    next()
}
