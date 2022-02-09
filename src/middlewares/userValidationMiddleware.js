import userSchema from "../schemas/userSchema.js"
import { stripHtml } from "string-strip-html"

export default function userValidationMiddleware(req, res, next){
  const user = {
    name: stripHtml(req.body.name).result.trim(),
    email: stripHtml(req.body.email).result.trim(),
    password: stripHtml(req.body.password).result.trim()
  }

  const validation = userSchema.validate(user)
  if(validation.error)
    return res.status(422).send("Os campos devem ser preenchidos corretamente")

  res.locals.user = user

  next()
}