import { Router } from "express"
import { getBooks, addBook } from "../controllers/bookControllers.js"

const bookRouter = Router()

bookRouter.get("/books", getBooks);
bookRouter.post("/books", addBook);

export default bookRouter;