import db from "../db.js"

export async function getBook(req, res) {
  const { isbn } = req.params

  try {
    const book = await db.collection("books").findOne({ ISBN: isbn })
    res.send(book)
  } catch {
    res.sendStatus(500)
  }
}

export async function getBooks(req, res) {
  try {
    const books = await db.collection("books").find({}).toArray();

    res.send(books)
  } catch {
    res.sendStatus(500)
  }
};

export async function addBook(req, res) {
  try {
    const book = req.body;
    db.collection("books").insertOne({ ...book })

    res.sendStatus(201)
  } catch {
    res.sendStatus(500)
  }
}

export async function searchBook(req, res) {
  try {
    const book = req.body;
    console.log(book.search);
    const allBooks = await db.collection("books").find({}).toArray();

    allBooks.filter((book) => book == book)
    console.group(allBooks);


    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}

export async function sendToBag(req, res) {
  try {
    const book = req.body;

    db.collection("bag").insertOne({ ...book });
    res.sendStatus(201)
  } catch {
    res.sendStatus(500);
  }
}

export async function getBag(req, res) {
  try {
    let total = 0;
    const bag = db.collection("bag").find({}).toArray();
    for (let i = 0; i < bag.lenght; i++) {
      total += bag.price;
    }

    res.send({ bag, total });

  } catch {
    res.sendStatus(500);
  }
}