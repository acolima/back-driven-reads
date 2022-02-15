import { Router } from "express"
import { getBag, addToCart, deleteBag } from "../controllers/bagControllers.js"
import { validateToken } from "../middlewares/index.js"

const bagRouter = Router()
bagRouter.post("/bag", addToCart);
bagRouter.get("/bag", validateToken, getBag);
bagRouter.delete("/bag", deleteBag)

export default bagRouter;