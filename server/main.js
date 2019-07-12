const express = require("express")
const fs = require("fs").promises
const path = require("path")

const PORT_LISTING = 3000

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/static', express.static('public'));

app.get("/info", (req, res) => {
    getJpegData({publicDirectory: "public"}).then((listOfJpegData) => {
        res.json(listOfJpegData)
    })
})

app.listen(3000, () => {
    console.info(`api server run on port ${PORT_LISTING}`)
})

/**
 * @param {string} publicDirectory
 */
async function getJpegData({publicDirectory}) {
    let listOfJpegData = await {}

    const entries = await fs.readdir(publicDirectory)

    for(const entry of entries) {

        if(! entry.startsWith(".")) {

            const entryPath = publicDirectory + "/" + entry

            const entryStats = await fs.lstat(entryPath)

            if (entryStats.isFile()) {

                const propertyName = entry.split('.').slice(0, -1).join('.')

                if(entryPath.isJpegFile()) {

                    if( listOfJpegData.hasOwnProperty(propertyName) )  listOfJpegData[propertyName].jpgLink = `http://localhost:${PORT_LISTING}/static/${entry}`
                    else            listOfJpegData[propertyName] = {}; listOfJpegData[propertyName].jpgLink = `http://localhost:${PORT_LISTING}/static/${entry}`

                } else if(entryPath.isJsonFile()) {

                    const data = await fs.readFile(entryPath, "utf-8")

                    const jsonData = JSON.parse(data)

                    if( listOfJpegData.hasOwnProperty(propertyName) )  listOfJpegData[propertyName].metadata    = await jsonData
                    else            listOfJpegData[propertyName] = {}; listOfJpegData[propertyName].metadata    = await jsonData


                }
            }

        }
    }



    return listOfJpegData
}

String.prototype.isJpegFile = function() {

    const extensionName = path.extname(this.toString())

    const regex = /jpg|jpeg/gi

    return  regex.test(extensionName)
}

String.prototype.isJsonFile = function() {

    const extensionName = path.extname(this.toString())

    const regex = /json/gi

    return  regex.test(extensionName)
}
