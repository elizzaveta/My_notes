function load_localStorage(){
    let text = document.getElementById("my_title");
    for(let i = 0; i<localStorage.length; i++){
        let id = localStorage.key(i);
        let t = localStorage.getItem(id);
        add_note_from_storage(id);
    }
}

function add_note_from_storage(key){
    let json = localStorage.getItem(key);
    json = JSON.parse(json);

    let note_block = document.getElementById("my_notes_div");
    let new_note = document.createElement("div");

    new_note.className = "note_preview";
    new_note.textContent = json.title;
    new_note.onclick = function (){ cll(this.id); }

    note_block.append(new_note);
}