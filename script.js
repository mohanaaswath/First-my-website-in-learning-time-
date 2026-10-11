function about(){
    document.getElementById("About").scrollIntoView({behavior:"smooth"});
}

function project(){
    document.getElementById("Project").scrollIntoView({behavior:"smooth"})
}

function contact(){
    document.getElementById("Contact").scrollIntoView({behavior:"smooth"})
}




 
/*function homepage(){
     document.getElementById("Home").scrollIntoView({behavior:"smooth"})
}

function aboutpage(){
     document.getElementById("About").scrollIntoView({behavior:"smooth"})
}


function servicepage(){
     document.getElementById("Service").scrollIntoView({behavior:"smooth"})
}

function certificatepage(){
     document.getElementById("Certificate").scrollIntoView({behavior:"smooth"})
}

function projectpage(){
     document.getElementById("Project").scrollIntoView({behavior:"smooth"})
}

function contactpage(){
     document.getElementById("Contact").scrollIntoView({behavior:"smooth"})
} */


var button = document.querySelector(".Home")
button.addEventListener("mouseover",function(){
    document.getElementById("Home").scrollIntoView({behavior:"smooth"})
})

var button = document.querySelector(".About")
button.addEventListener("mouseover",function(){
    document.getElementById("About").scrollIntoView({behavior:"smooth"})
})

var button = document.querySelector(".Service")
button.addEventListener("mouseover",function(){
    document.getElementById("Services").scrollIntoView({behavior:"smooth"})
})

var button = document.querySelector(".Certificate")
button.addEventListener("mouseover",function(){
    document.getElementById("Certificates").scrollIntoView({behavior:"smooth"})
})

var button = document.querySelector(".Project")
button.addEventListener("mouseover",function(){
    document.getElementById("Project").scrollIntoView({behavior:"smooth"})
})

var button = document.querySelector(".Contact")
button.addEventListener("mouseover",function(){
    document.getElementById("Contact").scrollIntoView({behavior:"smooth"})
})

var button = document.getElementById("end-button")
button.addEventListener("mouseover",function(){
    document.getElementById("Home").scrollIntoView({behavior:"smooth"})
})

const titles = ["Full Stack Developer ","Web Developer ","Frontend Developer"]
let index = 0

setInterval(()=>{
   document.getElementById("title").innerText=titles[index]
   index = (index+1)%titles.length
},1000)

