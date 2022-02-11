import db from "../db.js"

export async function getBook(req, res) {
  const { isbn } = req.params

  try {
    const book = await db.collection("books").findOne({ ISBN: isbn })

    res.status(200).send(book)
  } catch {
    res.sendStatus(500)
  }
}