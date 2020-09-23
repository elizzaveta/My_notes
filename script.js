
function add_note_type_main(){
    let date=document.getElementById("note_date");
    let title = document.getElementById("my_title");
    let note = document.getElementById("note");
    date.textContent = "";
    title.value = "";
    note.value = "";

}

function cll(idd){
    let el = document.getElementById(idd);
    let text = localStorage.getItem(idd);
    alert(text);
    let text_area = document.getElementById("note");
    text_area.innerHTML = text;


    //el.innerText="here";
    //alert(idd);

}
function save_note_button(){
    let  title = document.getElementById("my_title").value;
    let text = document.getElementById("note").value;
    //add date !?
    let now=new Date();
    let hour = now.getHours();
    let min = now.getMinutes();

    let time = hour+":"+min;

    let note_block = document.getElementById("my_notes_div");
    let new_note = document.createElement("div");
    new_note.className = "note_preview";
    new_note.textContent = title;
    new_note.onclick = function (){
        cll(this.id);
    }

    let my_hash = create_hash();
    new_note.id = my_hash;
    location.hash = my_hash;

    localStorage.setItem(my_hash,text);

    note_block.prepend(new_note);
}


function create_hash() {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


