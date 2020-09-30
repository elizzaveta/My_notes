function load_localStorage(){
    let order = [];
    let text = document.getElementById("my_title");
    for(let i = 0; i<localStorage.length; i++){
        let id = localStorage.key(i);
        let t = localStorage.getItem(id);
        t = JSON.parse(t);
        order.push(t);

    }
    sort_notes_from_ls(order);
    add_note_from_storage(order);

    let hash = location.hash;
    if(hash!=""){
        hash = hash.substr(1,hash.length);
        document.getElementById(hash).style.backgroundColor = "#e0e0bf";
        prev_id=hash;
        cll(hash);

    }
}

function sort_notes_from_ls(order){
    let data = order.sort(function(a, b) {
        // return ((a.time === b.time) ? 0 : (a.time > b.time) ? 1 : -1);
        return ((new Date(a.time) === new Date(b.time)) ? 0 : ((new Date(a.time) > new Date(b.time)) ? 1 : -1));
    });
}

function add_note_from_storage(order){
    let note_block = document.getElementById("my_notes_div");

    for(let i = 0; i<order.length;i++){
        let note_details = order[i];
        let new_note = document.createElement("div");

        new_note.className = "note_preview";
        new_note.id = note_details.id;
        let title = note_details.title;
        let time = new Date(note_details.time);
         time =    time.toLocaleString();
        let space = "  ";
        new_note.innerHTML = `<pre>${title}<br>${space}${time}<pre>`;
        new_note.onclick = function (){ cll(this.id); }

        note_block.prepend(new_note);
    }



}

window.addEventListener('hashchange', hashchange);
let prev_id = "";

function hashchange(){
    if(document.getElementById(prev_id))document.getElementById(prev_id).style.backgroundColor = "#ebecec";
    let id = location.hash;
    id = id.substr(1,id.length);
    if(document.getElementById(id)){
        document.getElementById(id).style.backgroundColor = "#e0e0bf";
        cll(id);
    }
    prev_id=id;
}

