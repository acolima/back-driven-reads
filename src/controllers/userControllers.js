import db from "../db.js"
import bcrypt from "bcrypt"

export async function signUp(req, res){
  try{
    const { user } = res.locals
    
    const emailRegistered = await db.collection("users").findOne({email: user.email})
    if(emailRegistered)

    return res.status(409).send("Email já cadastrado")
    
    const password = bcrypt.hashSync(user.password, 10)
    
    db.collection("users").insertOne({...user, password})
    
    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export async function addOrder(req, res) {
  try {
    const { user } = res.locals

    await db.collection("users").updateOne({ _id: user._id }, { $push: { cart: req.body } })

    await db.collection("bag").deleteMany({})

    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}