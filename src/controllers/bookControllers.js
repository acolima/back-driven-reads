import db from "../db.js"

export async function getBook(req, res) {
  const { isbn } = req.params

  try {
    const book = await db.collection("books").findOne({ ISBN: isbn })
    res.send(book)
  } catch {
    res.sendStatus(500)
  }
};

export async function getBooks(req, res) {
  try {
    const books = await db.collection("books").find({}).toArray();

    res.send(books)
  } catch {
    res.sendStatus(500)
  }
};