import { Router } from "express"
import { getBag, sendToBag } from "../controllers/bagControllers.js"

const bagRouter = Router()
bagRouter.post("/bag", sendToBag);
bagRouter.get("/bag", getBag);

export default bagRouter;