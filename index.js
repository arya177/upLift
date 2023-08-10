require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { db }  = require("./db/firebase");
const { child, ref, get, set, update } =require("firebase/database");
const uuid = require('uuid-random');

//Get all the services
app.get("/",async (req,res) => {
  const dbref = ref(db);
  let snapshot = await get(child(dbref, "services/"));
  res.send(snapshot.val());
})

app.get("/getSimilar",async(req,res) => {
  const reqWord = req.params.word;
  const matchedWord = await fetch(`https://www.getWord.com/${reqWord}`);
  res.send(matchedWord);
})

// Request for submitting a new service
app.post("/",async (req,res)=> {
  const val = 1;
  await set(ref(db, "services/"+ uuid()), {
    name : "New Service available",
    status: "upcoming"
  }).then(() => {
    res.sendStatus(200);
  }).catch(err => {
    res.sendStatus(500);
    console.log(err)});
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
})
