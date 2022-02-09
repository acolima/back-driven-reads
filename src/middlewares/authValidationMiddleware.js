import authSchema from "../schemas/authSchema.js"
import { stripHtml } from "string-strip-html"

export default function authValidationMiddleware(req, res, next){
  const userAuth = {
    email: stripHtml(req.body.email).result.trim(),
    password: stripHtml(req.body.password).result.trim()
  }

  const validation = authSchema.validate(userAuth)
  if(validation.error)
    return res.status(422).send("Os campos devem ser preenchidos corretamente")

  res.locals.userAuth = userAuth

  next()
}
