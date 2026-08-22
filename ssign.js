let usern=document.querySelector(".usern");
let passworde=document.querySelector(".passworde");
let Continue=document.querySelector("#Continue");

// /////////////////////////////////////////////////
Continue.addEventListener("click",function(e){
     e.preventDefault()
    if(usern.value===""||passworde.value==="")
    {
        alert("Please fill in the required fields")
        console.log("..");
        
    }
    
                else{
        localStorage.setItem("usern",usern.value);
         localStorage.setItem("passworde",passworde.value);
                 setTimeout(()=>{
                    window.location="home.html"
                 },1500)
    }});