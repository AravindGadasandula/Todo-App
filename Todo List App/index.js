const inputBox = document.getElementById('input');
const addBtn = document.getElementById('btn1');
const clearBtn = document.getElementById('btn2');
const todolist = document.getElementById('todo-list');

inputBox.addEventListener('keyup', function(e){
if(e.keyCode==13){
e.preventDefault();
addBtn.onclick();
}

})


inputBox.onkeyup =() =>{
    let userData = inputBox.value;//getting user entered value
    if(userData ){ //if inputBox is not empty
        addBtn.classList.add('active');
    }else {
        addBtn.classList.remove('active');//if empty

    }
}

showTask();
//if user click on the add btn;

addBtn.onclick= ()=>{
    let userData = inputBox.value
    let getlocalStorage = localStorage.getItem('New Todo'); //getting local storage
    if(getlocalStorage == null){
      listArr = [];
    }else {
        listArr = JSON.parse(getlocalStorage);//transform json string into js object
    }
    listArr.push(userData)
    localStorage.setItem("New Todo",JSON.stringify(listArr)); //transform js object into json string
    showTask()
    addBtn.classList.remove('active');//if empty
    
}

function showTask(){


     let getlocalStorage = localStorage.getItem('New Todo'); //getting local storage
    if(getlocalStorage == null){
      listArr = [];

    }else {
        listArr = JSON.parse(getlocalStorage);//transform js string into js object
    }
    const pendingNumb = document.querySelector('.pendingNumb');
    pendingNumb.textContent=listArr.length
    let newLiTag = '';
    listArr.forEach((element,index) => {
        newLiTag += ` 
    <li>${ element} <span onclick='deleteTask(${index})' ><i class="fas fa-trash"></i></span> </li>

                   `
    });
    todolist.innerHTML = newLiTag;
        if( newLiTag){ //if inputBox is not empty
        clearBtn.classList.add('active');
    }else {
        clearBtn.classList.remove('active');//if empty
    }
    inputBox.value = '';

    

}

function deleteTask(index){
    let getlocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getlocalStorage)
    listArr.splice(index,1); //delete or remove the particular indexed li
      localStorage.setItem("New Todo",JSON.stringify(listArr)); //transform js ob;ject into js string
    showTask()

}

//delete All button

clearBtn.onclick= ()=>{
    listArr =[];
    localStorage.setItem('New Todo',JSON.stringify(listArr));
    showTask();
}