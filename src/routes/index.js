import { Router } from "express"
import userRouter from "./userRouter.js"
import bookRouter from "./bookRouter.js"
import authRouter from "./authRouter.js"
import bookRouter from "./bookRouter.js"

const router = Router()

router.use(userRouter)
router.use(bookRouter)
router.use(authRouter)
router.use(bookRouter)

export default router