const MongoClient = require('mongodb').MongoClient

//Connection URL 
const url = "mongodb://localhost:27017"

//Database name
const dbname = 'db'

//Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true})

class MongoConnector{
    init() {
        return new Promise((resolve, reject)=>{
            client.connect()
            .then(connectedClient => {
                this.db = connectedClient.db(dbname)
                console.log("Connected successfully to server")
                resolve(connectedClient)
            }) 
            .catch(err => {
                console.error("Failed to connect ton server")
                throw err
            })
        })
    }
}
const connector = new MongoConnector();
module.exports = connector;