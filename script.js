
function add_note_type_main(){
    let date=document.getElementById("note_date");
    let title = document.getElementById("my_title");
    let note = document.getElementById("note");
    date.textContent = "";
    title.value = "";
    note.value = "";

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


    let my_hash = create_hash();
    new_note.id = my_hash;
    location.hash = my_hash;

    note_block.prepend(new_note);
}

function cll(){
    document.querySelector('#note_preview').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
        let id = e.target.id; // Получили ID, т.к. в e.target содержится элемент по которому кликнули
        alert(id)
    });
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


