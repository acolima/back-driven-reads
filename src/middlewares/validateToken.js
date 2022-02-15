import db from "../db.js";

export default async function validateToken(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).send("Token não existe");
  }

  const session = await db.collection("sessions").findOne({ token });
  if (!session) {
    return res.status(401).send("sessão não existe");
  }

  const user = await db.collection("users").findOne({ _id: session.userId });
  if (!user) {
    return res.sendStatus(403);
  }

  res.locals.user = user;
  next();
}