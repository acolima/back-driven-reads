import joi from "joi"

const authSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required()
})

export default authSchema