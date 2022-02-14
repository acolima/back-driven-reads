import { Router } from "express";
import { getBook, getBooks, addBook, searchBook, sendToBag, getBag } from "../controllers/bookControllers.js"

const bookRouter = Router()

bookRouter.get("/books", getBooks);
bookRouter.post("/search", searchBook);
bookRouter.post("/books", addBook);
bookRouter.post("/bag", sendToBag);
bookRouter.get("/bag", getBag);
bookRouter.get("/books/:isbn", getBook);

export default bookRouter;