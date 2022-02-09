import db from "../db.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

async function signIn(req, res){
  try{
    const { userAuth } = use.locals

    const userRegistered = await db.collection("users").findOne({email: userAuth.email})
    if(!userRegistered)
      return res.status(401).send("Email e/ou senha incorretos")

    if(!bcrypt.compareSync(userAuth.password, userRegistered.password))
      return res.status(401).send("Email e/ou senha incorretos")

    const token = uuid()
    db.collection("sessions").insertOne({token, userId: userRegistered._id})

    res.send({token})
  } catch {
    res.sendStatus(500)
  }
}

export default signIn