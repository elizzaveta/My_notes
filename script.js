let noteTitle = document.getElementById("noteTitle");
let noteContent = document.getElementById("noteContent");
let noteDate = document.getElementById("noteDate");

// click handlers
function handleAddNoteClick() {
    clearInputs();
    location.hash = "";
}

function handleSaveButtonClick() {
    if (location.hash === "") {
        createNote();
    } else {
        updateNote();
    }
}

function handleDeleteButtonClick() {
    deleteNote();
    handleAddNoteClick();
}

// actions with notes
function deleteNote() {
    let id = location.hash.substring(1);
    let note = document.getElementById(id);
    localStorage.removeItem(id);
    note.remove();
}
function createNote() {
    if (noteIsEmpty()) return;

    let noteData = {
        title: noteTitle.value,
        text: noteContent.value,
        time: getDate().toLocaleString(),
        timestamp: Date.now(),
        id: createHash()
    };

    let noteJson = JSON.stringify(noteData);

    appendNewNote(noteData.time, noteData.id, noteJson);
    handleAddNoteClick();
}
function updateNote() {
    if (noteIsEmpty()) return;
    deleteNote();
    document.getElementById("noteContent").textContent = "";
    createNote();
}
function appendNewNote(date, id, noteJson) {
    let note_block = document.getElementById("my_notes_div");
    let new_note = document.createElement("div");
    let time_text = document.getElementById("noteDate");
    time_text.textContent = date;
    new_note.className = "note_preview";
    let space = "  ";
    new_note.innerHTML = `<pre>${noteTitle.value}<br>${space}${date}<pre>`;
    new_note.onclick = function () {
        handleNoteClick(this.id);
    }

    new_note.id = id;
    location.hash = id;
    localStorage.setItem(id, noteJson);
    note_block.prepend(new_note);
}

function handleNoteClick(id) {
    let json = localStorage.getItem(id);
    json = JSON.parse(json);

    noteContent.value = json.text;
    noteTitle.value = json.title;
    noteDate.textContent = new Date(json.time).toLocaleString();

    location.hash = id;
}
// additional functions
function getDate() {
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
}
function createHash() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function clearInputs() {
    noteTitle.value = "";
    noteContent.value = "";
    noteDate.textContent = ""
}
function noteIsEmpty() {
    return !(noteTitle.value && noteContent.value);
}



