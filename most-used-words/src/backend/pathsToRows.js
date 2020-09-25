const fs = require('fs')

module.exports = paths => {
    return new Promise((resolve, reject) => {
        try {
            const rows = paths
                .map(path => {
                    return fs.readFileSync(path).toString('utf8')
                })
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
                .split('\n')

            resolve(rows)
        } catch (e) {
            reject(e)
        }
    })
}