const { cities } = require('../database/db');

const admin = require("firebase-admin");
const db = admin.firestore();

module.exports = {
    async test1(req, res) {
        try {

            const data = {
                name: 'Los Angeles',
                state: 'CA',
                country: 'USA'
            };

            // Add a new document in collection "cities" with ID 'LA'
            const result = await cities.doc('LA').set(data);

            /** If the document does not exist, it will be created. If the document does exist, 
                its contents will be overwritten with the newly provided data, unless you specify 
                that the data should be merged into the existing document */

            //When you use set() to create a document, you must specify an ID for the document to create.
            await cities.doc('new-city-id').set(data);


            const marge = await cities.doc('LA').set({
                capital: true
            }, { merge: true });

            res.json({ message: "created successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async test2(req, res) {
        try {

            const data = {
                stringExample: 'Hello, World!',
                booleanExample: true,
                numberExample: 3.14159265,
                arrayExample: [5, true, 'hello'],
                nullExample: null,
                objectExample: {
                    a: 5,
                    b: true
                }
            };

            const result = await db.collection('data').doc('one').set(data);

            res.json({ message: "created successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async test3(req, res) {
        try {

            /** But sometimes there isn't a meaningful ID for the document, and it's more convenient to 
             * let Cloud Firestore auto-generate an ID for you. You can do this by calling add():*/

            // Add a new document with a generated id.
            const res = await cities.add({
                name: 'Tokyo',
                country: 'Japan'
            });

            console.log('Added document with ID: ', res.id);

            res.json({ message: "created successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }


}