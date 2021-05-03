import * as express from "express";
import db from "../db";

const router = express.Router();

router.get("/hello", (req, res, next) => {
  res.json("World, it works!");
});

/*
router.get("/chirps2", async (req, res) => {
  try {
    res.json(await db.Chirps.all());
  } catch (e) {
    console.log(e);
    console.log("this is not working. ~catch block");
    res.sendStatus(500);
  }
});
*/

//this is the get request that will either specify a specific chirp to get, or it will return all chirps if no chirp was specified.
router.get("/chirps/:id?", async (req, res) => {
  let id = Number(req.params.id);
  if (id) {
    res.json(await db.Chirps.individualChirp(id));
  } else {
    let rawData = await db.Chirps.all();
    res.json(rawData);
  }
});

router.post("/chirps/", (req, res) => {
  db.Chirps.createTheChirp(req.body);
});

router.delete("/chirps/:id", (req, res) => {
  let id = Number(req.params.id); //by default this is a string, so we coerce it to a number
  db.Chirps.deleteTheChirp(id);
  //chirpstore.DeleteChirp(id);
  //res.json("your chirp was deleted");
});

router.put("/chirps/:id", (req, res) => {
  let id = Number(req.params.id);
  db.Chirps.updateTheChirp(id, req.body);
});

export default router;
