import express from 'express';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())

const notes = []

app.get("/notes", function getNotes(req, res) {
    console.log("get notes")
    res.json(notes)
})

app.post("/note", function addNote(req, res) {
    console.log("save note")
    console.log(req.body)

    const name = req.body.name
    const date = req.body.date
    const note = req.body.note

    notes.push(req.body)
    notes.push({
        name: name,
        note: note, 
        date: date
    })
    res.json(true)
})

app.listen(3000)
