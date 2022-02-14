import { Router } from "express"
import { getBag, addToCart } from "../controllers/bagControllers.js"
import { validateToken } from "../middlewares/index.js"

const bagRouter = Router()
bagRouter.post("/bag", addToCart);
bagRouter.get("/bag", validateToken, getBag);

export default bagRouter;