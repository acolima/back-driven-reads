import { Router } from "express"
import { getBooks, addBook, searchBook, sendToBag, getBag } from "../controllers/bookControllers.js"

const bookRouter = Router()

bookRouter.get("/books", getBooks);
bookRouter.post("/search", searchBook);
bookRouter.post("/books", addBook);
bookRouter.post("/bag", sendToBag);
bookRouter.get("/bag", getBag);

export default bookRouter;