require("dotenv").config({ path: "./src/config/.env" });    
const express = require('express');
const admin = require("firebase-admin");
const cors = require('cors');


// Initializing Firebase Admin SDK
const serviceAccount = require("./src/config/serviceAccoun.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const router = require("./src/routes/router");

const app = express();

// third part middleware
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
app.listen(port, () =>
  console.log(`Server is running on http://${host}:${port}`)
);