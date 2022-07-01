const admin = require("firebase-admin");

const db = admin.firestore();

const cities = db.collection("cities");

module.exports = {
    cities
}