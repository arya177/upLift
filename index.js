require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { db }  = require("./db/firebase");
const { child, ref, get, set, update } =require("firebase/database");
const uuid = require('uuid-random');
app.use(express.json());

//Get all the services
app.get("/servcies",async (req,res) => {
  const dbref = ref(db);
  let snapshot = await get(child(dbref, "services/"));
  res.send(snapshot.val());
})

//Get all the new Request
app.get("/getRequests", async(req,res) => {
  const currUser = await getUserInfo(req.body.email);
  const services = currUser.services;
  const snapshot = await db.ref("requests/")
      .orderByChild("status")
      .equalTo("active")
      .once("value");
  let availableRequest = {};
  for (const key in snapshot.val()) {
    if (snapshot.val().hasOwnProperty(key)) {
      const value = snapshot.val()[key];
      if (services.includes(value.services)) {
        availableRequest[key] = value
      }
    }
  }
  
  res.send(availableRequest);
})

app.post("/createRequest", async(req,res) => {
  const data = await getUserInfo(req.body.email);
  const requestId = uuid();
  await set(ref(db, "requests/"+ requestId), {
    name : data.name,
    clientID : data.uid, 
    requestedLocation : req.body.location,
    services : req.body.service,
    serviceDesc : req.body.serviceDesc,
    mobileNumber : req.body.mobile,
    status : "active",
    expectedServiceTime : req.body.expectTime,
    proposedPayment : req.body.payment,
    approver : null
  }).then(async () => {
    const temp = {
      status : "active",
      approver : null
    }

    var tempStore = (data["prevServiceRecords"] === undefined ? {} : data["prevServiceRecords"]);
    tempStore[requestId] = temp;
    await update(ref(db, "users/" + data.uid), {
      "prevServiceRecords" : tempStore
    }).then(() => {
    }).catch(err => console.log(err));
    res.sendStatus(200);
  }).catch(err => {
    res.sendStatus(500);
    console.log(err)});
})


//approval changes request in request and add to approver list also update client with status update and user 
app.post("/approve",async(req,res) => {
  const applicationId = req.query.applicationID;
  const approver = await getUserInfo(req.body.email);
  const dbref = ref(db);
  let snapshot = await get(child(dbref, "requests/" + applicationId));
  await update(ref(db, "requests/" + applicationId), {
    "status" : "in process", "approver" : req.body.email
  })

  const temp = {
    status : "in Process",
    requestedBy : snapshot.val().name
  }
  var tempStore = (approver["prevServiceRecords"] === undefined ? {} : approver["prevServiceRecords"]);
  tempStore[applicationId] =temp;
  await update(ref(db,"users/" + approver.uid), {
    "prevServiceRecords" : tempStore  // "status" : "Busy"
  }).then(() => {  
  }).catch(err => {
    console.log(err);
  })
  await update(ref(db,"users/" + snapshot.val().clientID +'/' + "prevServiceRecords/" + applicationId), {
    "status" : "in process", "serviceProvider" : approver.name
  })
  res.sendStatus(200);
})

app.get("/getSimilar",async(req,res) => {
  const reqWord = req.params.word;
  const matchedWord = await fetch(`https://www.getWord.com/${reqWord}`);
  res.send(matchedWord);
})

async function getUserInfo(userID) {
  const snapshot = await db.ref("users/")
      .orderByChild("email")
      .equalTo(userID)
      .once("value");
  let tempStore = snapshot.val()[Object.keys(snapshot.val())];
  tempStore["uid"] = Object.keys(snapshot.val());
  return tempStore;
}

app.get("/getUser", async(req,res) => {
  res.send(getUserInfo(req.body.email));
})

// Request for submitting a new service
app.post("/register",async (req,res)=> {
  await set(ref(db, "users/"+ uuid()), {
    email : req.body.email,
    name : req.body.name,
    currLocation : req.body.location,
    prevServiceRecords : [null],
    walletPoints : 0,
    role : req.body.role,
    prevProviderRecords : [null],
    services : (req.body.services === undefined? null : req.body.services),
    mobileNumber : req.body.mobile
   // status : "Free"
  }).then(() => {
    res.sendStatus(200);
  }).catch(err => {
    res.sendStatus(500);
    console.log(err)});
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
})
