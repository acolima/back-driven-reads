import { Router } from "express"
import { getBooks, searchBook } from "../controllers/bookControllers.js"

const bookRouter = Router()

bookRouter.get("/books", getBooks);
bookRouter.post("/search", searchBook);

export default bookRouter;