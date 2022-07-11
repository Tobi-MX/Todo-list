//====== TOBI'S PROJECT: A TODO LIST WEB APP ========

//This function creates p tags with classes called pool.
const addToList = () => {
    const eachTodo = document.createElement('p');
    eachTodo.classList  = ['pool'];
    newELements = '<span class = "puff">' + todoInput.value +'</span>' + '<span class = "over">' + '<span class="mark">@</span><span class="delete">X</span>' + '</span>';
    document.getElementById('todos').appendChild(eachTodo);
    eachTodo.innerHTML = newELements;
}

//This funcion completely removes the p tags created.
const removeFromList = () => {
    for(let i = 0; i < delit.length; i++){
        delit[i].addEventListener("click", function(){
            pool[i].style.display = "none";
        });
    }
}

//Initializing variables
const addButton = document.getElementById("add");
const todoInput = document.getElementById("todoInput");
const todos = document.getElementById('todos');
const pool = document.getElementsByClassName("pool");
let dynamic_delete_btn = document.querySelector(".dynamic_delete");
const mark = document.getElementsByClassName('mark');
const delit = document.getElementsByClassName('delete');


todoInput.style.display = "none";

//This function(Main Engine) helps to trap value from the form 
//through the enter key. 
todoInput.addEventListener('keypress', function(e){
    if(todoInput.value !== "" && e.key === 'Enter'){
        console.log(todoInput.value);
        addToList();
        removeFromList();
        todoInput.value = "";
        todoInput.style.display = "block";   
    }
})

//This makes the form appear and disappear.
const block = () =>{
    if(todoInput.style.display === "none"){
        todoInput.style.display = "block";
    }
    else{
        todoInput.style.display = "none";
    }
}


document.addEventListener('click', function(e){
    if(e.target.classList.contains('mark')){                  
       let task = e.target.parentElement.previousElementSibling;
       if(task.style.textDecoration == 'line-through'){
            task.style.textDecoration = 'none';
       } else{
            task.style.textDecoration = 'line-through';
       }
    }
    else if(e.target.classList.contains('dynamic_refresh')){
        document.querySelectorAll('.pool').forEach(function(elem, n){
            elem.style.display = 'none';
        });
    }
    
});






