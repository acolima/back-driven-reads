import db from "../db.js"

export async function addToCart(req, res) {
  try {
    const { user } = res.locals
    const book = req.body;

    await db.collection("bag").insertOne({ ...book });

    res.sendStatus(201)
  } catch {
    res.sendStatus(500);
  }
};

export async function getBag(req, res) {
  try {
    let aux = 0;
    const bag = await db.collection("bag").find({}).toArray();

    bag.map(item => {
      const price = item.price.replace(",", ".")
      aux += parseFloat(price)
    })

    const total = aux.toString().replace(".", ",")
    res.send({ items: bag, total });
  } catch {
    res.sendStatus(500);
  }
}

export async function deleteBag(req, res) {
  try {
    db.collection("bag").deleteMany({})
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

