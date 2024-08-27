import express from 'express';
import cors from 'cors'
import mongo from 'mongodb';

const mongoclient = new mongo.MongoClient('mongodb://localhost:27017')
let db;
mongoclient.connect().then(function () {
    db = mongoclient.db('nikitatest');
});


const app = express();
app.use(cors())
app.use(express.json())



app.get("/notes", function getNotes(req, res) {
    console.log("get notes")
    //res.json(notes)
    const collection = db.collection("nikitacollection");
    collection.find().toArray().then(function (docs) {
        res.json(docs)
    });

    collection.find( {name: "Nikita"}).toArray().then(function (docs) {
        console.log("nikita docs")
        console.log(docs)
    });
})

app.post("/note", function addNote(req, res) {
    console.log("save note")
    console.log(req.body)

    const name = req.body.name
    const date = req.body.date
    const note = req.body.note

    const collection = db.collection("nikitacollection");
    
    collection.insertOne({
        name: name,
        note: note, 
        date: date
    })

    res.json(true)
})

app.listen(3000)
