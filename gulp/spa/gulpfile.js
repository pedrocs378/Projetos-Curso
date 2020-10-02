const { series, parallel } = require('gulp')
const gulp = require('gulp')

const {
    appCss,
    appHtml,
    appImg,
    appJS
} = require('./gulpTasks/app')
const {
    depsCSS,
    depsFonts
} = require('./gulpTasks/deps')
const {
    monitorarArquivos,
    servidor
} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHtml, appCss, appJS, appImg),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)