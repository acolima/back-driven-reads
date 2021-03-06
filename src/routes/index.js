import { Router } from "express"
import userRouter from "./userRouter.js"
import authRouter from "./authRouter.js"
import bagRouter from "./bagRouter.js"
import bookRouter from "./bookRouter.js"

const router = Router()

router.use(userRouter)
router.use(authRouter)
router.use(bagRouter)
router.use(bookRouter)

export default router