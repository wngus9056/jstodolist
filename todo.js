start();

function start() {
    document.getElementById('addInput').addEventListener('submit', addToDo);
    // document.getElementById('form').addEventListener('submit', savetodo);
    document.getElementById('clear').addEventListener('click', clearToDo);
    document.querySelector('ul').addEventListener('click', checkdeleteToDo);
    // document.getElementById('filter').addEventListener('click', checkdeleteToDo);
    // document.getElementById('searchtext').addEventListener('keyup', search);
    document.getElementById('searchText').addEventListener('keyup', search);
}

// const toDos = [];

// function savetodo(e) {
//     e.preventDefault();
//     let toDoInput = document.querySelector('input');
//     const newTodo = toDoInput.value;
//     if(toDoInput.value !== ''){
//         addTask(toDoInput.value);
//         addFilter(toDoInput.value);
//         savetodos();
//         toDoInput.value = '';
//         toDos.push(newTodo);
//     }else{
//         alert('호우')
//     }
// }

// function savetodos() {
//     localStorage.setItem("todos", JSON.stringify(toDos));
// }

function addToDo(e) {
    e.preventDefault();
    let ToDoValue = document.querySelector('input');
    if(ToDoValue.value !== ''){
        addTask(ToDoValue.value)
        // addFilter(ToDoValue.value)
        ToDoValue.value = '';
    }else{
        alert('호우')
    }
}

// function addFilter(value) {
//     let ul = document.querySelectorAll('ul')[2];
//     let li = document.createElement('li');
//     let label = document.createElement('label');
//     li.className = 'filtertext'
//     li.innerText = value
//     // li.innerHTML = `<label class="filtertext">${value}</label>`
//     ul.appendChild(li)
// }

function addTask(value) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.className = "todoList"
    li.innerHTML = `<span class="delete">❌</span><input type="checkbox" class="check"><label>&nbsp${value}</label><button class="edit">edit</button>`
    ul.appendChild(li)
}

function clearToDo(e) {
    let check = confirm('다 지울거야?')
    if(check == true){
        document.querySelector('ul').innerHTML = '';
        document.querySelectorAll('ul')[1].innerHTML = '';
        // document.querySelectorAll('ul')[2].innerHTML = '';
        // let ul = document.querySelector('ul').innerHTML = '';
        // let filter_ul = document.querySelectorAll('ul')[2].innerHTML = '';
        alert('다 지웠다')
    }else {
        pass
    }
}

function checkdeleteToDo(e) {
    if(e.target.className == 'delete') {
        deleteToDo(e);
        alert('지워졌다')
    }else if(e.target.className == 'edit') {
        editToDo(e)
    }else if(e.target.className == 'check') {
        checkToDo(e);
    }
}

function checkToDo(e) {
    // const todo = e.target.nextSibling;
    // console.log(e.target.parentNode.childNodes[2])
    let text = e.target.nextSibling.textContent
    if(e.target.checked) {
        let check = confirm('다 했어?')
        if(check == true) {
            let remove = e.target.parentNode;
            let parentNode = remove.parentNode;
            parentNode.removeChild(remove);

            // filter_parentNode.removeChild(filter_remove);
            // let filter_ul = e.target.querySelectorAll('ul')[2].innerHTML = '';
            alert('잘했어')

            let ul = document.getElementById('doneList');
            let li = document.createElement('li');
            let today = new Date();
            li.innerHTML = `<label class="doneText">${text}</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b class="today">${today}</b>`
            ul.appendChild(li)
        }else {
            pass
        }
    }
}

// function checkToDo(e) {
//     const todo = e.target.nextSibling;
//     if(e.target.checked)
//         todo.style.color = "#dddddd";
//     else 
//         todo.style.color = "#000000";
// }

function deleteToDo(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

function editToDo(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
    let text = e.target.previousSibling.textContent
    let edit = prompt("Edit", text)
    if(edit !== '') {
        addTask(edit)
        // addFilter(edit)
    }else {
        alert('호우')
    }
}

// function search() {
//     const value = document.getElementById('searchtext').value.toUpperCase();
//     const array = document.getElementsByClassName('filtertext')

//     for(let row of array){
//         let array_key = row.textContent
//         //console.log(array_key);
//         if(array_key.toUpperCase().indexOf(value) > -1) {
//             row.style = ''
//         }else {
//             row.style.display = 'none'
//         }
//     }
// }

function search() {
    const value = document.getElementById('searchText').value.toUpperCase();
    const array = document.getElementsByClassName('todoList');

        for(let row of array){
        let array_key = row.textContent
        if(array_key.toUpperCase().indexOf(value) > -1) {
            row.style = ''
        }else {
            row.style.display = 'none'
        }
    }
}
