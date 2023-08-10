var admin = require("firebase-admin");
const { getDatabase } = require("firebase-admin/database");

admin.initializeApp({
  credential: admin.credential.cert({
    "type": process.env.TYPE,
    "project_id": process.env.PROJECTID,
    "private_key_id": process.env.PRIVATEKEYID,
    "private_key": process.env.PRIVATEKEY,
    "client_email": process.env.CLIENTEMAIL,
    "client_id": process.env.CLIENTID,
    "auth_uri": process.env.AUTHURI,
    "token_uri": process.env.TOKENURI,
    "auth_provider_x509_cert_url": process.env.AUTHPROVIDERCERTURL,
    "client_x509_cert_url": process.env.CLIENTCERTURL,
    "universe_domain": process.env.UNIVERSEDOMAIN
  }),
  databaseURL: process.env.DATABASEURL
});

const db = getDatabase();

module.exports = { db }
