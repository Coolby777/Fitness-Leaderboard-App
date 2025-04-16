// server/config/firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('../firebase-admin.json'); // You’ll generate this in Firebase console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };
