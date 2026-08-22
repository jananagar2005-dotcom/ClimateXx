let solution=document.querySelectorAll(".details-sol");
let nextbtn=document.querySelectorAll(".icon11");
let prevbtn=document.querySelectorAll(".icon12");
let current=0;
let choosed =window.location.hash;
// /////////////////////////////////////////////////////////////////
if(choosed){
    solution.forEach((item,index)=>{
        if("#"+item.id===choosed)
        {
              item.style.display="block"
        }
        else{
            item.style.display="none" 
    }
    });
}



else{

solution.forEach((item,index)=> {
    if(index===0){
        item.style.display="block"
    }
    else{
            item.style.display="none" 
    }
    
});
}
nextbtn.forEach((button)=>{
    button.addEventListener("click",function()
{
    solution[current].style.display="none";
    current++;
    if(current>=solution.length){
            setTimeout(()=>{
                        current=0;
                         solution[current].style.display="block";
                 },1500)
   
    }
    else{
      solution[current].style.display="block";
    }
});
});


prevbtn.forEach((button)=>{
    button.addEventListener("click",function()
{
    solution[current].style.display="none";
    current--;
    if(current<0){
        current=solution.length-1;
    }
      solution[current].style.display="block";
});
});