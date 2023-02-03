let prevNote = null;
window.addEventListener('hashchange', hashchange);


function loadLocalStorageData(){
    if(window.localStorage.length === 0){ return; }
    let notesList = [];
    Object.keys(window.localStorage).forEach((key)=>{
        let note = JSON.parse(localStorage.getItem(key));
        notesList.push(note);
    })
    notesList.sort( (a, b) => { return a.timestamp > b.timestamp})

    displayNotes(notesList);

    if(location.hash !=="") { hashchange() }
}

function displayNotes(notesList){
    let note_block = document.getElementById("my_notes_div");

    notesList.forEach((note)=>{
        let newNote = document.createElement("div");
        newNote.className = "note_preview";
        newNote.id = note.id;
        newNote.innerHTML = `<pre>${note.title}<br>  ${new Date(note.time).toLocaleString()}<pre>`;
        newNote.onclick =  function () {handleNoteClick(this.id);}
        note_block.prepend(newNote);
    })
}

function hashchange(){
    let hash = location.hash.substring(1);
    if(hash === '' && prevNote) prevNote.style.backgroundColor = "#ebecec";
    let targetNote = document.getElementById(hash);
    if(targetNote){
        document.getElementById(hash).style.backgroundColor = "#e0e0bf";
        if(prevNote) prevNote.style.backgroundColor = "#ebecec";
        handleNoteClick(hash);
        prevNote= targetNote;
    }
}


