function creartoDo() {
    var input_container = document.getElementById('Inputinfo').value;
    var input_info_container = document.getElementById('InputInfoex').value;
    if (input_container == '' || input_info_container == '') {
        alert('No puedes agregar un toDo vacio! 🥹')
    } else {
        var newh1 = document.createElement('h1')
        var newp = document.createElement('p')
        var newdiv = document.createElement('div')

        newdiv.className = 'toDoTask'
        newp.textContent = input_info_container
        newh1.textContent = input_container

        var container_toDos = document.getElementById('container_toDo');
        
        container_toDos.appendChild(newdiv)
        newdiv.appendChild(newh1)
        newdiv.appendChild(newp)

        document.getElementById('Inputinfo').value = '';
        document.getElementById('InputInfoex').value = '';
    }
}