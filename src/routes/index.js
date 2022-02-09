import { Router } from "express"
import userRouter from "./userRouter.js"
import bookRouter from "./bookRouter.js"

const router = Router()

router.use(userRouter)
router.use(bookRouter)

export default router