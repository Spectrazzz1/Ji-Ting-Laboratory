const express = require('express');
const router = express.Router();

const data = require('../data/data')
const locales = require('../data/locales')
const {getTemplateDir} = require("../util/util");

let regexBase = "^\\/(({locales})(\\/)*){0,1}{path}$"
regexBase = regexBase.replace("{locales}", Object.keys(locales.supported).join("|"))

router.get(new RegExp(regexBase.replace('{path}', '')), (req, res) => {
    res.render(getTemplateDir(req.isHeadless, 'index'), {
        lang: req.lang,
        langPath: req.langHref,
        nav: data.nav,
        locales: locales.supported,
        page: "home",
        text: "Home"
    });
});

router.get(new RegExp(regexBase.replace('{path}', 'page-1')), (req, res) => {
    res.render(getTemplateDir(req.isHeadless, 'index'), {
        lang: req.lang,
        langPath: req.langHref,
        nav: data.nav,
        locales: locales.supported,
        page: "page-1",
        text: "Page 1"
    });
});

router.get(new RegExp(regexBase.replace('{path}', 'page-2')), (req, res) => {
    res.render(getTemplateDir(req.isHeadless, 'index'), {
        lang: req.lang,
        langPath: req.langHref,
        nav: data.nav,
        locales: locales.supported,
        page: "page-2",
        text: "Page 2"
    });
});

router.get(new RegExp(regexBase.replace('{path}', 'sub-pages/sub-page-1')), (req, res) => {
    res.render(getTemplateDir(req.isHeadless, 'index'), {
        lang: req.lang,
        langPath: req.langHref,
        nav: data.nav,
        locales: locales.supported,
        page: "sub-pages/sub-page-1",
        text: "Sub Page 1"
    });
});

router.get(new RegExp(regexBase.replace('{path}', 'sub-pages/sub-page-2')), (req, res) => {
    res.render(getTemplateDir(req.isHeadless, 'index'), {
        lang: req.lang,
        langPath: req.langHref,
        nav: data.nav,
        locales: locales.supported,
        page: "sub-pages/sub-page-2",
        text: "Sub Page 2"
    });
});

module.exports = router;
