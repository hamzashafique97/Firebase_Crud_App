const { user } = require('../database/db');

module.exports = {
    async test(req, res) {
        try {
            const aTuringRef = user.doc('aturing');

            await aTuringRef.set({
                'first': 'Alan',
                'middle': 'Mathison',
                'last': 'Turing',
                'born': 1912
            });


            const snapshot = await user.get();
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });

            console.log(snapshot);
            res.json({ message: "User created successfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}