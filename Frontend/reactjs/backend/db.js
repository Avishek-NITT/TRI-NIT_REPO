const mongoose = require("mongoose");

const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Falcon:sharv123@cluster0.q7cys5i.mongodb.net/lingua', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'lingua' 
        });
        console.log("Connected to MongoDB Atlas");

        const collection = mongoose.connection.db.collection("sample");
        const data = await collection.find({}).toArray();
        console.log(data);
    } catch (err) {
        console.error("Error:", err);
    }
};

module.exports = mongoDB;
