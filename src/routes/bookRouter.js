import { Router } from "express"
import { getBooks, searchBook, getBook } from "../controllers/bookControllers.js"

const bookRouter = Router()

bookRouter.get("/books", getBooks);
bookRouter.get("/search/:text", searchBook);
bookRouter.get("/books/:isbn", getBook);

export default bookRouter;