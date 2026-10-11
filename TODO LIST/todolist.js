let button = document.getElementById("button-add")
button.addEventListener("click",function(event){
  event.preventDefault()
   const name = document.getElementById("name").value;
   const age = document.getElementById("age").value;
   const date = document.getElementById("date").value;
   const textarea = document.getElementById("textarea").value;
   
   if(name&&age&&date&&textarea){
    const container = document.getElementById("container-2");
    const div = document.createElement("div");
    div.setAttribute("id","todo-list")
    div.innerHTML = `<h2>${name}</h2>
                     <h3>${age}</h3>
                     <h3>${date}</h3> 
                     <h3>${textarea}<h3>
                     <button onclick="deletetask(event)">Delete</button>` 
    container.appendChild(div);

    //clear inputfields 
     document.getElementById("name").value=" ";
     document.getElementById("age").value=" ";
     document.getElementById("date").value=" ";
     document.getElementById("textarea").value=" ";
   }
   else{
    alert("please fill in all fields");
   }
});


function deletetask(event){
    event.target.parentElement.remove()
}
