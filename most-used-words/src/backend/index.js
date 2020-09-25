const { ipcMain } = require('electron')

const pathstoRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

ipcMain.on('process-subtitles', (event, paths) => {

    pathstoRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWords => event.reply('process-subtitles', groupedWords))
        .catch(err => console.log(err))

})