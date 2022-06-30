const admin = require("firebase-admin");

const db = admin.firestore();

const products = db.collection("products");

const user = db.collection("user");


module.exports = {
    products,
    user
}