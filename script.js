
function add_note_type_main(){
    let date=document.getElementById("note_date");
    let title = document.getElementById("my_title");
    let note = document.getElementById("note");
    date.textContent = "";
    title.value = "";
    note.value = "";

    location.hash = "";

}

function cll(idd){
    let el = document.getElementById(idd);
    let json = localStorage.getItem(idd);
    json = JSON.parse(json);


    //alert(text);
    let text_area = document.getElementById("note");
    let title_area = document.getElementById("my_title");
    let time_area = document.getElementById("note_date");

    text_area.value = json.text;
    title_area.value = json.title;
    time_area.textContent = json.time;

    location.hash = idd;

    //el.innerText="here";
    //alert(idd);

}
function save_note_button(){
    let  title = document.getElementById("my_title").value;
    let text = document.getElementById("note").value;
    if(title ==="")title = "Untitled";

    //add date !?
    let now=new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds()

    let time = hour+":"+min+":"+sec;
    //add date !?

    let my_hash = create_hash();

    let info = {
        title: title,
        text: text,
        time: time,
        id: my_hash
    };

    let json = JSON.stringify(info);
    let f = json.p

    let old_date = document.getElementById("note_date");
    let old_date_text = old_date.textContent;
    if(old_date_text === ""){
        save_note_new_note1(json,title,time,my_hash);
    }else{
        update_note();
    }


}

function delete_note_button(){
    delete_note();
    add_note_type_main();
}

function delete_note(){
    let id = location.hash;
    id = id.substr(1,id.length);
    let note = document.getElementById(id);
    localStorage.removeItem(id);
    note.remove();
}

function save_note_new_note1(json, title, time, id){
    let note_block = document.getElementById("my_notes_div");
    let new_note = document.createElement("div");
    let time_text = document.getElementById("note_date");
    time_text.textContent = time;
    new_note.className = "note_preview";
    new_note.textContent = title;
    new_note.onclick = function (){ cll(this.id); }


    new_note.id = id;
    location.hash = id;

    localStorage.setItem(id,json);
    note_block.prepend(new_note);

}

function update_note(){
    delete_note();
    document.getElementById("note_date").textContent = "";
    save_note_button();



}

function save_note_new_note(title, text, time){
    let note_block = document.getElementById("my_notes_div");
    let new_note = document.createElement("div");
    let time_text = document.getElementById("note_date");
    time_text.textContent = time;
    new_note.className = "note_preview";
    new_note.textContent = title;
    new_note.onclick = function (){ cll(this.id); }


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



