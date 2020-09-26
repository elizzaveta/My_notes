

function load_localStorage(){
    let order = [];
    let text = document.getElementById("my_title");
    for(let i = 0; i<localStorage.length; i++){
        let id = localStorage.key(i);
        let t = localStorage.getItem(id);
        t = JSON.parse(t);
        order.push(t);

    }
    console.log(order);
    console.log("br");
    sort_notes_from_ls(order);
    //console.log(order);
    //console.log("br");
    add_note_from_storage(order);

}

function sort_notes_from_ls(order){
    let data = order.sort(function(a, b) {
        return ((a.time === b.time) ? 0 : ((a.time > b.time) ? 1 : -1));
    });
    console.log(data);

    console.log("br");
}

function add_note_from_storage(order){
    let note_block = document.getElementById("my_notes_div");

    for(let i = 0; i<order.length;i++){
        let note_details = order[i];
        let new_note = document.createElement("div");

        new_note.className = "note_preview";
        new_note.id = note_details.id;
        new_note.textContent = note_details.title;
        new_note.onclick = function (){ cll(this.id); }

        note_block.prepend(new_note);
    }



}

/// NOT WORKING
window.addEventListener('hashchange', hashchange);

function hashchange(){
    let id = location.hash;
    console.log(id);
}
