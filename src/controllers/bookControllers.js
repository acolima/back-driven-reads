import db from "../db.js"

export async function getBooks(req, res){
  try{ 
    const books = await db.collection("books").find({}).toArray();
    
    res.send(books)
  } catch {
    res.sendStatus(500)
  }
};

export async function addBook(req, res){
  try {
    const book = req.body;
    console.log(book);
    db.collection("books").insertOne({ ...book })

    res.sendStatus(201)
  } catch {
    res.sendStatus(500)
  }
}