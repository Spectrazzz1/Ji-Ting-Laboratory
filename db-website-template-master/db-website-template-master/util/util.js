function getTemplateDir(isHeadless, page) {
    if (isHeadless) {
        return 'screens/headless/' + page
    } else {
        return 'screens/full/' + page
    }
}

module.exports = {
    getTemplateDir
}
