import { Router } from "express"
import { getBook } from "../controllers/bookControllers.js"

const bookRouter = Router()

bookRouter.get("/books/:isbn", getBook)

export default bookRouter