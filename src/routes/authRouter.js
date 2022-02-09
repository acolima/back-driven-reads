import { Router } from "express"
import signIn from "../controllers/authControllers.js"
import { authValidationMiddleware } from "../middlewares/index.js"

const authRouter = Router()

authRouter.post("/login", authValidationMiddleware, signIn)

export default authRouter