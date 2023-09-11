const inputBox=document.getElementById("input");
const listValue=document.getElementById("list-container");

function addTask(){
    if(inputBox.value==''){
        alert('You Might Write Something');
    } else {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listValue.append(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
listValue.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData() {
    var listContainer = document.getElementById("list-container");
    if (listContainer) {
        localStorage.setItem("data", listContainer.innerHTML);
    } else {
        console.error("list-container element not found in the HTML.");
    }
}


function getData() {
    var listContainer = document.getElementById("list-container");
    
    if (listContainer) {
        listContainer.innerHTML = localStorage.getItem("data");
    } else {
        console.error("list-container element not found in the HTML.");
    }
}

getData();
