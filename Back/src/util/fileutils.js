const fs = require('fs');

function deleteFile(file) {
    let path = `./${file}`

    fs.stat(path, (error, stats) => {
        if (error) console.error(error)
        fs.unlink(path, (err) => {
            if (err) console.error(err)
        })
    })
}

module.exports = deleteFile