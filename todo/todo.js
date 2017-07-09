function get_data() {
    var dat = new Array;
    var dat_str = localStorage.getItem('todo');
    if (dat_str !== null) {
        dat = JSON.parse(dat_str); 
    }
    return dat;
}
 
function add() {
    var task = document.getElementById('task').value;
 
    var dat = get_data();
    dat.push(task);
    localStorage.setItem('todo', JSON.stringify(dat));
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var dat = get_data();
    dat.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(dat));
 
    show();
 
    return false;
}
 
function show() {
    var dat = get_data();
 
    var html = '<ul>';
    for(var i=0; i<dat.length; i++) {
        html += '<li>' + dat[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('dat').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();
