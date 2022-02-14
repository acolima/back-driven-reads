import { Router } from "express"
import { signUp, addOrder } from "../controllers/userControllers.js"
import { userValidationMiddleware, validateToken } from "../middlewares/index.js"

const userRouter = Router()

userRouter.post("/sign-up", userValidationMiddleware, signUp)
userRouter.put("/add-order", validateToken, addOrder)

export default userRouter