import db from "../db.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

export async function signIn(req, res){
  try{
    const { userAuth } = res.locals
  
    const userRegistered = await db.collection("users").findOne({email: userAuth.email})
    if(!userRegistered)
      return res.status(401).send("Email e/ou senha incorretos")

    if(!bcrypt.compareSync(userAuth.password, userRegistered.password))
      return res.status(401).send("Email e/ou senha incorretos")

    const token = uuid()
    const name = userRegistered.name;
    await db.collection("sessions").insertOne({ token, userId: userRegistered._id })

    const auth = {
      token,
      name
    };

    res.send({ auth })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}