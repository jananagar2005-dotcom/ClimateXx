let signinbtn = document.querySelector("#signin");
let explorebtn = document.querySelector("#explore");

// ///////////////////////////////////////////////////////////////
signinbtn.onclick=function(){
    window.location="ssign.html"
}

explorebtn.onclick=function(){
        if(usern.value===""||passworde.value==="")
        {
            window.location="ssign.html"
        }
        else{
            window.location="cause.html"  
        }
}

