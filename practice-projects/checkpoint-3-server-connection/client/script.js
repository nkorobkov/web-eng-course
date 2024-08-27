btn = document.querySelector("#send")
btn.addEventListener('click', onclick)

function onclick(){
    note_field = document.querySelector("#note")
    namefield = document.querySelector("#name")

    note_object = {
        name: namefield.value,
        note: note_field.value,
        date: new Date().toDateString()
    }

    p = document.createElement("p")

    p.innerHTML = getNoteRepresentation(note_object)

    container = document.querySelector("#container")
    container.appendChild(p)

    fetch('http://192.168.1.51:3000/note', { 
        method: "POST", 
        headers: {
            'Content-Type': 'application/json' // Specify JSON content
        },
        body: JSON.stringify(note_object)})
}


function loadResults() {
    console.log('note load ')

    fetch("http://192.168.1.51:3000/notes").then(function (res) {
        res.json().then(function (notes) {
            console.log(notes)
            console.log('note load json ' + notes[0].note)

            for (let i = 0; i<notes.length; i += 1) {

                const n = notes[i]
                console.log('note n')
                console.dir(n)
                p = document.createElement("p")

                p.innerHTML = getNoteRepresentation(n)

                container = document.querySelector("#container")
                container.appendChild(p)
            }
        })
    })
}

function getNoteRepresentation(n) {

    return "</br></br>" + n.date + ":  "+n.name + "</br>---</br>" + n.note
}

loadResults()