import { Router } from "express"
import { signUp } from "../controllers/userControllers.js"
import { userValidationMiddleware } from "../middlewares/index.js"

const userRouter = Router()

userRouter.post("/sign-up", userValidationMiddleware, signUp)

export default userRouter