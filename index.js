require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { db }  = require("./db/firebase");
const { child, ref, get, set, update } =require("firebase/database");
const uuid = require('uuid-random');
app.use(express.json());
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true, 
}));

//Get all the services
app.get("/servcies",async (req,res) => {
  const dbref = ref(db);
  let snapshot = await get(child(dbref, "services/"));
  res.send(snapshot.val());
})

//Get all the new Request
app.get("/getRequests", async(req,res) => {
  const email = req.query.email;
  if (!email) {
    return res.status(400).json({ error: 'Email parameter is missing' });
  }
  const currUser = await getUserInfo(email);
  const services = currUser.services;
  try {
    const snapshot = await db.ref("requests/")
      .orderByChild("status")
      .equalTo("active")
      .once("value");
    let availableRequest = {};
    for (const key in snapshot.val()) {
      if (snapshot.val().hasOwnProperty(key)) {
        const value = snapshot.val()[key];
        if (services.includes(value.services)) {
          availableRequest[key] = value;
        }
      }
    }
    res.send(availableRequest);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ error: 'An error occurred while fetching requests' });
  }
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
    mobileNumber : req.body.mobileNumber,
    status : "active",
    datetime : new Date(),
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

app.get("/request", async(req,res) => {
  const requestId = req.query.applicationId;
  let snapshot = await get(ref(db, "requests/" + requestId));
  res.send(snapshot.val());
})

//approval changes request in request and add to approver list also update client with status update and user 
app.post("/approve",async(req,res) => {
  const applicationId = req.query.applicationID;
  const approver = await getUserInfo(req.body.email);
  const dbref = ref(db);
  await db.ref(`requests/${applicationId}/approver`).push({
    name : approver.name,
    mobileNumber : approver.mobileNumber,
    uid : approver.uid,
    email : approver.email,
    status : "waiting"
  })
  res.sendStatus(200);
})

app.post("/accept", async(req,res) => {
  const applicationID = req.body.applicationID;
  const approvalID = req.body.approvalID;
  let getRequesterId;
  await db.ref(`requests/${applicationID}/clientID`).once('value').then((snapshot) => {
    getRequesterId = snapshot.val();
  })
  let getapplicantId;
  await db.ref(`requests/${applicationID}/approver/${approvalID}/uid`).once('value').then((snapshot) => {
    getapplicantId = snapshot.val();
  })

  await db.ref(`requests/${applicationID}/approver/${approvalID}`).update({
    "status" : "Completed"
  })
  await db.ref(`requests/${applicationID}/`).update({
    "status" : "Completed",
  })
  await db.ref(`users/${getRequesterId}/prevServiceRecords/${applicationID}`).update({
    status : "Completed",
    approver : getapplicantId
  })
  let data;
  await db.ref(`requests/${applicationID}/approver`).once('value').then(async(snapshot) => {
    data = { [approvalID]: snapshot.val()[approvalID] };
    await db.ref(`requests/${applicationID}/approver`).set(data);
  })
  await db.ref(`users/${getapplicantId}/prevServiceRecords/${applicationID}`).update({
    status : "Completed",
    RequestedBy : getRequesterId
  })
  res.sendStatus(200);
})

app.post("/reject" , async(req,res) => {
  const applicationID = req.body.applicationID;
  const approvalID = req.body.approvalID;
  let getRequesterId;
  await db.ref(`requests/${applicationID}/clientID`).once('value').then((snapshot) => {
    getRequesterId = snapshot.val();
  })
  let getapplicantId;
  await db.ref(`requests/${applicationID}/approver/${approvalID}/uid`).once('value').then((snapshot) => {
    getapplicantId = snapshot.val();
  })
  await db.ref(`requests/${applicationID}/approver`).update({
    [approvalID] : null
  })
  res.sendStatus(200);
})

app.get("/getSimilar",async(req,res) => {
  const reqWord = req.params.word;
  const matchedWord = await fetch(`https://www.getWord.com/${reqWord}`);
  res.send(matchedWord);
})

async function getUserInfo(email) {
  const snapshot = await db.ref("users/")
      .orderByChild("email")
      .equalTo(email)
      .once("value");
  
  const userObject = snapshot.val();
  
  if (userObject) {
    // Get the user object from the first key in the snapshot
    const userId = Object.keys(userObject)[0];
    const userData = userObject[userId];
    
    // Add the user ID to the user data
    userData.uid = userId;
    
    return userData;
  } else {
    // User not found
    return null;
  }
}

app.get("/getUser", async(req,res) => {
  try {
    const userData = await getUserInfo(req.query.email);
    if (userData) {
      res.status(200).send(userData);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).send("Internal server error");
  }
});

// Request for submitting a new service
app.post("/register",async (req,res)=> {
  await set(ref(db, "users/"+ uuid()), {
    email : req.body.email,
    name : req.body.name,
    currLocation : req.body.location || '',
    prevServiceRecords : [null],
    walletPoints : 0,
    role : req.body.role,
    services : (req.body.services === undefined? null : req.body.services),
    mobileNumber : req.body.mobileNumber ?? ''
   // status : "Free"
  }).then(() => {
    res.sendStatus(200);
  }).catch(err => {
    res.sendStatus(500);
    console.log(err)});
})

app.put("/updateUser", async(req,res) => {
  const dataUser = await getUserInfo(req.body.email);
  await db.ref(`users/${dataUser.uid}`).set({
    email : req.body.email,
    name : req.body.name,
    currLocation : req.body.location,
    prevServiceRecords : dataUser.prevServiceRecords,
    walletPoints : dataUser.walletPoints,
    role : req.body.role,
    services : (req.body.services === undefined? null : req.body.services),
    mobileNumber : req.body.mobileNumber
  })
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
})
