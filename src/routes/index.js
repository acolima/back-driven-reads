import { Router } from "express"
import userRouter from "./userRouter.js"
<<<<<<< HEAD
import bookRouter from "./bookRouter.js"
=======
import authRouter from "./authRouter.js"
>>>>>>> main

const router = Router()

router.use(userRouter)
<<<<<<< HEAD
router.use(bookRouter)
=======
router.use(authRouter)
>>>>>>> main

export default router