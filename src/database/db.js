const admin = require("firebase-admin");

const db = admin.firestore();

db.settings({ ignoreUndefinedProperties: true })

const cities = db.collection("cities");

module.exports = {
    cities
}