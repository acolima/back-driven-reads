import "./setup.js"
import { MongoClient } from "mongodb"

const mongoClient = new MongoClient(process.env.MONGO_URI)

await mongoClient.connect()

const db = mongoClient.db("DrivenReads")

export default db