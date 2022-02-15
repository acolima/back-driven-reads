import { Router } from "express";
import { getBook, getBooks } from "../controllers/bookControllers.js"
import { validateToken } from "../middlewares/index.js";

const bookRouter = Router()

bookRouter.use(validateToken)

bookRouter.get("/books", getBooks);
bookRouter.get("/books/:isbn", getBook);

export default bookRouter;