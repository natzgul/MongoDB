const mongoDbClient = require('./mongo.connecter')

const app = require('express')()
const users = require('./user')

const bodyParser = require("body-parser")

mongoDbClient.init()
.then(client => {
    app.use(bodyParser.json())
    app.use('/users', users)

    app.get('/', (req, res) => {
        res.send('Hello world !')
    })
    
    app.listen(8080, () => {
         console.log('App listening on port 8080')
    })

}).catch(err => { throw err })