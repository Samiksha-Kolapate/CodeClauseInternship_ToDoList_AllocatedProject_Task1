const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container"); 


function addTask(){
    if(inputBox.value === ''){
        alert("Please enter the task.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"   // code for cross icon
        li.appendChild(span);
    }
    inputBox.value = ""; // clear the inputbox after adding the text
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");  // to toggle ; completed or not
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();  // to delete task when completed
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);  // to save tasks in app
}


function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();