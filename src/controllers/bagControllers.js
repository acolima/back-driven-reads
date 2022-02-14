import { CallTracker } from "assert/strict";
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
    let total = 0;
    const bag = await db.collection("bag").find({}).toArray();
    for (let i=0; i<bag.length; i++) {
        let x = parseFloat((bag[i].price).replace(",", "."));
    
        total += x;              
    };
    
    function insertDecimal(num){
        return (Math.round(total * 100) / 100).toFixed(2);
      }
    
    const bagInfo = {
        bag,
        total
    }
    res.send({ bagInfo });

} catch {
    res.sendStatus(500);
}
}

