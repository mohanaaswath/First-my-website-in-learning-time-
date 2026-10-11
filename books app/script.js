//select popupbox , popupoverlay , addpopupbutton


var popupoverlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popupbox")
var addpopupbutton = document.getElementById("addpopup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
});

//select cancel button

var cancelbook = document.getElementById("cancelbook")
cancelbook.addEventListener("click" , function(event){
  event.preventDefault()
  popupoverlay.style.display="none";
  popupbox.style.display="none";
})

//select container , addbook ,booktitle , bookauthor , bookdetail

var container = document.querySelector(".container")
var addbook = document.getElementById("addbook")
var booktitle = document.getElementById("booktitle")
var bookauthor = document.getElementById("bookauthor")
var bookdetail = document.getElementById("bookdetail")

addbook.addEventListener("click" , function(event){
  event.preventDefault()
  var div = document.createElement("div")
  div.setAttribute("class","bookcontainer")
  div.innerHTML=`<h2>${booktitle.value}</h2>
                 <h5>${bookauthor.value}</h5>
                 <p>${bookdetails.value}</p>
                 <button onclick = deletebook(event)>Delete</button>`
  container.append(div)
  popupoverlay.style.display="none";
  popupbox.style.display="none";
})

function deletebook(event){
    event.target.parentElement.remove()
}