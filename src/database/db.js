const admin = require("firebase-admin");

const db = admin.firestore();

const products = db.collection("products");


module.exports = {
    products
}